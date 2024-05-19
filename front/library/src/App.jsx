// App.js
import { ContextProvider } from "./contexts/GlobalContext";
import MainView from "./components/MainVIew/MainView";

function App() {

  return (
    <ContextProvider>
      <MainView/>
    </ContextProvider>
  );
}

export default App;
