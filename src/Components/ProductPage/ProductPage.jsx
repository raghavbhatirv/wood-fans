import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Products/Action';
import Button from '../Common/Button';
import load from "./loading.gif"


const ProductPage = () => {
    const dispatch = useDispatch()

    const productData = useSelector(store => store.dataReducer.productData)
    const loading = useSelector(store => store.dataReducer.loading)
    const [category, setCategory] = useState("sofas")
    console.log(productData)

    
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const categoryData = productData.filter(product => {
      return product.category.toLowerCase() === category.toLowerCase()
    })
    console.log(categoryData)

    const redirectToDetail = (id) => {
      
    }
    
    if (loading) {
        return (
          <div className="py-20 lg:h-65vh flex items-center justify-center"><div><img src={load} alt="" /></div></div>
        )
      }

    return (

    <div className="font-bold font-franklin lg:px-20 lg:py-10 px-5">
        <h1 className="text-2xl lg:py-5">{category.toUpperCase()}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            categoryData.map((product) => (
            <div key={product.id} className="shadow-md overflow-hidden" >
              <div onClick={() => redirectToDetail(product.id)}>
              <div className="relative" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="white" className="absolute top-1 right-1 w-10 h-8 p-1 text-white  cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
             </svg>

              
            <img src={product.images[0]} alt="" className="w-full lg:h-3/5  object-cover" />
  
              </div>
              <div className="p-2 lg:p-5 flex lg:gap-40 gap-5 md:gap-20 justify-between">
                <h4 className="lg:font-semibold font-normal lg:px-5 text-base lg:text-base" >{product.name}</h4>
                <p className="text-gray-700 text-base lg:text-base md:pl-5" >RS {product.price}</p>
              </div>
              </div>
              <div className="flex justify-between lg:p-4 p-0">
                <Button text={"Add to Cart"} className="bg-gray-800 text-white px-1 py-2 rounded-md hover:bg-gray-700 text-xs lg:px-4 py-2" />
              </div>
            </div>
            ))
          }
        </div>
      </div>)
}


export default ProductPage