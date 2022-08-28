import { useState } from "react";

export const Message = (props) => {
    const [message, setMessage] = useState('Hello Visitor');
    return (
        <>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank you for subscibing !')}>Subscribe</button>
        </>
    )
}