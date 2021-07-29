import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UseEffectOne() {
    const [posts, setPosts] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => setPosts(resp.data))
            .catch(err => setErrorMsg(err))

        return () => {
            console.log("i am equal to comp will unmount, used to remove listeners");
        }    
    }, [])

    console.log("{errorMsg} >", errorMsg);
    return (
        <div>            
            {
                posts.map((eachPost, i) => {
                    return <div key = {i} style = {{ border : '1px solid blue'}}> Title : {eachPost.title} </div>
                })
            }
        </div>
    )
}
