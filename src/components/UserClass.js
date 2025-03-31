import React from "react";

class UserClass extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         userInfo: {
            name: "Loading...",
            location: "Fetching location...",
            avatar_url: "https://via.placeholder.com/150", 
         },
      };
   }

   async componentDidMount() {
      const data = await fetch("https://api.github.com/users/Keerthika1607");
      const json = await data.json();

      this.setState({
         userInfo: json,
      });
   }

   componentDidUpdate() {
      console.log("Component Updated");
   }

   componentWillUnmount() {
      console.log("Component Will Unmount");
   }

   render() {
      const { name, location, avatar_url } = this.state.userInfo;

      return (
         <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200">
            <img 
               src={avatar_url} 
               alt="User Avatar" 
               className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
            />
            <h2 className="text-xl font-bold mt-4 text-gray-800">{name}</h2>
            <h3 className="text-gray-600 text-md mt-2">📍 {location}</h3>
            <h4 className="text-gray-500 text-sm mt-2">✉️ keerthika.thiru16072003@gmail.com</h4>
         </div>
      );
   }
}

export default UserClass;
