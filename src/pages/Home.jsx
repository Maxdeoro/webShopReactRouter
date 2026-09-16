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
                        <Link to={`/category/${category.name}`} className='relative flex flex-col 
                            items-center justify-center'>
                            <span className='absolute z-10 font-semibold text-white text-xl'>{category.name}</span>
                            <img src={category.img} alt={category.name} className='rounded-md'/>
                            <div className='absolute inset-0 bg-gray-900 opacity-40 rounded-md 
                                bg-gradient-to-t from-gray-900 via-gray-700 to-gray-300'></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;

