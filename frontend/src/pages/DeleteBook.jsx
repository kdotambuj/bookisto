import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const {id} = useParams()

  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/book/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col gap-8 mt-48  h-[100vh]  items-center">
      {loading?<Spinner/>:''}
      <h1 className="text-3xl font-semibold ">Are you sure?</h1>
      <button
        onClick={handleDelete}
        className="text-xl px-2 rounded-md bg-red-600 text-white "
      >
        Yes Delete it!
      </button>
    </div>
  );
}

export default DeleteBook;
