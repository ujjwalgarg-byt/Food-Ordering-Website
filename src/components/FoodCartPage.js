import { cartItems } from '../utils/constants';
const FoodCartPage = () => {
    
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Food Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Food Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex space-x-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <p className="text-gray-800 font-medium mt-1">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" >-</button>
                <span>{item.quantity}</span>
                <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>{(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>{subtotal}</span>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCartPage;
