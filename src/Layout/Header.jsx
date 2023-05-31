import "./header.scss";

const Header = () => {
    return (
        <header>
            <div className="inner">
                <a href="/">
                    <img src="/logo.svg" alt="crowdfund logo" className="logo" />
                </a>
                <img src="/icon-hamburger.svg" alt="" className="hamburger" />
            </div>
        </header>
    );
};

export default Header;
