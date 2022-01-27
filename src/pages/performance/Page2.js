import React from "react";

function Page2({ OnRouteChange }) {
   return (
      <>
         <div className="w-full h-48 text-center border ">Page 2</div>
         <div className="text-center">
            <button className="btn" onClick={() => OnRouteChange("page1")}>
               page1
            </button>{" "}
            <button className="btn" disabled>
               page2
            </button>
            <button className="btn" onClick={() => OnRouteChange("page3")}>
               page3
            </button>
         </div>
      </>
   );
}

export default Page2;
