const ContactUs=()=>{
    return (
        <div className="flex flex-col items-center ">
            <h1 className="font-bold text-3xl my-5">This is Contact Page</h1>
            <form className="flex flex-col w-[300px] h-[400px]  border-black border-2 p-2 m-2 rounded-2xl">
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="message"/>
                <button className="bg-blue-300 border rounded-lg p-2 m-2">Submit</button>
            </form>
        </div>

    )
}
export default ContactUs;