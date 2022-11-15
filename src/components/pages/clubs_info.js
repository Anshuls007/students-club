import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar";
import './club_info.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

function Clubs() {
  const [data, setData] = useState([])
  useEffect(() => {
    const res = async () => {
      const clubCol = collection(db, 'clubs');
    const clubSnapshot = await getDocs(clubCol)
    const clubList = clubSnapshot.docs.map(doc => doc.data());
    setData(clubList)
    }

    return res;
  }, [])


  return <>
        <div className="card-group">
          {console.log(data)}
          {data && <>
            {data?.map(club => (
            <div className="card rounded">
            <img src={club.imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{club.Title}</h5>
              <p className="card-text">{club.Description}</p>
              <p className="card-text"><small className="text-muted">Last updated: {new Date(club.Date.seconds*1000).toDateString()}</small></p>
            </div>
          </div>
          ))}
          </>}
</div>
    </> 
}

export default Clubs;