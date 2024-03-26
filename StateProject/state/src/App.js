import logo from './logo.svg';
import './App.css';
import Course from './Course';
import {useState} from 'react'

function getRandomCourses(){
  const courseArray=['Angular','Bootstrap'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {

  const[courses,setCourses]=useState([])

  const handleClick=()=>{
     setCourses([...courses, getRandomCourses()])//...courses -> daha önceki elemanlar da geçerli demek.
  };
  const courseList=courses.map((course,index)=>{
    return <Course key={index} courseName={course} />
  });
   

  return (
   <div className="App">

    <button className="appButton" onClick={handleClick}>Kurs Ekle</button>
   <div className='courseList'>{courseList}</div>
   </div>
  );
}

export default App;
