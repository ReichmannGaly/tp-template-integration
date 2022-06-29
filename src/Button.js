import {useState} from "react";
import {Modal} from "./Modal";

export function Button(){
    const [show,setShow] = useState(false);
    return(
        <>
            <button className="btn btn-primary" onClick={() => setShow(true)}>Add</button>
            <Modal onClose={()=>setShow(false)} show={show}/>
        </>

    );
}