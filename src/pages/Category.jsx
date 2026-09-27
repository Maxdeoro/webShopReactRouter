import { products } from '../data/data';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {

    const {categoryId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);

    const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : Infinity;
    // const maxPrice = location.state.maxPrice;

    const currentCategoryArray = products.filter((product) => 
        product.categoryId === categoryId && product.price <= maxPrice);

    function handleChange(e) {
        const value = e.target.value;
        setSearchParams(value ? {maxPrice: value} : {});
    };

    return (
        <div className='py-10 px-6'>
            <h2 className='text-2xl font-semibold text-center mb-6'>
                Category {categoryId}
            </h2>
            <div className='mb-4'>
                <label form="maxPrice" className="block 
                       text-gray-700">
                {/* <label form="maxPrice" className="text-gray-700 peer-hover:text-lime-600"></label>    */}
                    Max Price
                </label>
                <input type='number' id='maxPrice' 
                        placeholder='Enter max price' 
                        onChange={handleChange}
                        value={searchParams.get('maxPrice') || ""} 
                        className="p-2 text-sm border border-gray-400 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-lime-500 placeholder-gray-500"
                >
                </input>
            </div>
            <ul className='grid grid-cols-3 gap-4 px-5'>
                {currentCategoryArray.map((product) => (
                    <li key={product.id} 
                        className='relative flex flex-col 
                        items-center justify-center group'
                    >
                        <Link to={`/product/${[product.id]}`} 
                              className='relative flex flex-col 
                              items-center justify-center group'
                        >
                            <span className='absolute z-10 font-semibold text-white text-xl 
                                transition duration-1000 group-hover:text-red-500 
                                group-hover:text-2xl text-center'
                            >
                                {product.name}<br/> {product.price}$
                            </span>
                            {/* {product.name} {product.price}$ */}
                            <img src={product.img} alt={product.name} 
                                 className='rounded-md'
                            />
                            <div className='absolute inset-0 bg-gray-900 opacity-40 rounded-md 
                                bg-gradient-to-t from-gray-900 via-gray-700 to-gray-300 '>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category;
