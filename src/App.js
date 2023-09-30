import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStateProvider } from "./state/GlobalStateProvider";
function App() {
  return (
    <>
      <GlobalStateProvider>
        <div className="App">
          <RouterProvider router={routes}></RouterProvider>
          <ToastContainer />
        </div>
      </GlobalStateProvider>
    </>
  );
}

export default App;
