import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import {BsInfoCircle} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import BooksCard from "../components/home/BooksCard";

import BooksTable from "../components/home/BooksTable";

function Home() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [showType,setShowType] = useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/book')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 flex flex-col items-center ">
      <div className="flex  justify-around items-center gap-4 ">
        <h1 className="font-semibold text-3xl ">Books List</h1>
        <Link to='/book/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      <div className="flex w-[10%] justify-between p-2 gap-4 ">
        <button className="bg-gray-400 px-2 py-0.5 rounded-lg hover:bg-blue-500 hover:text-white " onClick={()=>{setShowType('table')}}>Table</button>
        <button className="bg-gray-400 px-2 py-0.5 rounded-lg hover:bg-blue-500 hover:text-white" onClick={()=>{setShowType('card')}} >Card</button>
      </div>

      {
        loading?(
          <Spinner />
        ):(
           showType=='table'?<BooksTable books={books}/>:<BooksCard books={books}/>
        )
      }
      
    </div>
  );
}

export default Home;
