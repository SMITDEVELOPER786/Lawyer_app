import React from 'react'
import Navbar from './Navbar'
import Text from './Text'
import Image from './Image'
import Text1 from './Text2'
import { database } from "../../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";
import { useEffect } from 'react'
import { useState } from 'react'


export default function HomeSec() {

  let [sliderimg, setsliderimg] = useState([])


  useEffect(() => {
    console.log("hello")
    getdata()
  }, [])

  const getdata = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Sliders`)).then((snapshot) => {
      console.log(snapshot.val())
      setsliderimg(Object.values(snapshot.val()))
      // setimg(Object.values(snapshot.val()))



    })
  }


  return (
    <>
      <section name="home" id="home" className="home">
        <div className="child">
          <Navbar />
          <br />


          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              {
                sliderimg.map((v, i) => {
                  return (
                    i == 0 ?

                      <div class="carousel-item active">
                        <img class="d-block w-100" src={v.image} alt="First slide" />
                      </div>

                      :
                      i == 1 ?
                        <div class="carousel-item">
                          <img class="d-block w-100"  src={v.image}  alt="Second slide" />
                        </div>
                        :
                        i == 2
                          ?
                          <div class="carousel-item">
                            <img class="d-block w-100"  src={v.image}  alt="Third slide" />
                          </div> :
                          null

                  )
                })
              }
            </div>

            {/* 
   
   
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.freepik.com/premium-vector/world-day-international-justice-3d-justice-hammer-scales_565585-4701.jpg?w=740" alt="Third slide"/>
    </div>
  </div> */}
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <div className="container-fluid">
            <div className="row newbg" style={{ height: "300" }} >
              <div className="col-md-6">
                {/* <Text1/> */}
              </div>

            </div>
            <div className="row  c1" >
              <div className="col-md-6 c1">
                <Text />
              </div>
              <div className="col-md-6 mt-5 c1">
                <Image />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </>
  )
}
