import React from "react";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="App h-full w-full flex flex-col items-center ">
      <span className="uppercase text-3xl my-4 text-white z-1 text-center md:my-8 md:text-5xl">
        Todo App
      </span>
      <InputField />
    </div>
  );
}

export default App;
