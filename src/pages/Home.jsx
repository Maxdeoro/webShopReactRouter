import { categories } from '../data/data';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='py-10'>
            <Link to='/category/Electronics' state={{from: 'Home page', maxPrice: 600}}>
                 Electronics at low price
            </Link>
            <h1 className='text-2xl font-semibold text-center mb-8'>Categories</h1>
            <ul className='grid grid-cols-3 gap-4 px-5'>
            {/* <ul style={{display: 'flex'}} className='flex gap-x-5'> */}
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.name}`}>
                            {category.name}
                            <img src={category.img} alt={category.name} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;

