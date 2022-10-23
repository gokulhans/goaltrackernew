import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from '../../components/Cards/Carousel';
import Product from '../../components/Cards/Product';

function Home() {
    return (
        <div> 

            <Carousel />
            <Product />
            <Product />
            <Product />
            <Product />

        </div>
    )
}

export default Home