import type { JSX } from "react";
import enemLogo from '../../assets/enem-logo.png'

function Header(): JSX.Element {
    return (
        <header className="flex items-center justify-center py-2 px-3 border-b-3 border-dark-highlight">
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-text text-3xl font-bold">Daily</h1>
                <img src={enemLogo} alt="logo enem" className="h-15" />
            </div>
        </header>
    );
}

export default Header;