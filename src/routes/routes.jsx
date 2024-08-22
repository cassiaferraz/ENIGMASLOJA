import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../components/Home/Home';
import Estoque from "../components/Estoque/Estoque";
// import Login from "../components/Login/Login";
import Update from "../components/Update/Update"
import Config from "../components/Config/Config"

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home />} />
                {/* <Route path= "/" element={<Login />} /> */}
                <Route path= "/Estoque" element={<Estoque />} />
                <Route path= "/Home" element={<Home />} />
                <Route path= "/Update" element={<Update />} />
                <Route path= "/Config" element={<Config />} />
            </Routes>
        </BrowserRouter>
    )
}








