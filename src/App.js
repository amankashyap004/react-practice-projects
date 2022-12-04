import "./App.css";
import Header from "./component/Header";
import EventListener from "./component/EventListener"
import Greeting from "./component/Greeting";
import UseStateCounter from "./component/UseStateCounter";
import TernaryOperatorPractice from "./component/TernaryOperatorPractice";
import AddItems from "./component/AddItems"
import ToggleFavoriteCard from "./component/ToggleFavoriteCard";
import Boxes from "./component/boxesChallenge/Boxes";
import JokesSetupWithPunchline from "./component/jokesSetupWithPunchline/JokesSetupWithPunchline";
import Forms from "./component/reactForms/Forms";
import StarWarsAPI from "./component/makingApiCalls/StarWarsAPI";

function App() {
   return (
      <div className="App">
         <Header />
         <Greeting />
         <EventListener />
         <UseStateCounter />
         <TernaryOperatorPractice />
         <AddItems />
         <ToggleFavoriteCard />
         <Boxes />
         <JokesSetupWithPunchline />
         <Forms />
         <StarWarsAPI />
      </div>
   );
}

export default App;
