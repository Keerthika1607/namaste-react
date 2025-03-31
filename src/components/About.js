import UserClass from "./UserClass";

const About = () => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
         <h1 className="text-3xl font-bold text-gray-700 mb-6">About Us</h1>
         <p className="text-lg text-gray-600 max-w-md text-center">
            Welcome to our platform! We aim to provide the best experience with top-notch services.
         </p>
         <div className="mt-8">
            <UserClass />
         </div>
      </div>
   );
};

export default About;
