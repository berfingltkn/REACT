import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';


function App() {

  const [coursess, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

const deleteCourse =(id)=>{
const afterDeletedCourses=coursess.filter((course)=>course.id!=id);
setCourses(afterDeletedCourses);

}

  const fetchCourses = async () => {//bu bir errorFunctiondur.
    try {
      const response = await axios.get('http://localhost:3000/courses');//axios ile apideki dataları çektik. tüm datalar bir gelsin istediğimiz için de await keyi kullandık.
      setCourses(response.data);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
    }

    debugger;

  };

  useEffect(() => {
    fetchCourses();

  }, [])//useEffectimiz değişmeyene kadar bir kere tek çalışsın istediğimiz için bu formatta yazdık.

  return (
    <div className="App">
      {loading ? (//eger sayfa yükleniyorsa
        <Loading />
      ) : (
        <Courses courses={coursess} removeCourse={deleteCourse} />
      )}

    </div>
  );
}

export default App;
