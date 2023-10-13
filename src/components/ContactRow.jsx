import { useState } from "react";
export default function ContactRow({ setSelectedContactId, contact }) {

    return (
        <tr className="tr" onClick={()=>{
            setSelectedContactId(contact.id);
        }}>
            <td className="contactName">{contact.name}</td>
            <td className="contactName">{contact.email}</td>
            <td className="contactName">{contact.phone}</td>
        </tr>
    );
}

// add event listenter to each row
// onClick the page rerenders to only show details for one contact
