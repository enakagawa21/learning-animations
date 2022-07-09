import './Para.css'
import { useState, useEffect } from "react";
import paraBgImg from "../../assets/para-bg-3.jpg";

function Para() {

     const [offsetY, setOffsetY] = useState(0);
     const handleScroll = () => setOffsetY(window.pageYOffset);
   
     useEffect(() => {
       window.addEventListener("scroll", handleScroll);
   
       return () => window.removeEventListener("scroll", handleScroll);
     }, []);


  return (
    <div className='para-bg'>
<div className='overlay'></div>
<img src={paraBgImg} className='para-bg-img' style={{ transform: `translateY(-${offsetY * 0.8}px)` }}/>

    </div>
  )
}
export default Para