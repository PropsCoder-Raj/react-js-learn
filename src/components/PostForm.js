import { useState } from "react";

export const PostFrom = () => {
    const [title, setTitle] = useState('    ');
    const [body, setBody] = useState('  ');
    const [userId, setUserId] = useState('  ');

    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{display: "block"}}>Title</label>
                    <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div>
                    <label style={{display: "block"}}>Body</label>
                    <input type='text' value={body} onChange={(event) => setBody(event.target.value)}/>
                </div>
                <div>
                    <label style={{display: "block"}}>User Id</label>
                    <input type='text' value={userId} onChange={(event) => setUserId(event.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}