import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Home from '../components/Home/Home';

const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="main-in">
               
                <Home />
            </div>

        </div>
    );
};

export default Main;