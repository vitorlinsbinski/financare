import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>

      <div className="container">
        <Header></Header>

        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
