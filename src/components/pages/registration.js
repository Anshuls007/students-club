import React, { useState } from "react";
import './registration.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyBcxzokqiGH0TepyZe6QulZD3Tsv6pSZMg",
  authDomain: "student-club-8a69d.firebaseapp.com",
  projectId: "student-club-8a69d",
  storageBucket: "student-club-8a69d.appspot.com",
  messagingSenderId: "665755141223",
  appId: "1:665755141223:web:382921bc69ce583cf0c0c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Register() {
  const [name, setName] = useState();
  const [roll, setRoll] = useState();
  const [course, setCourse] = useState();
  const [Semester, setSemester] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const [club, setClub] = useState();
  const [sucess, setSucess] = useState(false);

  async function sumbitDoc(e){
    e.preventDefault();
    
    const data = {
      name,
      roll_number: roll,
      course,
      Semester,
      number,
      email,
      msg,
      club
    }
    console.log(data)

    setDoc(doc(db, "register", name), data).then(() => {
    setSucess(true);
})
.catch(error => {
    console.log(error);
})
  }

    return <>
    <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form onSubmit={(e) => sumbitDoc(e)} action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">EnRoll. Number</span>
            <input onChange={(e) => setRoll(e.target.value)} type="text" name="roll" placeholder="Enter your Enrollment number" required />
          </div>
          <div className="input-box">
            <span className="details">Course</span>
            <input onChange={(e) => setCourse(e.target.value)} type="text" name="course" placeholder="Eg. MBA, BBA, BSC, Btech" required />
          </div>
          <div className="input-box">
            <span className="details">Semester</span>
            <input onChange={(e) => setSemester(e.target.value)} type="text" name="semester" placeholder="Eg. 1st, 2nd, 3rd" required />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder="Enter your number" required />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
          </div>
          <div className="input-box">
            <span className="details">Tell me about yourself</span>
            <textarea onChange={(e) => setMsg(e.target.value)} class="form-control" rows="3" placeholder="Type your answer here"></textarea>
          </div>
          
        </div>
        <label for="cars">Choose a club:</label>

<select onChange={(e) => setClub(e.target.value)} name="clubs" id="clubs">
  <option value="literary">LITERARY CLUB</option>
  <option value="technical">TECHWORMS CLUB</option>
  <option value="art&culture">ART & CULTURE CLUB</option>
  <option value="sports">SPORTS CLUB</option>
  <option value="photography">PHOTOGRAPHY CLUB</option>
</select>
        {sucess && <p style={{color:"green", textAlign: "center", fontSize: "20px"}}>Form submmited successfully</p>}
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
    </>
}

export default Register;