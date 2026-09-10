import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div>
                <h3
                    >Customer <br/> Support
                </h3>
                <ul>
                    <li>
                        <Link to='#'>FAQ</Link>
                    </li>
                    <li>
                        <Link to='#'>Shipping & Returning</Link>
                    </li>
                    <li>
                        <Link to='#'>Order Tracking</Link>
                    </li>
                    <li>
                        <Link to='#'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </footer>
        // <>
        // <hr></hr>
        // <h2>
        //     FOOTER
        // </h2>
        // </>
    )
};

export default Footer;
