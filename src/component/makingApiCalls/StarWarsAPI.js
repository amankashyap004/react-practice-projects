import React from "react";

export default function StarWarsAPI() {
   const [starWarsData, setStarWarsData] = React.useState({});

   const [count, setCount] = React.useState(1);

   React.useEffect(
      function () {
         fetch(`https://swapi.py4e.com/api/people/${count}`)
            .then((res) => res.json())
            .then((data) => setStarWarsData(data));
      },
      [count]
   );

   return (
      <div className="container">
         <section className="star-wars-api">
            <h3 className="heading">Making API Calls</h3>
            <section className="star-wars-api-container">
               <div className="star-wars-api-contain">
                  <h4 className="star-wars-api-count-text">The Character No. {count}</h4>
                  <button className="btn" onClick={() => setCount((prevCount) => prevCount + 1)}>
                     Get Next Character
                  </button>
               </div>
               <div className="star-wars-api-prev">
                  <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
               </div>
            </section>
         </section>
      </div>
   );
}
