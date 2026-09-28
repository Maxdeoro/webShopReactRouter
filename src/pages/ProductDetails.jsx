import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {

    const {productId} = useParams();
    console.log(productId);

    const product = products.find(p => p.id === parseInt(productId));
    console.log(product);

    return (
        <div className='py-10 px-6'>
            {product ? (
                <>
                <h2 className='text-2xl font-semibold text-center mb-6'>
                    {product.name} 
                </h2>
                <div className="flex flex-col p-6 items-center bg-white rounded-md">
                    <img src={product.img} alt={product.name} className="w-60 h-60 mb-4 rounded-mb" />
                    <h3 className='text-xl font-semibold text-center mb-6'>
                        {product.price}$
                    </h3>
                    <div>
                        <h3 className='text-xl font-semibold text-center mb-4'>
                            Description
                        </h3>
                        <p className="text-lg text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                </>
            ) : <p className="text-center text-xl text-red-700 font-bold">
                    Not found
                </p>} 
        </div>
    )
}

export default ProductDetails;
