import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import apiEnemIcon from "../../assets/api-enem-icon.ico"
import type { JSX } from "react";

function Footer(): JSX.Element {
    return (
        <footer className="border-t-3 border-dark-highlight">
            <div className="container mx-auto flex justify-between items-center py-5 px-3 text-text">
                <div>
                    <a href="https://github.com/MosukaSan" className="hover:text-text-hover"><FontAwesomeIcon icon={faGithub} /> Desenvolvedor</a>
                </div>
                <div onClick={() => window.location.href = "https://enem.dev/"} className="flex gap-3 items-center hover:cursor-pointer hover:text-text-hover">
                    <h3>Feito com a API Enem</h3>
                    <img src={apiEnemIcon} alt="api enem image" className="h-9" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;