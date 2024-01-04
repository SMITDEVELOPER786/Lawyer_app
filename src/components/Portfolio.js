import React,{useState,useEffect} from "react";
import img1 from "../img/p1.jpg";
import img2 from "../img/p2.jpg";
import img3 from "../img/p3.jpg";
import img4 from "../img/p4.jpg";
import img5 from "../img/res.PNG";
import img6 from "../img/iphone.jpg";
import img7 from '../img/chatapp.PNG';
import img8 from '../img/fastfood.jpg'
import img9 from '../img/react_todo.jpg'
import hd from "../img/hdd.png";
import { database } from "../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";




// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {

  const [img,setimg]=useState([])


  useEffect(() => {
    console.log("hello")
    getdata()
  }, [])

  const getdata = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Gallery`)).then((snapshot) => {
      console.log(snapshot.val())
      setimg(Object.values(snapshot.val()))


    })
  }


  return (
    <section name="portfolio"  className="portfolio">



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      <div className="heading">
        {/* <h1>GALLERY1</h1> */}
        <img src={hd} />
      </div>
      <br />
      <br />
      <br />



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   cards                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="container">
        <div className="row">

          {img.map((v,i)=>{
            return(
              <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img1}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Expense Tracker</h5>
                  <a
                    href="https://expense-tracker-app-by-muhammad-zubair.netlify.app/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/MuhammadZubair786/expense-tracker"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

            )
          })}



          

          



        </div>



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 button                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
<br/>

        <div className="moreProj text-center">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <a href="https://github.com/MuhammadZubair786" target="_blank">
            <button className="btn btn-light">More Projects</button>
          </a>
          </div>
        </div>

      
      </div>
    </section>
  );
}
