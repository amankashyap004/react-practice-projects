import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function JokesSetupWithPunchline() {

   const jokesElement = jokesData.map((joke) => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
        )
    })

   return (
      <div className="container">
         <section className="jokes-container">
            <h3 className="heading">Jokes Setup With Punchline</h3>
            <div className="jokes-contain-body">{jokesElement}</div>
         </section>
      </div>
   );
}
