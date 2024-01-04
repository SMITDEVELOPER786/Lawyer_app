import React, { useEffect } from "react";
import sev from "../img/oo.jpg";
import hd from "../img/hdd.png";

import { database } from "../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";
import { useState } from "react";


// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                                  Animation
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Services() {

  let [service, setservice] = useState([])

  useEffect(() => {
    console.log("hello")
    getdata()
  }, [])

  const getdata = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Services`)).then((snapshot) => {
      console.log(snapshot.val())
      setservice(Object.values(snapshot.val()))


    })
  }

  return (
    <section name="service" id="service" className="services">


      {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      {/*                                 heading                                  */}
      {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">
        <h1>MY SERVICES</h1>
        <img src={hd} />
      </div>
      <br />
      <br />



      <div className="container">
        <div className="row">

          {
            service.map((v, i) => {
              return <div className="col-md-4">
                <div
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <div className="cardd mb-4 p-5 text-center">
                    <img src={sev} className="ml-3" />
                    <i className="fa fa-code"></i>
                    <h3>{v.title}</h3>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
}
