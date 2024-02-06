import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function ShowBooks() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/book/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(
      <div className="p-4 flex flex-col justify-center items-center">
           <BackButton />
           <h1 className="text-3xl my-4">Book Details</h1>
           {
            loading?(<Spinner />):(
              <div className="flex flex-col border-2 rounded-xl w-fit p-4  border-sky-400">
                <div className="my-3 flex">
                   <span className="text-xl mr-4 font-medium ">Id:</span>
                   <span className="text-lg ">{book._id}</span>
                </div>
                <div className="my-3 flex">
                   <span className="text-xl mr-4 font-medium ">Title:</span>
                   <span className="text-lg">{book.title}</span>
                </div>
                <div className="my-3 flex">
                   <span className="text-xl mr-4 font-medium ">Author:</span>
                   <span className="text-lg">{book.author}</span>
                </div>
                <div className="my-3 flex">
                   <span className="text-xl mr-4 font-medium ">Publish Year:</span>
                   <span className="text-lg">{book.publishYear}</span>
                </div>
                <div className="my-3 flex">
                   <span className="text-xl mr-4 font-medium ">Create Time:</span>
                   <span className="text-lg">{new Date(book.createdAt).toString()}</span>
                </div>
                <div className="my-3 flex">
                   <span className="text-xl mr-4 font-medium ">Last Updated Time:</span>
                   <span className="text-lg">{new Date(book.updatedAt).toString()}</span>
                </div>

              </div>
            )
           }
      </div>
  ) 
}

export default ShowBooks;
