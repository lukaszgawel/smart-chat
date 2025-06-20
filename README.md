# SmartChat

A modern AI chat interface with integrated web search functionality.

## Features

- Stream AI responses
- AI with tools for up-to-date information
- Maintains conversation context

## Architecture

SmartChat follows a client-server architecture:

- Client (Next.js + React)
- Server (FastAPI + LangGraph)

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- Docker
- OpenAI API key
- Tavily API key
- Langsmith API key

### Runing with docker-compose

- make sure you are in root dicrectory

- make sure all the environment variables from both `.env` files (`client` & `server`) are avaiable and have valid values

- execute following command:

`docker-compose up`

### Details

Please refer to `client` and `server` Readme files for more information
