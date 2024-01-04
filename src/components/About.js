import React, { useRef, useEffect } from "react";
import img from "../img/img2.jpg";
import hd from "../img/hdd.png";
import { Animated } from "react-animated-css";
import { database } from "../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";
import { useState } from "react";


// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                                ABOUT
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function About() {

  let [img,setimg]=useState(hd)
  let [name,setname]=useState()
  let [exp,setexp]=useState()


// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Animation
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================


  const myImg = useRef(null);


  useEffect(()=>{
    console.log("hello")
    getdata()
  },[])

  const getdata=()=>{
    const dbRef = ref(getDatabase());

    get(child(dbRef, `aboutinfo`)).then((snapshot) => {
      console.log(snapshot.val())
     
      setimg(snapshot.val()["image"])
      setname(snapshot.val()["name"])
      setexp(snapshot.val()["title"])
    })
  }


  useEffect(() => {
    myImg.current.animate(
      [
        { transform: "translate(40px, 0)" },
        { transform: "translate(10px, -30px)" },
        { transform: "translate(40px, 0)" },
      ],
      {
        duration: 4300,
        iterations: Infinity,
        yoyo: Infinity,
        animationTimingFunction: "linear",
        playbackRate: -30,
      }
    );
  });



  return (
    <section name="about" id="about" class="about">




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading pt-5">
        <h1>ABOUT ME</h1>
        <img src={hd} />
      </div>


      <div className="container-fluid mt-4">
        <div className="row">




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   image                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

          <div className="col-md-5 img mt-4 " style={{ textAlign: "center" }}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                ref={myImg}
                width="216px"
                src={img}
                style={{
                  position: "relative",
                  left: 7,
                  top: "1px",
                  borderRadius: 9,
                }}
                className=" mt-5"
              />
              <span className="imgBorder"></span>
            </div>
          </div>




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 About me                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

          <div className="col-md-6 text mt-3 pt-3">
            <p className="aboutme">
            We believe in building strong attorney-client relationships based on trust, open communication, and personalized attention. We take the time to listen to our clients, understand their objectives, and develop effective strategies to protect their rights and interests.
            </p>
            <br />
            <div className="container-fluid" style={{ marginLeft: "-17px" }}>
              <div className="row">
                <div className="col-md-6">
                  <span className="title">NAME:</span>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <span className="word">{name}</span>
                </div>
                <div className="col-md-6">
                  <span className="title">EXPERIENCE :</span>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <span className="word">{exp}</span>
                </div>
              </div>
            </div>
            <br />
            <br />




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  button                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

            <div
              data-aos="zoom-in-left"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="600"
            >
             
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
