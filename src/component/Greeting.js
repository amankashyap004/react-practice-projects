import React from "react";

export default function Greeting() {
   const date = new Date();
   const hours = date.getHours();
   let timeOfDay;

   if (hours >= 4 && hours < 12) {
      timeOfDay = "Morning";
   } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
   } else if (hours >= 17 && hours < 22) {
      timeOfDay = "Evening";
   } else {
      timeOfDay = "Night";
   }

   const greetingMassage = `Good ${timeOfDay} !`;

   return (
      <div className="container">
         <section className="greeting">
            <h3 className="heading greeting-text">{greetingMassage}</h3>
         </section>
      </div>
   );
}
