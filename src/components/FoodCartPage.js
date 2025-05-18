
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const FoodCartPage = () => {
    
  
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCrearCart = () => {
    dispatch(clearCart());
  }
  
  return (
   <div className="text-center p-4 m-4">
      <h1 className="text-3xl font-bold ">My Food Cart</h1>
      <button
        className="bg-amber-500 text-white font-bold p-2 m-4 rounded-lg shadow-lg"
        onClick={handleCrearCart}
      >
        ClearCart
      </button>
      {cartItems.length===0 && <h1 className="font-bold text-2xl">Your cart is empty.Please add item to the cart 😊</h1>}

  
      <div className="w-6/12 m-auto">
        {/* Food Items */}
        <div className=" text-left m-5">
          {cartItems.map((item) => (
            <div
              key={item.card?.info.id}
              className=" p-4 m-5 border rounded-lg bg-amber-200 shadow-lg shadow-amber-100"
            >
              <div>
                  <h2 className="text-lg font-semibold">{item.card?.info.name}</h2>
                  <p className="text-gray-500 text-sm">{item.card?.info.description}s</p>
                  <p className="text-gray-800 font-medium mt-1">₹{item.card?.info.price/100 || item.card?.info.defaultPrice/100}</p>
              </div>
              
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default FoodCartPage;
