import { products } from '../data/data';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {

    const {categoryId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);

    // const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : Infinity;
    const maxPrice = location.state.maxPrice;

    const currentCategoryArray = products.filter((product) => 
        product.categoryId === categoryId && product.price <= maxPrice);

    function handleChange(e) {
        const value = e.target.value;
        setSearchParams(value ? {maxPrice: value} : {});
    };

    return (
        <div>
            <>
            <h2>Category {categoryId}</h2>
            <div>
                <label form="maxPrice"></label>
                <input type='number' id='maxPrice' 
                        placeholder='Enter max price' 
                        onChange={handleChange}
                        value={searchParams.get('maxPrice') || ""}
                >
                </input>
            </div>
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
            </>
        </div>
    )
}

export default Category;
