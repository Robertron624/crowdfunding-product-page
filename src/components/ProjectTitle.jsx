import { useState } from "react";
import { Modal, Box } from "@mui/material";
import "./project-title.scss";
import { pledgeData } from "../pledgeData";
import BackSelection from "./backSelection/BackSelection";

const boxStyle = {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "none",
    boxShadow: 24,
    p: 0,
    overflow: "scroll",
};

const pledgeBoxStyle = {
    padding: "1rem",
    border: "1px solid hsl(0, 0%, 48%)",
    borderRadius: "10px",
};

const noRewardPledge = {
    title: "Pledge with no reward",
    description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
};

const ProjectTitle = () => {
    const [selectionModalIsOpen, setSelectionModalIsOpen] = useState(false);

    const handleOpen = () => setSelectionModalIsOpen(true);
    const handleClose = () => setSelectionModalIsOpen(false);

    return (
        <div className="project-title">
            <img
                src="/logo-mastercraft.svg"
                alt="mastercraft logo"
                className="logo"
            />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
            </p>
            <div className="buttons">
                <button onClick={handleOpen} className="back-this">
                    Back this project
                </button>
                <button className="bookmark">
                    Bookmark
                    <img src="/icon-bookmark.svg" alt="bookmark icon" />
                </button>
            </div>
            <Modal
                open={selectionModalIsOpen}
                onClose={handleClose}
                style={{ overflow: "scroll" }}
            >
                <Box sx={boxStyle}>
                    <div
                      style={pledgeBoxStyle}
                    >
                        <h4
                          style={{
                              fontWeight: "bold",
                              marginBottom: "1rem",
                              fontSize: ".8rem",
                          }}
                        >
                          Back this project</h4>
                        <p
                          style={{
                              fontSize: ".8rem",
                              marginBottom: "1rem",
                              color: "hsl(0, 0%, 48%)",
                          }}
                        
                        >
                            Want to support us in bringing Mastercraft Bamboo
                            Monitor Riser out in the world?
                        </p>
                        <div 
                          style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "1rem",
                          }}
                        >
                            <BackSelection pledge={noRewardPledge} />
                            {pledgeData.map((pledge, index) => (
                                <BackSelection key={index} pledge={pledge} />
                            ))}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ProjectTitle;
