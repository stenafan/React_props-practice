import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import contacts from "./Contacts"; // Correct import statement, matching case and assuming the file name is Contacts.js

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map((contact) => (
        <Card
          key={contact.id} // Assuming each contact has a unique 'id' property
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
