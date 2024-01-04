import React,{useEffect, useState} from 'react'
import {Animated} from "react-animated-css";
import hello from '../../img/hi.gif'
import Typist from 'react-typist';
import { Link, animateScroll as scroll } from "react-scroll";

import { database } from "../../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";

export default function Text() {

  let [descp,setdescp] = useState()
  let [name,setname]=useState()

  useEffect(()=>{
    console.log("hello")
    getdata()
  },[])

  const getdata=()=>{
    const dbRef = ref(getDatabase());

    get(child(dbRef, `aboutinfo`)).then((snapshot) => {
      console.log(snapshot.val())
      setdescp(snapshot.val()["descrpition"])
      setname(snapshot.val()["name"])
    })
  }
  return (
  <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1200" >
  <div className="text">
  <p></p>
   <img width="36px" src={hello}/>
  {/* <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}> */}
  <h4>I am {name} - Senior Lawyer<br /><br />{descp}
  "<br /><br />
<i>
Arthur Schopenhauer
  </i></h4> 
  {/* </Animated> */}
  <br />
  <Link className="anchor" activeClass="active" to="contact"  delay={100} spy={true} smooth={true}  offset={0} duration={900} >
  <button class="btn btn-light">Contact Me</button>
  </Link>
  </div>
  </div>
 )
}
 