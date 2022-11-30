import React from "react";

export default function EventListener() {
   const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);
   
   function addItems() {
      const newThingText = `Thing ${things.length + 1}`;
      // thingsArray.push(newThingText);
      // console.log(thingsArray);
      setThings(prevState => [...prevState, newThingText])
   }
   
   const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);
   return (
      <div className="container">
         <section className="add-items">
            <h3 className="heading">Add Item</h3>

            <button onClick={addItems} className="btn add-items-btn">
               Add Things
            </button>
            <div className="add-items-contain">{thingsElements}</div>
         </section>
      </div>
   );
}
