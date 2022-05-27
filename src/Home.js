import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    const routeToForm = () => {
        history.push(/**will fill in later */);
    }

    return (
        <div className='home-wrapper' >
            <button
                onClick={routeToForm}
                className="form-button"
            >
                Order Now!
            </button>
        </div>
    )
}