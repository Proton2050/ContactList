import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const data = await response.json();
                console.log(data);
                setContact(data);
            } catch(error){
            console.error(error);
        }}
        fetchContact();
    }, [selectedContactId])

    return (
        <div>
            <h3>Name</h3>
            <p>{contact?.name}</p>
            <h3>Username</h3>
            <p>{contact?.username}</p>
            <h3>Email</h3>
            <p>{contact?.email}</p>
            <h3>Phone</h3>
            <p>{contact?.phone}</p>
            <h3>Website</h3>
            <p>{contact?.website}</p>
            <h3>Address</h3>
            <p>{contact?.address.street}, {contact?.address.suite}</p>
            <p>{contact?.address.city}, {contact?.address.zipcode}</p>
            <button className="back-button" onClick={()=>{
                setSelectedContactId(null);
            }}>Back to List</button>
        </div>
    )
}