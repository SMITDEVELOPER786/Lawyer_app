import React, { useState, useEffect } from "react";
import img from "../img/img2.jpg";
import hd from "../img/hdd.png";
import { database } from "../config/firebase";
import { push, ref, set, getDatabase, get, child, orderByChild, equalTo } from "firebase/database";
import emailjs from '@emailjs/browser';



// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Contact
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Contact() {

  let [cname, setcname] = useState()
  let [cphone, setcphone] = useState()
  let [cemail, setcemail] = useState()
  let [csel, setcsel] = useState()
  let [cmessage, setcmessage] = useState()


  let [img, setimg] = useState(hd)
  let [name, setname] = useState()
  let [exp, setexp] = useState()
  let [email, setemail] = useState()
  let [phone, setphone] = useState()



  const submitdata = async() => {
    if (cname != undefined || cphone != undefined || cemail != undefined || csel != undefined || cmessage != undefined) {
      // const dbRef = ref(getDatabase());
      let dbref = ref(database, `Contact`); //ref,path
      const pushdata = push(dbref);


      try {

        var obj = {

          name: cname,
          email: cemail,
          phone: cphone,
          message: cmessage,
          sel: csel,
          key: pushdata.key

        }
        console.log(obj)
        const templateParams = {
          to_email: cemail,
          subject: `Message From ${cemail} for ${csel}`,
          message: `New Message from ${cemail} want to Service ${csel} and text  ${cmessage} and Phone no ${cphone}`,
        };

        console.log(templateParams)
    
        emailjs.send("service_7lomg03", "template_trvnyvp", templateParams,'jThXBiC0V-roJnfQ4')
          .then((response) => {
            console.log("Email sent:", response);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
        await  set(pushdata, obj);
        setcname("")
        setcemail("")
        setcphone("")
        setcmessage("")
        setcsel("")
        alert("Send Message Succefully ")

      
      }
      catch (e) {
        alert(e)
      }




    }
  }


  useEffect(() => {
    console.log("hello")
    getdata()
  }, [])

  const getdata = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `aboutinfo`)).then((snapshot) => {
      console.log(snapshot.val())

      setimg(snapshot.val()["image"])
      setname(snapshot.val()["name"])
      setexp(snapshot.val()["title"])
      setemail(snapshot.val()["email"])
      setphone(snapshot.val()["contact"])
    })
  }


  return (

    <section name="contact" id="contact" className="contact">




      {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      {/*                                 About me                                  */}
      {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">
        <h1>CONTACT ME</h1>
        <img src={hd} />
      </div>



      <div className="container mt-5">



        {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
        {/*                                 Image                                  */}
        {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div style={{ textAlign: "center" }}>
          <img width="200px" src={img} className="rounded-circle mt-2" style={{ borderRadius: "50%" }} />
        </div>




        {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
        {/*                               Contact Info                                */}
        {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div className="row mt-5">



          <div className="col-md-4">
            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa fa-envelope icon"></i>
                <h5>Email</h5>
                <p> {email}</p>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa fa-globe icon"></i>
                <h5>Social media</h5>
                <a
                  href="https://web.facebook.com/profile.php?id=100010093773879"
                  target="_blank"
                >
                  <i className="fa fa-facebook sm"></i>
                </a>
                <a href="https://www.instagram.com/zubair2880/" target="_blank">
                  {" "}
                  <i className="fa fa-instagram sm"></i>
                </a>

                <a href="https://github.com/MuhammadZubair786" target="_blank">
                  {" "}
                  <i className="fa fa-github sm"></i>
                </a>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa fa-phone icon"></i>
                <h5>Contact No</h5>
                <p>{phone}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="container-fluid">
        <div className="row footerbg" >
          <div className="col col-lg-12 col-sm-12 col-12  mx-5 my-5">
            <br />
            <br />
            {/* <h3 className="text-center">Free Consultation With Best Law Firm In Pakistan</h3> */}
            <div className="row" >
              <div className="col col-lg-1">

              </div>

              <div className="col col-lg-5 col-md-12 col-12 text-center" style={{ marginTop: "2%" }}>

                <input type="text"
                  onChange={(e) => setcname(e.target.value)}
                  value={cname}
                  class="form-control" style={{ width: "80%" }} placeholder="Enter Name" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="col col-lg-5 col-md-5 col-md-12 col-12" style={{ marginTop: "2%" }}>

                <input type="number"
                  onChange={(e) => setcphone(e.target.value)}
                  value={cphone}
                  class="form-control" style={{ width: "80%" }} placeholder="Enter Phone" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="col col-lg-1">

              </div>
            </div>
            <div className="row" >
              <div className="col col-lg-1">

              </div>

              <div className="col col-lg-5 col-md-12 col-12 text-center" style={{ marginTop: "2%" }}>

                <input

                  onChange={(e) => setcemail(e.target.value)}
                  value={cemail}
                  type="email" class="form-control" style={{ width: "80%" }} placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="col col-lg-5 col-md-5 col-md-12 col-12 " style={{ marginTop: "2%" }}>

                <select class="form-select form-select-md"
                  onChange={(e) => setcsel(e.target.value)}

                  style={{ width: "80%" }} aria-label="Default select example ">
                  <option selected disabled>Open this select menu</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Commerical Law">Commerical Law</option>
                  <option value="New Law">New Law</option>
                </select>

              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-1"></div>
              <div className="col-lg-11">
                <textarea
                  onChange={(e) => setcmessage(e.target.value)}
                  value={cmessage}

                  class="form-control" cols={5} rows={5} style={{ width: "81%" }} placeholder="Enter Message" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>

            </div>
            <div className="row mt-2">
              <div className="col-lg-12 text-center">
                <button type="submit" class="btn btn-primary" onClick={() => submitdata()}>&emsp;&emsp;Submit&emsp;&emsp;</button>

              </div>

            </div>










          </div>
        </div>


      </div>
    </section>
  );
}
