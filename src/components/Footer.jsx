import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="px-5 py-8 bg-lime-200">
            <div className="grid grid-cols-3 mb-5">
                <div>
                    <h3 className="mb-3 text-lg font-bold">
                        Customer <br/> Support
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <Link to='#' className="hover:underline">FAQ</Link>
                        </li>
                        <li>
                            <Link to='#' className="hover:underline">Shipping & Returning</Link>
                        </li>
                        <li>
                            <Link to='#' className="hover:underline">Order Tracking</Link>
                        </li>
                        <li>
                            <Link to='#' className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-3 text-lg font-bold">Follow Us</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link to='#' className="hover:underline">Facebook</Link>
                        </li>
                        <li>
                            <Link to='#' className="hover:underline">Instagram</Link>
                        </li>
                        <li>
                            <Link to='#' className="hover:underline">Twitter</Link>
                        </li>
                        <li >
                            <Link to='#' className="hover:underline">LinkedIn</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-3 text-lg font-bold">
                        Contact Us
                    </h3>
                    <p>Email: support@yourstore.com</p>
                    <p>Phone: +15 567 234 983</p>
                    <p>Address: Mercado calle, 124</p>
                </div>
            </div>
            <div className="text-center text-gray-800">
                <p>&copy; 2026 YourStore, All rights recerved</p>
            </div>
        </footer>
    )
};

export default Footer;
