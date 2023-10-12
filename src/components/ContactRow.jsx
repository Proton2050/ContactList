export default function ContactRow({ setSelectedContactId, contact }) {

    return (
        <tr onClick={()=>{
            setSelectedContactId(contact.id);
        }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

// add event listenter to each row
// onClick the page rerenders to only show details for one contact
