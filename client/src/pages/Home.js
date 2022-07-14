import React from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

const Home = () => {
    return (<>
    <Header />
        <section>
    <p>
        ART SHOULD BE A CONVERSATION. LET'S TALK.
    </p>
    <button>
      <Link to="/signup"> SIGN UP</Link> 
    </button>
</section>
<div class="images">
    <img class="image1" src={process.env.PUBLIC_URL+"/assets/images/painting3.png" }alt="" />
    <img class="image2" src={process.env.PUBLIC_URL+"/assets/images/painting4.png"} alt="" />
    <img class="image3" src={process.env.PUBLIC_URL+"/assets/images/painting6.png" }alt="" />
    <img class="image4" src={process.env.PUBLIC_URL+"/assets/images/painting1.png"} alt="" />
    <img class="image5" src={process.env.PUBLIC_URL+"/assets/images/painting2.png"} alt="" />
</div>
   </> )
}

export default Home;