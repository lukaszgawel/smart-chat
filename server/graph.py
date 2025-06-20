from typing import TypedDict, Annotated
from langgraph.graph import add_messages, StateGraph, END
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from langchain_community.tools.tavily_search import TavilySearchResults
from langgraph.checkpoint.memory import MemorySaver
from langgraph.prebuilt import ToolNode, tools_condition

load_dotenv()

class State(TypedDict):
        messages: Annotated[list, add_messages]

search_tool = TavilySearchResults(
    max_results=2,
)
tools = [search_tool]

llm = ChatOpenAI(model="gpt-4o-mini")
llm_with_tools = llm.bind_tools(tools=tools)

async def model(state: State):
    result = await llm_with_tools.ainvoke(state["messages"])
    return {
        "messages": [result], 
    }

def build_graph():
    memory = MemorySaver()

    tool_node = ToolNode(tools=tools)

    graph_builder = StateGraph(State)
    graph_builder.add_node("model", model)
    graph_builder.add_node("tools", tool_node)
    graph_builder.set_entry_point("model")
    graph_builder.add_conditional_edges("model", tools_condition)
    graph_builder.add_edge("tools", "model")

    return graph_builder.compile(checkpointer=memory)
