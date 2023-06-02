import { useState } from "react";
import Modal from "@mui/material/Modal";
import "./header.scss";
import { Box } from "@mui/material";

const boxStyle = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "none",
    boxShadow: 24,
    p: 0,
};

// Had to use inline styles for nav and anchor elements because MUI was not applying styles with scss
const navStyle = {
    borderRadius: "10px",
    color: "black",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
};

const aStyle = {
    color: "black",
    fontSize: "1.2rem",
    fontWeight: "700",
    textDecoration: "none",
    padding: "1rem 0 1rem 1rem",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
};

const navLinks = [
    {
        name: "About",
        link: "/",
    },
    {
        name: "Discover",
        link: "/",
    },
    {
        name: "Get Started",
        link: "/",
    },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleOpen = () => setIsMobileMenuOpen(true);
    const handleClose = () => setIsMobileMenuOpen(false);

    return (
        <header>
            <div className="inner">
                <a href="/">
                    <img
                        src="/logo.svg"
                        alt="crowdfund logo"
                        className="logo"
                    />
                </a>
                <img
                    onClick={handleOpen}
                    src={`/${
                        isMobileMenuOpen
                            ? "icon-close-menu.svg"
                            : "icon-hamburger.svg"
                    }`}
                    alt=""
                    className="menu-toggler"
                />

                <Modal
                    open={isMobileMenuOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={boxStyle}>
                        <nav style={navStyle}>
                            {navLinks.map((link) => (
                                <a
                                    style={aStyle}
                                    href={link.link}
                                    key={link.name}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </Box>
                </Modal>
            </div>
        </header>
    );
};

export default Header;
