function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-md p-5 py-16 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">Shopping Cart</h1>

      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Your Items:</h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-between pb-2 border-b-2">
            <span>Product 1</span>
            <span>$25</span>
          </li>
          <li className="flex items-center justify-between pb-2 border-b-2">
            <span>Product 2</span>
            <span>$45</span>
          </li>
        </ul>
        <p className="mt-4 font-medium text-lg">Total: $70</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-lg font-semibold">Enter Your Details:</h2>

        <div className="flex flex-col">
          <input id="name" type="text" placeholder="Enter your full name" required 
            className="p-2 text-sm border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-lime-500 peer"
          />
          <label htmlFor="name" className="text-gray-600 peer-hover:text-lime-600">Name</label>
        </div>

        <div className="flex flex-col">
          <input id="email" type="email" placeholder="Enter your email address" required 
            className="p-2 text-sm border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-lime-500 peer"
          />
          <label htmlFor="email" className="text-gray-600 peer-hover:text-lime-600">Email</label>
        </div>

        <div className="flex flex-col">
          <textarea
            id="address"
            placeholder="Enter your delivery address"
            rows="3"
            required 
            className="p-2 text-sm border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-lime-500 peer"
          ></textarea>
          <label htmlFor="address" className="text-gray-600 peer-hover:text-lime-600">
            Address
          </label>
        </div>

        <div className="flex flex-col">
          <select id="payment" required 
            className="p-2 text-sm border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-lime-500 peer"
          >
            <option value="" disabled>
              Select payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <label htmlFor="payment"  className="text-gray-600 peer-hover:text-lime-600">Payment Method</label>
        </div>

        <button type="submit" className="w-full px-4 py-2 text-white bg-lime-600 rounded-md 
                hover:bg-lime-500"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Cart;
