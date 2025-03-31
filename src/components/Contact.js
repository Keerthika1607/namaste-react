// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
//       <form>
//         <input type="text" placeholder='name' className='border border-black p-2 m-2'></input>
//         <input type="text" placeholder='message' className='border border-black p-2 m-2'></input>
//         <button className='border border-black p-2 m-2 bg-orange-200 rounded-lg'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Contact;

import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
        
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          
          <textarea 
            placeholder="Your Message" 
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <button 
            type="submit" 
            className="w-full p-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
