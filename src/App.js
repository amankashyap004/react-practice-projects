import "./App.css";
import Header from "./component/Header";
import EventListener from "./component/EventListener"
import Greeting from "./component/Greeting";

function App() {
   return (
      <div className="App">
         <Header />
         <Greeting />
         <EventListener /> 
         
      </div>
   );
}

export default App;
