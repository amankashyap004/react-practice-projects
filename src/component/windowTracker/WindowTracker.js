import React from "react";
import WindowWidth from "./WindowWidth";

export default function WindowTracker() {
   const [show, setShow] = React.useState(true);

   function toggle() {
      setShow((prevShow) => !prevShow);
   }
   return (
      <div className="container">
         <section className="window-tracker">
            <h3 className="heading">Window Tracker</h3>
            <section className="window-tracker-container">
               <button onClick={toggle} className="btn window-tracker-btn">
                  Toggle Window Tracker
               </button>
               <div className="window-width">{show && <WindowWidth />}</div>
            </section>
         </section>
      </div>
   );
}
