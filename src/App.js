import "./App.css";
import Header from "./component/Header";
import EventListener from "./component/EventListener"
import Greeting from "./component/Greeting";
import UseStateCounter from "./component/UseStateCounter";

function App() {
   return (
      <div className="App">
         <Header />
         <Greeting />
         <EventListener />
         <UseStateCounter />
      </div>
   );
}

export default App;
