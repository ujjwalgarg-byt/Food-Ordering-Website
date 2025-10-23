import ItemList from "./ItemList";
const ItemCategory=({data,showItems,index,showIndex,setShowIndex})=>{
    

    const handleClick=()=>{
        showIndex===index?setShowIndex(null):setShowIndex(index);
        
    }
    return (
        <div>
             {/* Header */}
            <div className=" w-6/12 mx-auto my-3 bg-amber-200 p-4 shadow-xl rounded-md" >
                <div className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>
                        {showItems ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                    </span>
                </div>
                {/* accordian body */}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    )
}
export default ItemCategory;