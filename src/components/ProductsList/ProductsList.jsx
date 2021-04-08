import React from 'react';
import {useParams} from 'react-router-dom'

export default function ProductsList(){
    let {productCategory}= useParams();
    return(<div>Products List: {productCategory}</div>)
}