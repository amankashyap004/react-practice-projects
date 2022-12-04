import React from "react";

export default function WindowWidth() {
   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

   React.useEffect(() => {
      function watchWindow() {
         setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", watchWindow);

      return function () {
         window.removeEventListener("resize", watchWindow);
      };
   }, []);

   return <h1>Window Width: {windowWidth}</h1>;
}
