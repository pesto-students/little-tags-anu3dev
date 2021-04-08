import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    let productCateg = 2;
    return (<div>
        <header>Header</header>
        <slider>Slider </slider>
        <categories>Categories
            <ul>List
                <li><Link to = {'/productsList/'+productCateg }>Product 1</Link></li>
                <li><Link to = {'/productsList/'+productCateg }>Product 2</Link></li>
            </ul>
        </categories>
        <footer>Footer</footer>
    </div>)
}