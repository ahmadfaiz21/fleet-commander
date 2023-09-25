import React, { useEffect,useRef } from 'react';
import HEREMaps from '../components/mapComponents/Map';
import OverlayComponent from '../components/mapComponents/OverlayComponent'
import Header from '../components/Header';
import Ws from '../helper/Websocket';


import { useRouter } from 'next/router';

const connect = "wss://uav.ikramatic.com.my:3000"
// const connect = "wss://uav.ikramatic.com.my:3334/app/stream"

const Homepage =()=>{
  const router = useRouter();
  const dataRef = useRef();
  
  const hendleProps = (prop) =>{
    dataRef.current = prop;
  }
  const handleSignin = (formData) => {
    // Handle the form data here
    console.log('Received form data:', formData);
  };
  const handleHeader = (flag)=>{
    if(flag=="Signed Out"){
      console.log("hello world");
      localStorage.removeItem('dummySigninData');
      router.push('/singin');
    } 
  }
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('dummySigninData'); 
    if (!isLoggedIn) {
      console.log("user not signed in");
      router.push('/singin');
    }else{

    }
  }, [router]);


  
  return (
      <>
       <Header props={handleHeader}/>
       <Ws props={hendleProps} connection={connect}/>
      <HEREMaps data={dataRef} /> 
      <OverlayComponent data={dataRef}/> 
      
      </>
  )
}

export default Homepage;