import { useState } from 'react'
import "./header.scss";

const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="inner">
                <a href="/">
                    <img src="/logo.svg" alt="crowdfund logo" className="logo" />
                </a>
                <img onClick={toggleMobileMenu} src={`/${isMobileMenuOpen ? 'icon-close-menu.svg':'icon-hamburger.svg'}`} alt="" className="menu-toggler" />
                <dialog open={isMobileMenuOpen} className="mobile-menu">
                    <nav>
                        <a href="/">About</a>
                        <a href="/">Discover</a>
                        <a href="/">Get Started</a>
                    </nav>
                </dialog>
            </div>
        </header>
    );
};

export default Header;
