import { useEffect, useState } from "react";
import Header from "./views/components/Header";
import Question from "./views/Question";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./views/components/NavBar";

function App() {
    const [navActive, toggleNav] = useState(false);

    useEffect(() => {
        const setAppHeight = () => {
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--app-height', `${vh}px`)
        };

        setAppHeight();
        window.addEventListener('resize', setAppHeight);
    }, []);

    return (
        <BrowserRouter>
            <div className="bg-background flex flex-col min-h-[var(--app-height)]">
                <NavBar navActive={navActive} toggleNav={toggleNav}/>
                <Header toggleNav={toggleNav}/>
                <div className="flex-1 flex items-center">
                    <Routes>
                        <Route path="/" element={<Question subject="geral"/>}/>
                        <Route path="/matematica" element={<Question subject="matematica"/>}/>
                        <Route path="/linguagens" element={<Question subject="linguagens"/>}/>
                        <Route path="/ciencias-natureza" element={<Question subject="ciencias-natureza"/>}/>
                        <Route path="/ciencias-humanas" element={<Question subject="ciencias-humanas"/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
