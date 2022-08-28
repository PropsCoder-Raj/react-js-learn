import { useState, useEffect } from 'react'

export const PostList = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <>
            <div>
                <ul>
                    {posts.map((element) => {
                        return <li key={element.id}>{element.title}</li>
                    })}
                </ul>
            </div>
        </>
    )
}