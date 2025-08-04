import { useEffect } from "react";
import Header from "./views/components/Header";
import Question from "./views/Question";

function App() {
    useEffect(() => {
        const setAppHeight = () => {
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--app-height', `${vh}px`)
        };

        setAppHeight();
        window.addEventListener('resize', setAppHeight);
    });

    return (
        <>
            <div className="bg-background flex flex-col min-h-[var(--app-height)]">
                <Header />
                <div className="flex-1 flex items-center">
                    <Question />
                </div>
            </div>
        </>
    );
}

export default App;
