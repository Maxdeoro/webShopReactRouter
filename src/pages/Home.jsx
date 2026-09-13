import { categories } from '../data/data';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to='/category/Electronics' state={{from: 'Home page', maxPrice: 600}}>
                 Electronics at low price
            </Link>
            {/* <h1>Categories</h1> */}
            <ul className='flex gap-x-5 justify-around'>
            {/* <ul style={{display: 'flex'}} className='flex gap-x-5'> */}
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.name}`}>
                            {category.name}
                            <img src={category.img} alt={category.name} style={{width: '150px'}}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;

