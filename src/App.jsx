import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import Categories from "./pages/Categories";
import Products from "./pages/ProductPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path="/categories" element={ <Categories /> }/>
        <Route path="/products" element={ <Products />}/>
      </Routes>
    </>
  );
}

export default App;