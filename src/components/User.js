import {useState} from 'react';
const User=({name})=>{
    const [count,setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <button onClick={()=>{
                setCount(count + 1);
                }}>
                   Count Increase
                </button>
            <h1>Name: {name}</h1>
            <h2>Location: Saharanpur</h2>
            <h3>Contact: ujjwal@gamil.com</h3>
        </div>
    )
}
export default User;