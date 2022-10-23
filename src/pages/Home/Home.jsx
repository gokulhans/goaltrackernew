import React from 'react'
// import Product from './../Product/Product';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../../firebase-config';
import { where } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Cards/Carousel';
import Product from '../../components/Cards/Product';

function Home() {

  const [productList, setProductList] = useState([]);
  let userid = localStorage.getItem("authorid");
  const productCollectionRef = query(collection(db, "products"))

  useEffect(() => {
    onSnapshot(productCollectionRef, (snapshot) => {
      setProductList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    //   <div>
    //       <div className="p-4 grid justify-center grid-cols-1 gap-6 lg:gap-16 sm:grid-cols-2 lg:grid-cols-2 lg:mx-32 lg:mt-8">

    // {productList.map((product, index) => {
    //   return (
    //     <Product key={index} product={product} />
    //   )
    // })}
    //       </div>
    // </div>

    <div>

      <Carousel />

      {productList.map((product, index) => {
        return (
          <Product key={index} product={product} />
        )
      })}

    </div>
  )
}

export default Home