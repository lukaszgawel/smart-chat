import { SyntheticEvent } from "react";

interface Props {
  isLoading: boolean;
  currentMessage: string;
  setCurrentMessage: (msg: string) => void;
  onSubmit: (e: SyntheticEvent) => Promise<void>;
}

const InputBar = ({
  isLoading,
  currentMessage,
  setCurrentMessage,
  onSubmit,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="p-4 bg-white">
      <div className="flex items-center bg-[#F9F9F5] rounded-full p-3 shadow-md border border-gray-200">
        <input
          type="text"
          placeholder="Type a message"
          value={currentMessage}
          onChange={handleChange}
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-700"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-teal-400 text-white rounded-xl py-2 px-5 ml-2 shadow-md hover:bg-teal-500"
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default InputBar;
