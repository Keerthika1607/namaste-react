import React from "react";

class UserClass extends React.Component {
   constructor(props){
      super(props);
      
      this.state = {
         userInfo : {
            name : "dummy",
            location : "dummy location",
            // image : "https://gratisography.com/wp-content/uploads/2025/02/gratisography-flower-beard-1-1170x780.jpg",
         },
      };
   }

   async componentDidMount () {
      const data = await fetch("https://api.github.com/users/Keerthika1607");
      const json = await data.json();

      this.setState({
         userInfo : json,
      });

      console.log(json);
   }

   componentDidUpdate() {
      console.log("Component Updated");
   }

   componentWillUnmount() {
      console.log("component Will Unmount");
   }

   render() {
      // const {name, location} = this.props;
      const {name, location, avatar_url} = this.state.userInfo;
      // debugger;
      return (
         <div className="user-card">
            <img src={avatar_url}/>
            <h2>NAME : {name}</h2>
            <h3>LOCATION : {location}</h3>
            <h4>MAIL ID : keerthika.thiru16072003@gmail.com</h4>
         </div>
      );
   }
}

export default UserClass;