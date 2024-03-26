import 'bulma/css/bulma.css'
import React from "react";
import Course from "./Course";
import Resim1 from './reactimage/resim1.png';
import Resim2 from './reactimage/resim2.png';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      KURSLARIM
    </p>
    <p class="subtitle">
      Berfin Gültekin
    </p>
  </div>
</section>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
          <Course
      image={Resim1}
        title="Angular"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis facilisis velit. 
        Nunc justo lorem, feugiat molestie faucibus ac, consequat nec magna. Praesent convallis tortor et tortor dapibus, a tincidunt felis finibus.
        Quisque purus nisl, malesuada id lacinia nec, sollicitudin ut eros. Mauris mollis mauris in felis viverra, eget pulvinar lorem porta.
        Sed id ullamcorper massa, eget tempus libero. Proin eu rhoncus mauris. Mauris ac pharetra turpis."
      />
        </div>
        <div className='column'>
          <Course
      image={Resim2}
        title="React"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis facilisis velit. 
        Nunc justo lorem, feugiat molestie faucibus ac, consequat nec magna. Praesent convallis tortor et tortor dapibus, a tincidunt felis finibus.
        Quisque purus nisl, malesuada id lacinia nec, sollicitudin ut eros. Mauris mollis mauris in felis viverra, eget pulvinar lorem porta.
        Sed id ullamcorper massa, eget tempus libero. Proin eu rhoncus mauris. Mauris ac pharetra turpis."
      />
        </div>
        <div className='column'>
      
      <Course
      image={Resim1}
        title="Bootstrap"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis facilisis velit. 
        Nunc justo lorem, feugiat molestie faucibus ac, consequat nec magna. Praesent convallis tortor et tortor dapibus, a tincidunt felis finibus.
        Quisque purus nisl, malesuada id lacinia nec, sollicitudin ut eros. Mauris mollis mauris in felis viverra, eget pulvinar lorem porta.
        Sed id ullamcorper massa, eget tempus libero. Proin eu rhoncus mauris. Mauris ac pharetra turpis."
      />
        </div>
      </div>
    </div>


     
      
      
      <Course />
    </div>
  );
}

export default App;