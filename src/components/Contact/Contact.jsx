import { TiPhone, TiUser } from "react-icons/ti";
export default function Contact({ contact, onDelete }) {
  return (
    <>
      <p>
        <TiUser />
        {contact.name}
      </p>
      <p>
        <TiPhone />
        {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
}
