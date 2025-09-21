import "./App.css";
import { Header } from "./Componets/Header";
import { Body } from "./Componets/Body";
import { Provider } from "react-redux";
import { store } from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

/* {

 Header
 Body
   Siderbar
      manuitem
   mainContainer
     ButtonList
     VideoContainer
       viderocard   
} */
