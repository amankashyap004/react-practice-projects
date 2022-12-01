import React from "react";
import boxesData from "./boxesData";
import Box from "./Box";

export default function Boxes() {
   const [squares, setSquares] = React.useState(boxesData);

   const squaresElements = squares.map((square) => <Box key={square.id} on={square.on} />);

   return (
      <div className="container">
         <section className="boxes-container">
            <h3 className="heading">Box Challenges</h3>
            <main className="boxes-contain">{squaresElements}</main>
         </section>
      </div>
   );
}
