import React, { useState } from "react";
import "./styles.css";

const initState = [
  {
    id: 1,
    first_name: "albert",
    last_name: "Sbestian",
    phone: "3463854"
  },
  {
    id: 2,
    first_name: "raj",
    last_name: "kumar",
    phone: "3463854"
  }
];
export default function App() {
  const [contactList, setContactList] = useState(initState);
  //console.log(contac(tList)
  const handleClick = (name, phone) => {
    setContactList([
      ...contactList,
      {
        id: contactList[contactList.length - 1].id + 1,
        first_name: name,
        last_name: "",
        phone: phone
      }
    ]);
  };
  console.log(contactList);

  //  const elems = [
  //    React.createElement("div",{},"albert"),
  //  React.createElement("div",{},"raj")
  // ]

  //  const List =contactList.map((item)=>
  //  <div> {item.first_name}</div>)
  //console.log(elems)

  const deleteById = (id) => {
    console.log(id);
    //  setContactList(contactList.filter((item)=> item.id !== id))
  };
  return (
    <div className="App">
      <h1> ContactList</h1>
      <AddContact handleClick={handleClick} />
      <br />
      {contactList.map((item) => (
        <div key={item.id}>
          <ContactCard
            id={item.id}
            name={item.first_name}
            phone={item.phone}
            onDelete={deleteById}
          />
        </div>
      ))}
      {/* {List} */}
    </div>
  );
}

const ContactCard = ({ id, name, phone, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        border: "1px solid black",
        marginBottom: "0.25rem",
        gap: "1rem"
      }}
    >
      {name} {phone}
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

const AddContact = (props) => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    if (props.handleClick) props.handleClick(text, phone);
    setText("");
    setPhone("");
  };

  return (
    <div>
      <div>
        <input
          placeholder="add name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="add phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};
