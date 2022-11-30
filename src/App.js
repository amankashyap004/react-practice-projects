import "./App.css";
import Header from "./component/Header";
import EventListener from "./component/EventListener"
import Greeting from "./component/Greeting";
import UseStateCounter from "./component/UseStateCounter";
import TernaryOperatorPractice from "./component/TernaryOperatorPractice";

function App() {
   return (
      <div className="App">
         <Header />
         <Greeting />
         <EventListener />
         <UseStateCounter />
         <TernaryOperatorPractice />
      </div>
   );
}

export default App;
