import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";

const dataContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function App() {
  const [contacts, setContacts] = useState(() => {
    const savedUser = window.localStorage.getItem("local-saved-user");
    if (savedUser !== null) {
      return JSON.parse(savedUser).contacts;
    } else {
      return dataContacts;
    }
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem(
      "local-saved-user",
      JSON.stringify({ contacts }),
    );
  }, [contacts]);

  const addUser = (newUser) => {
    setContacts((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };
  const deleteUser = (userId) => {
    setContacts((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };
  const visibleUser = contacts.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
