import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesData = () =>{
    const [compData,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(function(res){
            setData(res.data)
        })
    },[])       
    // console.log(compData);

    return(
        <>
            <h1 className="text-3xl text-center  shadow-lg shadow-blue-gray-50 underline mt-10">Get All product</h1>

        {
            compData.map((name =>{
                return<>
                    <Link to={`/product/category/${name}`}>
                         <Button className="py-0 px-0 md:py-2 md:px-2 lg:mx-2 lg:my-5">{name}</Button>
                    </Link>
                </>
            }))
        }   
        </>
    )
}
export default CategoriesData;