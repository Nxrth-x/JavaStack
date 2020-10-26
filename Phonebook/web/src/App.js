import {useState, useEffect} from 'react';
import {FiTrash} from 'react-icons/fi';
import api from './services/api';
import './App.css';

const App = () => {

    //Variables
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [contacts, setContacts] = useState([]);

    //Loads contacts
    useEffect(() => {getContacts()}, []);

    //Handles the user submit
    const handleSubmit = async(event) => {
        event.preventDefault();

        if(name && nickname && phone){
            const contact = {name, nickname, phone};
            await api.post("/create", contact);
            getContacts();
            clearInputs();
        }
    }
    
    //Clear all the user inputs
    const clearInputs = () => {
        setName('');
        setNickname('');
        setPhone('');
    }

    //Gets all the contacts
    const getContacts = async() => {
        const {data} = await api.get("/");
        setContacts(data);
    }

    //Deletes the contact by the id
    const deleteContact = async(id) => {
        await api.delete(`/delete/${id}`);
        getContacts();
    }

    //Main page
    return(
        <div className="App">
            <h1 className="title">PHONE BOOK</h1>
            {/* Form */}
            <form className="form" onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Nickname" value={nickname} onChange={e => setNickname(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                <br/>
                <button>Add</button>
            </form>
            {/* Contacts list */}
            <div className="contacts">
                {
                    contacts.map((item, index) => (
                        <div className="contact" key={index}>
                            <p className="contact-name">{item.name}</p>
                            <p className="contact-nickname">({item.nickname})</p>
                            <p className="contact-telephone">{item.phone}</p>
                                <div className="contact-icons">
                                    <FiTrash onClick={e => deleteContact(item._id)}/>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default App;