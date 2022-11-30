import React from "react";

export default function TernaryOperatorPractice() {

    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function click(){
        setIsGoingOut(prevResult=>!prevResult)
    }

   return (
      <div className="container">
         <section className="ternary-operator-practice">
            <h3 className="heading">Ternary Operator Practice</h3>
            <h4 className="ternary-operator-practice-heading">Do I feel like going out tonight?</h4>
            <div className="ternary-operator-practice-container" onClick={click}>
               <h3 className="ternary-operator-practice-text">{isGoingOut?"Yes":"No"}</h3>
            </div>
         </section>
      </div>
   );
}
