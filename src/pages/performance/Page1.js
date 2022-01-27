import React from "react";

function Page1({ OnRouteChange }) {
   return (
      <>
         <div className="w-full h-48 text-center border ">Page 1</div>
         <div className="text-center">
            <button className="btn" disabled>
               page1
            </button>
            <button className="btn" onClick={() => OnRouteChange("page2")}>
               page2
            </button>
            <button className="btn" onClick={() => OnRouteChange("page3")}>
               page3
            </button>
         </div>
      </>
   );
}

export default Page1;
