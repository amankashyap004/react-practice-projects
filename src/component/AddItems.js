import React from "react";

export default function AddItems() {
   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

   function addThings() {
      setThingsArray((prevThingsArray) => [...prevThingsArray, `Thing ${thingsArray.length + 1}`]);
   }

   const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

   return (
      <div className="container">
         <section className="add-items">
            <h3 className="heading">Add Item</h3>
            <button onClick={addThings} className="btn add-items-btn">
               Add Things
            </button>
            <div className="add-items-contain">
               {thingsElements}
            </div>
         </section>
      </div>
   );
}
