import React from "react";

function EmployeeCard({ employee }) {
   return (
      <div
         className="border-2 rounded-md shadow-md m-5 p-8 break-words "
         style={{ minHeight: "350px", width: "300px" }}
      >
         <div className="flex justify-center mb-10">
            <img
               className="w-32 h-32 rounded-full border border-gray-600 object-cover"
               alt=""
               src={`https://picsum.photos/200/300?random=${employee.id}`}
            />
         </div>

         <div className="text-center ">
            <h3 className=" mb-4">{employee.name}</h3>
            <h5 className="mb-3">{employee.email}</h5>
            <p className="mb-3">{employee.company.catchPhrase}</p>
            <a href="#" className="text-xl mb-2 text-gray-600">
               {employee.website}
            </a>
         </div>
      </div>
   );
}

export default EmployeeCard;
