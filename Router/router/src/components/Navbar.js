import React from 'react'
import AboutUs from './AboutUs'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <nav>
<Link to="/">Home</Link>
<div>-----</div>
<Link to="/aboutUs">About</Link>
{/* Link yerine navbar a özel navlink de kullanabiliriz. Böylelikle act,ve classları görebiliriz. */}
   </nav>
  )
}

export default Navbar
