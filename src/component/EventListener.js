import React from "react";

export default function EventListener() {
   function handleClick() {
      console.log("click");
   }
   
   function mouseOver() {
      console.log("Mouse Over");
   }

   return (
      <div className="container">
         <section className="event-listener">
            <h3 className="heading">Event Listener</h3>
            <img src="https://picsum.photos/640/360" className="event-listener-img" onMouseOver={mouseOver} />
            <button onClick={handleClick} className="btn event-listener-btn">
               Click
            </button>
         </section>
      </div>
   );
}
