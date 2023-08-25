import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Product from '../Component/Product';
import Spinner from '../Component/Spinner';

function Home() {

    const apiUrl = "https://fakestoreapi.com/products";
    const [Loading, setLoading] = useState(false);
    const [posts, setposts] = useState([])


    async function fetchProductData(){
        setLoading(true);
        try{
            const {data} = await axios.get(apiUrl);
            setposts(data);
        }catch(error){
            console.log("Home api fat gayi");
            setposts([])
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProductData();
    }, [])
    

  return (
    <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2'>
        {
            Loading ? <Spinner/> :
            posts.length <=0 ? <div>Data Not Found</div> :
            (
                posts.map(post =>(<Product key={post.id} post={post}/>))
            )
        }
    </div>
  )
}

export default Home