const Shimmer = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
         {Array(15)
            .fill("")
            .map((_, index) => (
               <div 
                  key={index} 
                  className="w-full h-40 bg-gray-200 rounded-lg animate-pulse"
               ></div>
            ))}
      </div>
   );
};

export default Shimmer;
