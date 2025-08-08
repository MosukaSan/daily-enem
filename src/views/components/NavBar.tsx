import { useEffect, useState, type JSX } from "react";
import { NAVBAR_ANIMATION_DELAY } from "../../config/animation";
import { Link } from "react-router-dom";

export type NavBarProps = {
    navActive: boolean,
    toggleNav: (p: boolean) => void
}

function NavBar({ navActive, toggleNav }: NavBarProps): JSX.Element {
    const [transition, toggleTransition] = useState(false);

    useEffect(() => {
        if (navActive) {
            requestAnimationFrame(() => {
                toggleTransition(true);
            });
        }
    }, [navActive]);

    const disabeNav = () => {
        toggleTransition(false);
        setTimeout(() => {
            toggleNav(false);
        }, NAVBAR_ANIMATION_DELAY);
    };

    return (
        <div className={`flex w-screen h-screen fixed z-999 ${navActive ? 'translate-x-0' : 'translate-x-full'}`}>
            <div onClick={disabeNav} className="w-screen h-screen fixed"></div>
            <div className={`bg-dark-highlight absolute right-0 h-full py-6 px-10 transform transition-transform ${transition ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transitionDuration: `${NAVBAR_ANIMATION_DELAY}ms` }}>
                <nav className="mt-10">
                    <ul className="flex flex-col items-center space-y-10 text-xl text-text">
                        <li><Link className="hover:text-text-hover" to="/matematica" onClick={disabeNav}>Matemática</Link></li>
                        <li><Link className="hover:text-text-hover"to="/linguagens" onClick={disabeNav}>Linguagens</Link></li>
                        <li><Link className="hover:text-text-hover" to="/ciencias-natureza" onClick={disabeNav}>Ciências da Natureza</Link></li>
                        <li><Link className="hover:text-text-hover" to="/ciencias-humanas" onClick={disabeNav}>Ciências Humanas</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;