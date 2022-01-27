import React from "react";

function Page3({ OnRouteChange }) {
   return (
      <>
         <div className="w-full h-48 text-center border ">Page 3</div>
         <div className="text-center">
            <button className="btn" onClick={() => OnRouteChange("page1")}>
               page1
            </button>
            <button className="btn" onClick={() => OnRouteChange("page2")}>
               page2
            </button>{" "}
            <button className="btn" disabled>
               page3
            </button>
         </div>
      </>
   );
}

export default Page3;
