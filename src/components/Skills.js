import React, { useState, useEffect } from "react";
import ProgressBar from "react-animated-progress-bar";
import hd from "../img/hdd.png";
import v1 from './2023-06-13 02-29-27.mkv'


import img1 from '../img/A1.PNG'
import img2 from '../img/A2.jpg'
import img3 from '../img/A3.jpg'
import img4 from '../img/A4.PNG'
import img5 from '../img/A5.PNG'
import img6 from '../img/A6.PNG'
import img7 from '../img/A7.jpg'
import img8 from '../img/A8.jpg'
import img9 from '../img/A9.jpg'

import { database } from "../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";



// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               skills
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
export default function Skills() {

  const [img, setimg] = useState([])


  useEffect(() => {
    console.log("hello")
    getdata()
  }, [])

  const getdata = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Videos`)).then((snapshot) => {
      console.log(snapshot.val())
      setimg(Object.values(snapshot.val()))



    })
  }
  return (
    <section name="skills" id="skills" className="achievements">



      {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      {/*                                  heading                                  */}
      {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">

        <h1>Videos</h1>
        <img src={hd} />
      </div>


      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">

          {img.map((v, i) => {
            return (
              <div className="col-md-4">
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                >
                  <div class="card mb-5 shadow ml-3 mr-3">
                    <video
                      class="card-img-top pl-4 pr-4"
                      src={v.image}
                      style={{ height: "300px", padding: "2%" }}
                      alt="Card image cap"
                      controls
                    />
                    <div class="card-body">
                      <h4 class="card-title text-center" >{v.title}</h4>


                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>





    </section>
  );
}
