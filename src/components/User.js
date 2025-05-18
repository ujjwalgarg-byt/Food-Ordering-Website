
const User=()=>{   
    return (
        <div className="user-card flex justify-center h-[87vh] items-center bg-amber-500">
            <div className="w-3/12 h-120 rounded-lg shadow-2xl bg-amber-300  flex items-center">
                <label className="m-5">User Name : </label>
                <input className=" m-2 border border-black bg-amber-100"/>
                
                 <button className="p-2 m-2">
                    Enter
                 </button>
               
            </div>
        </div>
    )
}
export default User;