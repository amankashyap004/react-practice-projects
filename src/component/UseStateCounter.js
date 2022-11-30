import React from "react";

export default function UseStateCounter() {
   const [count, setCount] = React.useState(0);
   function subtract() {
      //   setCount(count - 1);
      //OR
      // setCount(function(oldValue){
      //     return oldValue+1
      // })
      //OR
      setCount((prevCount) => prevCount + 1);
   }

   function add() {
      //   setCount(count + 1);

      setCount((prevCount) => prevCount - 1);
   }

   return (
      <div className="container">
         <section className="use-state-counter">
            <h3 className="heading">useState Counter</h3>
            <div className="use-state-counter-container">
               <button onClick={subtract} className="btn use-state-counter-btn">
                  -
               </button>
               <h3 className="use-state-counter-box">{count}</h3>
               <button onClick={add} className="btn use-state-counter-btn">
                  +
               </button>
            </div>
         </section>
      </div>
   );
}
