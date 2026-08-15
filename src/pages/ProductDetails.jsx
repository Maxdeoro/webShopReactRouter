import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {

    const {productId} = useParams();
    console.log(productId);

    const product = products.find(p => p.id === parseInt(productId));
    console.log(product);

    return (
        <div>
            {product ? (
                <>
                <h2>{product.name} </h2>
                <img src={product.img} alt={product.name} style={{width: '180px'}} />
                <h3>{product.price}$</h3>
                <div>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </>
            ) : <p>Not found</p>} 
        </div>
    )
}

export default ProductDetails;
