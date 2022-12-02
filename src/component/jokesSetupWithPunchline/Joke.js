import React from "react";

export default function Joke(props) {
   const [isShown, setIsShown] = React.useState(false);

   function toggle() {
      setIsShown((prevShown) => !prevShown);
   }

   return (
      <div className="jokes-body">
         {props.setup && <h3 className="jokes-setup-line">{props.setup}</h3>}
         {isShown && <p>{props.punchline}</p>}
         <button className="btn jokes-btn" onClick={toggle}>
            Show Punchline
         </button>
      </div>
   );
}
