import React, { useRef } from "react";
type InputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
};

const InputField = (props: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-8/12 relative items-center"
      onSubmit={(e) => {
        props.handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
        placeholder="Enter todo here"
        className="w-full px-8 py-5 text-2xl border-none transition duration-200 rounded-3xl"
      />
      <button className="absolute right-0 w-12 h-12 m-3 rounded-3xl bg-gray-700 text-white">
        Enter
      </button>
    </form>
  );
};

export default InputField;
