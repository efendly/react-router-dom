import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Error from "../Page/Error";
import Portfolio from "../Page/Portfolio";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Portfolio" element={<Portfolio/>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>


    )
}
export default App;







