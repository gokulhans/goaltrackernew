import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from './../../firebase-config';

function Address() {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("to deliver");


  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const createProduct = async () => {
    await addDoc(productsCollectionRef, {
      name,
      desc,
      price,
      status,
    });
    navigate("/admin");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);


  return (
    <div className="w-full p-5 pt-8">
<center className='font-bold text-2xl text-green-700'>Add Address</center>
      <div >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name.." required=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Address</label>
          <textarea type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required="" placeholder="Address.."
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Price</label>
          <input type="text" id="Price.." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required="" placeholder="Price.."
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>


        <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Phone Number</label>
          <input type="text" id="Price.." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required="" placeholder="Price.."
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <button onClick={createProduct} className="mb-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
      </div>
    </div>

  )
}

export default Address