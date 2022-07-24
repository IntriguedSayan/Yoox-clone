import { Route, Routes } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import HomePage from "../HomepageSection/HomePage";
import MenProductPage from "../MenProductPage/MenProductPage";
import SignUpAndLogInPage from "../SignUp&LogInPage/SignUp&LogInPage";
import WomenProductPage from "../WomenProductPage/WomenProductPage";

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<SignUpAndLogInPage/>}/>
            <Route path="/men"  element={<MenProductPage/>}/>
            <Route path="/women" element={<WomenProductPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>
    )
}