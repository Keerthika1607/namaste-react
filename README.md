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
