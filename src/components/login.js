import React, { useEffect, useState } from 'react';
import {get} from '../api/user'
export default function Login(){
    const [userName,setUserName]=useState('');
    useEffect (()=>{
        debugger
       get().then((users)=>
        setUserName(users.data))
    },[])
    return (
        <div>
            <h1>hello to {userName}</h1>
        </div>
    )
}