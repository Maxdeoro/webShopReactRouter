import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Thanks() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
           Thank you for your buing! You will be redirected to the Home page in 5 seconds.
        </div>
    )
};

export default Thanks;
