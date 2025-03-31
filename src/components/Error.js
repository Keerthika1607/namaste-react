import { useRouteError } from "react-router"; 

const Error = () => {
   const err = useRouteError();

   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
         {/* Error Card */}
         <div className="bg-white shadow-lg p-10 rounded-xl text-center">
            <h1 className="text-4xl font-extrabold text-red-500">⚠️ Oops!!!</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Something Went Wrong</h2>

            {/* Error Details */}
            {err && (
               <p className="text-gray-500 mt-2">
                  {err.status} - {err.statusText || "Unknown Error"}
               </p>
            )}

            {/* Go Back Button */}
            <button 
               className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
               onClick={() => window.history.back()}
            >
               🔄 Go Back
            </button>
         </div>
      </div>
   );
};

export default Error;
