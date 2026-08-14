import { products } from '../data/data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {

    const {categoryId} = useParams();
    console.log(categoryId);

    const currentCategoryArray = products.filter((products) => 
        products.categoryId === categoryId);
    console.log(currentCategoryArray);

    return (
        <div>
            <h2>Category {categoryId}</h2>
            <ul style={{display:"flex"}}>
                {currentCategoryArray.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${[product.id]}`}>
                            {product.name} {product.price}$
                        </Link>
                        <img src={product.img} alt={product.name} style={{width:'150px'}} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category;
