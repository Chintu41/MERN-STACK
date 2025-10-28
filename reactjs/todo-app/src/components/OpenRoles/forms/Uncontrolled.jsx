import { useState } from "react";

function UncontrolledApp() {
  const [name, Setname] = useState(""); //intial state

  function handleNameChange(event) {
    let nameInput = event.target.value;
    Setname((previousName) => {
      previousName = nameInput;
      return previousName;
    });
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = { name: name };
    console.log(data);
  };
  return (
    <>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <input
          className="bg-white placeholder-grey-400"
          onChange={(event) => handleNameChange(event)}
          type="text"
          placeholder="Enter Name"
          required
        />
        <button
          className="bg-red-200 text-white hover:bg-red-500"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
}
export default UncontrolledAppApp;
