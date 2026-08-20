import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();

    return (
        <div>
            {/* <Link to='/thanks'>
                <button>Buy</button>
            </Link> */}
            <button onClick={() => navigate('/thanks')}>Buy</button>
        </div>
    )
};

export default Cart;
