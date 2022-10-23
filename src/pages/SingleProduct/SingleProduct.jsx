import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { query, collection, getDoc, doc } from 'firebase/firestore';
import { db } from './../../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function SingleProduct() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState("deliverd");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function ProductGet(id) {
      const docRefq = doc(db, "products", id);
      try {
        const docSnap = await getDoc(docRefq);
        setProduct(docSnap.data())
        setName(docSnap.data().name)
        setDesc(docSnap.data().desc)
        setPrice(docSnap.data().price)
        // setStatus(docSnap.data().status)
      } catch (error) {
        console.log(error)
      }
    }
    ProductGet(id)
  }, []);

  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const editProduct = async () => {
    await setDoc(doc(db, "products", id), {
      name: name,
      desc: desc,
      price: price,
      status: status,
    });
    navigate("/confirm");
  };


  return (
    <div className='pt-5 px-5 flex flex-col justify-start items-start'>

      <img className="rounded-t-lg h-48 w-full object-cover" src="https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
      <div className="p-2">

        <h5 className="pt-5 text-3xl font-bold leading-none text-gray-900 dark:text-white">{product.name}</h5>

        <p className="pt-3 text-sm font-medium leading-none text-gray-600 dark:text-white">Deliverd With in 7.00 Am</p>

        {/* <p className="pt-5 text-xl font-bold leading-none text-green-600 dark:text-white">Address</p>
      <p className="pt-5 text-lg font-bold leading-none text-green-600 dark:text-white">Gokul</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">Kattangel,Poolakode,Kozhikode</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-900 dark:text-white">Poolakode</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">PIN:- 673601</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">Kozhikode</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">7034598461</p> */}

        {/* <Link to={'/editaddress'} className='mt-3 rounded text-white font-semibold'>
        <div className='bg-blue-500 py-2 px-3 rounded text-white text-sm font-medium'>
        Edit Address
        </div>
      </Link> */}

        <h2 className="pt-5 text-4xl font-black leading-none text-green-600 dark:text-white">{product.price} $</h2>

      </div>

      <button onClick={editProduct} className='fixed z-10 bottom-5 left-0 right-0 h-12 w-full rounded text-white font-semibold'>
        <div className='bg-green-500 mx-5 py-3 h-12 rounded text-white font-semibold'>
          <i className="fa-solid fa-truck"></i> Confirm Order
        </div>
      </button>

    </div>
  )
}

export default SingleProduct