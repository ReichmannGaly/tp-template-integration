import {useState} from "react";
import "./Modal.css"
import axios from "axios";

export function Modal(props){
    const [id, setId] = useState('');
    const [name , setName] = useState('');
    const [username  , setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [adress  , setAdress] = useState('');
    const [phone  , setPhone] = useState('');
    const [website  , setWebsite] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const form = {
            "id": id,
            "name": name,
            "email": email,
            "address": adress,
            "phone": phone,
            "website": website,
            "company": company
        };

        axios.post("https://jsonplaceholder.typicode.com/users",form)
            .then(response => console.log(response));


        setId('');
        setName('');
        setUsername('');
        setEmail('');
        setAdress('');
        setPhone('');
        setWebsite('');
        setCompany('');
    }
    if (!props.show) {
        return null;
    }
    return(
        <>
            <div className="modal" onClick={props.onClose}>
                <div className="m-content" onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={props.onClose}>&times;</span>
                    <div className="m-header">
                        <h4 className="m-title">Add data</h4>
                    </div>
                    <div className="m-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="id">Id</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="id"
                                    name="id"
                                    onChange={event => setId(event.target.value)}
                                    value={id}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    onChange={event => setName(event.target.value)}
                                    value={name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Userame</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    onChange={event => setUsername(event.target.value)}
                                    value={username}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={event => setEmail(event.target.value)}
                                    value={email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    onChange={event => setAdress(event.target.value)}
                                    value={adress}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    onChange={event => setPhone(event.target.value)}
                                    value={phone}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="website"
                                    name="website"
                                    onChange={event => setWebsite(event.target.value)}
                                    value={website}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    name="company"
                                    onChange={event => setCompany(event.target.value)}
                                    value={company}/>
                            </div>
                            <div className="modal-footer">
                                <input className="btn btn-primary" type="submit" value="Save" id="submit-button"/>
                                <input className="btn btn-primary" type="reset" value="Cancel" onClick={props.onClose}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}