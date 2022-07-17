import React from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

const Home = () => {
    return (<>
    <Header />
        <section>
    <p className="mt-24">
        ART SHOULD BE A CONVERSATION. LET'S TALK.
    </p>
    <button className="sign-up ml-11 mt-14">
      <Link to="/signup"> SIGN UP</Link> 
    </button>
</section>
<div className="display:flex">
    {/* <img className="image1" src={process.env.PUBLIC_URL+"/assets/images/painting3.png" }alt="" /> */}
    {/* <img className="image2" src={process.env.PUBLIC_URL+"/assets/images/painting4.png"} alt="" /> */}
    <img className="image3" src={process.env.PUBLIC_URL+"/assets/images/painting6.png" }alt="" />
    <img className="image4 " src={process.env.PUBLIC_URL+"/assets/images/painting1.png"} alt="" />
    <img className="image5" src={process.env.PUBLIC_URL+"/assets/images/painting2.png"} alt="" />
</div>
   </> )
}

export default Home;