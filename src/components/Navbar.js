import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <div className="p-8 Navbar ">
         <ul className="">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/employees">Employees App</Link>
            </li>

            <li>
               <Link to="/Performance">Performance</Link>
            </li>
         </ul>
      </div>
   );
}

export default Navbar;
