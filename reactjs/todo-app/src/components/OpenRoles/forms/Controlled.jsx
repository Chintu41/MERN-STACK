import { useState } from "react";

function Controlled() {
  let displayNameFromLoginwithGoogle = "chintu";
  let emailFromLoginWithGoogle = "saikumarnampelly@gmail.com";

  const [name, Setname] = useState(displayNameFromLoginwithGoogle);
  const [email, setemail] = useState(emailFromLoginWithGoogle);
  const [age, setage] = useState();

  const handleFormSubmit = (event) => {
    const data = {
      name: name,
      email: email,
      age: age,
    };
    console.log(data);
  };
  return (
    <form className="p-10 bg-green-400 border-green-600  rounded-2xl border-2 flex flex-col gap-3 items-center" onSubmit={(event) => handleFormSubmit(event)}>
      <input
        className="text-center bg-white placeholder-grey-400 rounded-xl"
        onChange={(event) => Setname(event.target.value)}
        type="text"
        placeholder="Enter Name"
        required
      />
      <input
        className="text-center bg-white placeholder-grey-400 rounded-xl"
        onChange={(event) => setemail(event.target.value)}
        type="email"
        placeholder="email"
        required
      />
      <input
        className="text-center   bg-white placeholder-grey-400 rounded-xl"
        onChange={(event) => setage(event.target.value)}
        type="number"
        placeholder=" Enter Age"
        required
      />
      <button className="bg-red-600 text-white hover:bg-red-400 rounded-xl py-1 px-2" >Register</button>
    </form>
  );
}
export default Controlled;
