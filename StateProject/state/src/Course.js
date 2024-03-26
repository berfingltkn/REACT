import Angular from './image/resim1.png';
import Bootstrap from './image/resim2.png';
import './Course.css';

const courseMap={
    Angular:Angular,
    Bootstrap:Bootstrap
  };
function Course({courseName}){
     console.log(courseMap[courseName]);
    return (
    <div className='courseDiv'>
        <img className='courseImage' src={courseMap[courseName]} alt="course"/>
    </div>
    );
}

export default Course;