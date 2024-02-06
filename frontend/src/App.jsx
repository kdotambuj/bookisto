import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBooks from './pages/ShowBooks'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'


function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/book/create' element={<CreateBook />}/>
      <Route path='/book/details/:id' element={<ShowBooks />}/>
      <Route path='/book/edit/:id' element={<EditBook />}/>
      <Route path='/book/delete/:id' element={<DeleteBook />}/>
     </Routes>
      
    </>
  )
}

export default App
