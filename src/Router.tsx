import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./components/movies";
import MyCard from "./daisyui";
import FormApp from "./forms";
import Counter from "./myapp";

function Router1(){
    return(
        <BrowserRouter>
         <nav className="text-2xl text-center gap-2 p-4 bg-gray-200 mb-4 flex justify-center space-x-4 text-blue-400">
            <Link to="/">Movies</Link>
            <Link to="/shop">Shopping</Link>
            <Link to="/contact">Counter</Link>
            <Link to="/form">Form</Link>

         </nav>

         <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/shop" element={<MyCard/>}/>
            <Route path="/contact" element={<Counter/>}/>
            <Route path="/form" element={<FormApp/>}/>
         </Routes>
        </BrowserRouter>
    )
}
export default Router1;