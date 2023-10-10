import {useState} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { PAGES } from './shared/constants/page.const';

function App() {
  const [pageSelected, setPageSelected] = useState(PAGES.home);

  const pageMappers = {
    [PAGES.home]: <Home />,
    [PAGES.login]: <Login />,
    [PAGES.register]: <Register />,
  }

  const changePage = (pageName) => {
    setPageSelected(pageName);
  }

  return (
    <div>
      {pageMappers[pageSelected]}

      <div>
        <button onClick={() => changePage(PAGES.home)}>Home</button>
        <button onClick={() => changePage(PAGES.login)}>Login</button>
        <button onClick={() => changePage(PAGES.register)}>Register</button>
      </div>
    </div>
  );
}

export default App;
