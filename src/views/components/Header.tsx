import type { JSX } from "react";
import enemLogo from '../../assets/enem-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
    toggleNav: (p: boolean) => void
}

function Header({ toggleNav }: HeaderProps): JSX.Element {
    const navigate = useNavigate();

    return (
        <header className="border-b-3 border-dark-highlight">
            <nav className="container mx-auto flex justify-between items-center py-7 px-3 text-text">
                <div onClick={() => { navigate('/') }} className="flex items-center justify-center gap-2 hover:cursor-pointer">
                    <h1 className="text-text text-3xl font-bold">Daily</h1>
                    <img src={enemLogo} alt="logo enem" className="h-15" />
                </div>

                <ul className="hidden lg:flex items-center space-x-5 text-xl">
                    <li><Link className="hover:text-text-hover" to="/matematica">Matemática</Link></li>
                    <li><Link className="hover:text-text-hover"to="/linguagens">Linguagens</Link></li>
                    <li><Link className="hover:text-text-hover" to="/ciencias-natureza">Ciências da Natureza</Link></li>
                    <li><Link className="hover:text-text-hover" to="/ciencias-humanas">Ciências Humanas</Link></li>
                </ul>

                <button onClick={() => toggleNav(true)} className="block lg:hidden text-2xl hover:text-text-light-hover hover:cursor-pointer"><FontAwesomeIcon icon={faBars}/></button>
            </nav>
        </header>
    );
}

export default Header;