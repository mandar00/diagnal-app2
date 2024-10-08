import "./App.css";
import RootContextProvider from "./views/RootContextProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./views/Routes/routes";
import CustomSnackbar from "./components/global/CustomSnackbar";

function App() {
  return (
    <RootContextProvider>
      <RouterProvider router={router} />
      <CustomSnackbar/>
    </RootContextProvider>
  );
}

export default App;
