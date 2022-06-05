import { useState } from "react";
import { addContact } from "../../redux/contactsSlice/contactsSlice";
import { getRandomStatus } from "../../services/utils";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { FaUserTie } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export const AddContactForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = await getRandomStatus();
    const newContact = {
      id: nanoid(3),
      avatar: name,
      name,
      age,
      status,
    };
    console.log("newContact", newContact);
    dispatch(addContact(newContact));
  };
  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "age":
        setAge(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  return (
    <div className="container">
      <form style={{ margin: "0 auto", width: "300px" }}>
        <label style={{ display: "block" }}>
          <FaUserTie size="20px" />
          Name
          <input
            style={{ marginLeft: "8px" }}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "block" }}>
          <AiFillMessage size="20px" />
          Age
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <button
          style={{ marginTop: "20px" }}
          type="submit"
          onClick={handleSubmit}
        >
          {" "}
          add contact
        </button>
      </form>
    </div>
  );
};
