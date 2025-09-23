import "./App.css";
import { Header } from "./Componets/Header";
import { Body } from "./Componets/Body";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WatchPage } from "./Componets/WatchPage";
import { MainContainer } from "./Componets/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
