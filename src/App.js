import { Header } from "./Component/Header";
import { Auth } from "./Component/Auth";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </>
  );
}

export default App;
