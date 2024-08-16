import React,{ useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import { login,logout } from './store/authSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const[loading,setLoading]= useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=>{
      if(data){
        dispatch(login({data}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         {/*outlet*/}
        </main>
        <Footer/>
      </div>

    </div>
  ):null ;
}

export default App
