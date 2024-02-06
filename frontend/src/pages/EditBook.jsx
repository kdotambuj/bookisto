import React, { useState,useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useFetcher, useNavigate,useParams } from "react-router-dom";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/book/${id}`).then((res)=>{
      setAuthor(res.data.author)
      setTitle(res.data.title)
      setPublishYear(res.data.publishYear)
      setLoading(false);
    }).catch((err)=>{
      setLoading(false)
      console.log(err);
      alert('Error: Try again')
    })
  },[])

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`http://localhost:5000/book/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("Error Happened, try again");
        console.log(err);
      });
  };

  return (
    <div className="p-4 flex flex-col items-center  ">
      <BackButton />
      <h1 className="text-4xl my-4">Edit book</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col mt-12 gap-12 ">
        <div className="flex gap-6 justify-between items-center  ">
          <label className="text-xl text-black font-semibold">TITLE</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="p-4 text-md h-[40px] focus:bg-white focus:border-[1px] focus:border-blue-500      rounded-sm bg-gray-200 outline-none"
          />
        </div>

        <div className="flex gap-6 items-center justify-between   ">
          <label className="text-xl text-black font-semibold">AUTHOR</label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="p-4 text-md h-[40px] focus:bg-white focus:border-[1px] focus:border-blue-500    rounded-sm bg-gray-200 outline-none"
          />
        </div>

        <div className="flex gap-6 items-center justify-between   ">
          <label className="text-xl text-black font-semibold">
            PUBLISH YEAR
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
            className="p-4 text-md h-[40px] focus:bg-white focus:border-[1px] focus:border-blue-500    rounded-sm bg-gray-200 outline-none"
          />
        </div>
      </div>

      <button
        onClick={handleEditBook}
        className="text-white font-medium mt-20  bg-blue-500 rounded-lg hover:bg-blue-600  px-2 py-1 "
      >
        Save
      </button>
    </div>
  );
}

export default EditBook;
