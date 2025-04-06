# Namaste React

# parcel
-Dev Build
-Local Server
-HMR(Refresh) - Hot Module Replacement
-File Watching Algorithm - Written in C++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - support old browser
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - it removes unused code

# Two types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

# OnChange handler
The input box to make the input box work. First of all, I will have to bind my input box. When i say bind that means i have to give this value as search text to a local variable of state.

# Class-based Component Life Cycle At API Calls

---------MOUNTING-------------

--Constructor (dummy)
--Render (dummy)
  --<HTML Dummy >

--Component Did Mount
  --<API Call>
  --<this.setState> → State variable is updated

---------UPDATE-----

--render(APi data)
--<HTML (new API data>)
--componentDid Update

# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - Selector

# Types of Testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our application
https://jestjs.io/docs/getting-started
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies - (when we use jest along with babel)
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation - https://parceljs.org/languages/javascript/#babel
 - Jest configuration (npx jest --init) It will initialize the jest
 - Install jsDom library(If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.)
 - Install @babel/preset-react - to make JSX work in test cases.
 - Include @babel/preset-react inside my babel config
 - npm i - D @testing-library/jest-dom



// Higher Order Component for Promoted Label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted Badge */}
        <label className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
}; 

<li>
  <button
    className={`ml-4 px-4 py-2 rounded-lg transition shadow-md ${
      isLoggedIn
        ? "bg-red-500 text-white hover:bg-red-600"
        : "bg-green-500 text-white hover:bg-green-600"
    }`}
    onClick={() => setIsLoggedIn(!isLoggedIn)}
  >
    {isLoggedIn ? "Log Out" : "Login"}
  </button>
</li>