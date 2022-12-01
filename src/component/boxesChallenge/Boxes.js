import React from "react";
import boxesData from "./boxesData";
import Box from "./Box";

export default function Boxes() {
   const [squares, setSquares] = React.useState(boxesData);

   function toggle(id) {
      // setSquares((prevSquares) => {
      //    const newSquares = [];
      //    for (let i = 0; i < prevSquares.length; i++) {
      //       const currentSquare = prevSquares[i];
      //       if (currentSquare.id === id) {
      //          const updatedSquare = {
      //             ...currentSquare,
      //             on: !currentSquare.on,
      //          };
      //          newSquares.push(updatedSquare);
      //       } else {
      //          newSquares.push(currentSquare);
      //       }
      //    }
      //    return newSquares;
      // });

      // OR
      setSquares((prevSquares) => {
         return prevSquares.map((square) => {
            return square.id === id ? { ...square, on: !square.on } : square;
         });
      });
   }

   const squaresElements = squares.map((square) => (
      <Box
         key={square.id}
         on={square.on}
         // id={square.id}
         toggles={() => toggle(square.id)}
      />
   ));

   return (
      <div className="container">
         <section className="boxes-container">
            <h3 className="heading">Box Challenges</h3>
            <main className="boxes-contain">{squaresElements}</main>
         </section>
      </div>
   );
}
