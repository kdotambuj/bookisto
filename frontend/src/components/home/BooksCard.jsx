import React from 'react'
import { Link } from "react-router-dom";
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import {BsInfoCircle} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import {format, getDate, getMonth, getTime} from 'date-fns'

function BooksCard({books}) {
    console.log(books)
  return (
    <div className='grid gap-6 mt-10  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
         {
            books.map((book,index)=>(
                <div key={book._id} className='border-black border-[1px] p-4 flex flex-col gap-3'>

                    <div className='flex justify-between  p-2 items-center  '>
                        <p className=' text-xs'>{book._id.substring(0,15)}</p>
                        <p className='text-md text-white  bg-blue-500 px-2 py-0.5 rounded-lg '>{book.publishYear}</p>
                    </div>

                    <div className='flex justify-center flex-col  items-start pl-2 '>
                      <p className='font-semibold text-xl '>{book.title}</p>
                      <p className='font-semibold text-lg ' >{book.author}</p>
                    </div>
                    

                    <div className='flex flex-col p-2 items-start '>
                        <p className='text-sm'>Created At: {(new Date(book.createdAt).toString()).substring(0,15)}</p>
                        <p className='text-sm'>Last Updated At: {(new Date(book.updatedAt).toString()).substring(0,15)}</p>
                    </div>

                    <div className="flex justify-center gap-x-4">
                      <Link to={`/book/details/${book._id}`}>
                        <BsInfoCircle  className="text-2xl text-green-800"/>
                      </Link>
                      <Link to={`/book/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                      </Link>
                      <Link to={`/book/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600' />
                      </Link>
                    </div>

                </div>
            ))
         }
    </div>
  )
}

export default BooksCard