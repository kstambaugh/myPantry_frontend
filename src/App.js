import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Pantry from "./components/pantry";
import Grocery from "./components/grocery";
import Recipes from "./components/recipes";
import Ingredients from "./components/ingredients";
import Error404 from "./components/error404";


function App() {

  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={Home()} />
        <Route exact path="/pantry" element={Pantry()} />
        <Route exact path="/grocery" element={Grocery()} />
        <Route exact path="/recipes" element={Recipes()} />
        <Route exact path="/ingredients" element={Ingredients()} />
        <Route path="/" element={Error404()} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;