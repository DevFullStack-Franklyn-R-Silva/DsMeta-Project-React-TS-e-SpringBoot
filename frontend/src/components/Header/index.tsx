import logo from "../../assets/img/logo.svg";

import "./styles.css";

const Header = () => {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.instagram.com/franklyn_r.s/"> @franklyn_r.s</a>
                </p>
            </div>
        </header>
    )
}

export default Header;