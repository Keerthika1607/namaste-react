import { useRouteError } from "react-router"; //This is a hook given by react-router

const Error = () => {
   const err = useRouteError();
   console.log(err);
   return (
      <div>
         <h1>Oops!!!</h1>
         <h2>Something Went Wrong</h2>
      </div>
   )
}

export default Error;