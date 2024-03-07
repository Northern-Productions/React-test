import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <userInfoForm />
      </div>
    </>
  );
}

const userInfoForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`${firstName} ${lastName}`);
        setFirstName("");
        setLastName("");
      }}
    >
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="firstName">Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default App;
