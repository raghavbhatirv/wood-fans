import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./productContainer.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Redux/store';
// import { AddToCart } from "../../Redux/productReducer/action";

const ProductPage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])
    const dispatch = useDispatch()

    const productType = useSelector(store => store.productReducer.productType)
    console.log(productType)

    
    useEffect(() => {
    //     dispatch(getData(productType))
    setProducts([{
        "id": 1,
        "title":"DAVE SOFA",
        "type":"Sofas",
        "image": "https://api.woodfans.ru/storage/uploads/images/x9V57EeEsrvL9zWFSIUSK1766CK76PQ93XjrLDw1_widened_900.jpg",
        "url1": "https://api.woodfans.ru/storage/uploads/images/CP65GN3NT3mxIemo9wXMFbJ19sPBXfhe0F9Ivr81_widened_900.jpg",
        "url2": "https://api.woodfans.ru/storage/uploads/images/ESkUCJSMHzb62y1NeOkuTIEezKsjx0QzHOBb5Bd1_widened_900.jpg",
        "url3": "https://api.woodfans.ru/storage/uploads/images/M83cTDULNmEr8rJ2qaOouPQjhpirGNXWStoLOKTG_widened_900.jpg",
        "price": 252000
      }])
    }, [productType])
    
    if (loading) {
        return (
          <div className={styles.loading}><div><img src={load} alt="" /></div></div>
        )
      }

    return (<div className={styles.container}>
        <h1>{data.type}</h1>
        <div className={styles.singleCard}>
          {
            products.map((product) => (<div key={product.id}>
              <img src={product.image} alt="" />
  
              <div className={styles.nameDiv}>
                <h4>{product.name}{product.title}</h4>
                <p>RS {product.price}</p>
              </div>
              <div className={styles.priceDiv}>
                <p style={{ "marginTop": "0em" }}>  <Link to={`/product`}>More details</Link></p>
                <p> {product.cost}</p>
                <button onClick={() => { dispatch(AddToCart([{ ...product, qty: 1 }])) }}>Add to Cart
                </button>
              </div>
            </div>
            ))
          }
        </div>
      </div>)
}


export default ProductPage