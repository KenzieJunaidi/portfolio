import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import linkArrow from "../assets/link-arrow.png";

const FadeInUp = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6},
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Projects = () => {

    const [active, setActive] = useState("Core");

    const handleFilterClick = (name) => {
        setActive(name);
    }

    const projects = [
        {
            id: 1,
            filter: "Creative",
            title: "Tic-Tac-Toe",
            img_url: "/projects/tictactoe.png",
            link_url: "https://github.com/KenzieJunaidi/tic-tac-toe",
            description: "This project is a two-player Tic-Tac-Toe game with a space-themed interface, offering an engaging experience with dynamic turn-based gameplay and responsive design for desktop and mobile.",
            tech: ["React", "JavaScript", "Framer Motion"],
        },
        {
            id: 2,
            filter: "Core",
            title: "GameSage",
            img_url: "/projects/gamesage-v2.png",
            link_url: "https://github.com/KenzieJunaidi/gamesage-v2",
            description: "GameSage is a content-based game recommendation system using KNN to suggest titles based on user preferences. It was trained on data from 6,000+ games collected via the Steam API, delivering accurate personalized recommendations.",
            tech: ["React", "JavaScript", "Flask API", "Python", "KNN"],
        },
        {
            id: 3,
            filter: "Creative",
            title: "Wordle Clone",
            img_url: "/projects/wordle.png",
            link_url: "https://github.com/KenzieJunaidi/wordle-clone",
            description: "A browser-based Wordle clone that challenges players to guess words in limited attempts, featuring clean visuals and responsive design for desktop and mobile.",
            tech: ["React", "JavaScript", "Framer Motion"],
        },
        {
            id: 4,
            filter: "Colab",
            title: "[PAPER] Hate Speech Detection : A Comparison of DistilBERT and RoBERTa",
            img_url: "/projects/paper.png",
            link_url: "https://drive.google.com/drive/folders/15tWjc6qBxg7k2Gin9aM5aEwDBJwyMafT?usp=sharing",
            description: "A research study comparing the performance of DistilBERT and RoBERTa in detecting hate speech. The paper evaluates model accuracy, efficiency, and practicality for automated moderation, highlighting insights into transformer-based NLP techniques.",
            tech: ["Python", "NLP", "DistilBERT", "RoBERTa"],
        },
        {
            id: 5,
            filter: "Colab",
            title: "GameSage: Data Cleaning & KNN Model Development",
            img_url: "/projects/gamesage-v2-data.png",
            link_url: "https://colab.research.google.com/drive/197rw8WHbhz8S3LzSh8v8Ay311iTeLAFY?usp=sharing",
            description: "Preprocessed data from 6,000+ Steam games using one-hot encoding and Sentence-BERT embeddings on titles and short descriptions, then built a cosine similarity-based KNN model for the GameSage recommendation system.",
            tech: ["Python", "KNN", "Cosine Similarity", "Sentence-BERT"],
        },
        {
            id: 6,
            filter: "Core",
            title: "SkinGuard",
            img_url: "/projects/skinguard.png",
            link_url: "https://github.com/KenzieJunaidi/skinguard",
            description: "SkinGuard is an AI-powered application that uses ResNet to detect and classify skin diseases from images. Leveraging a curated skin disease image dataset from Kaggle, it provides accurate and efficient analysis to assist in early diagnosis and skin health monitoring.",
            tech: ["React", "JavaScript", "Flask API", "Python", "ResNet101"],
        },
        {
            id: 6,
            filter: "WIP",
            title: "Carpe",
            img_url: "/projects/carpe.png",
            link_url: "https://github.com/KenzieJunaidi/",
            description: "Discover, collect, and relive your travels in a way that makes every trip feel like part of a bigger adventure.",
            tech: ["React Native", "JavaScript", "Python"],
        }
    ];

    return (
        <motion.section id="projects" className="projects" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.6}}>
            <motion.div className="header-container" variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                <h5 className="section-title-header">WHAT I HAVE BUILT</h5>
            </motion.div>
            <motion.h2 className="section-title" variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                Project Showcase
            </motion.h2>
            <motion.h5 className="section-subtitle" variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                A collection of projects where I explore ideas through design and code, blending creativity with technology to build practical and meaningful solutions. Each project reflects my curiosity, growth, and commitment to turning concepts into experiences that inspire and create value.
            </motion.h5>

            <motion.div className="filter-section" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true}}>
                <div className={`tag-box ${active === "Core" ? "on" : ""}`}>
                    <a onClick={() => handleFilterClick("Core")}>
                        <h5 className="filter-tag">Core</h5>
                    </a>
                </div>
                <div className={`tag-box ${active === "Creative" ? "on" : ""}`}>
                    <a onClick={() => handleFilterClick("Creative")}>
                        <h5 className="filter-tag">Creative</h5>
                    </a>
                </div>
                <div className={`tag-box ${active === "Colab" ? "on" : ""}`}>
                    <a onClick={() => handleFilterClick("Colab")}>
                        <h5 className="filter-tag">Colab</h5>
                    </a>
                </div>
                <div className={`tag-box ${active === "WIP" ? "on" : ""}`}>
                    <a onClick={() => handleFilterClick("WIP")}>
                        <h5 className="filter-tag">WIP</h5>
                    </a>
                </div>
            </motion.div>
            
            <motion.div className="project-grid" variants={staggerContainer} viewport={{once: true}}>
                
                {projects
                    .filter((p) => p.filter === active)
                    .map((project) => (
                        <motion.div key={project.id} className="project-card" variants={FadeInUp} whileHover={{y: -10, transition: {duration: 0.2}}}>
                            <img className="link-btn" src={linkArrow} alt="link-arrow"  onClick={() => window.open(project.link_url, "_blank")}/>
                            <motion.div className="project-image" style={{backgroundImage: `url(${project.img_url})`}} whileHover={{scale: 1.05, transition: {duration: 0.2}}}/>
                            <motion.div>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>

                                <motion.div className="project-tech">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx}>{t}</span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))
                }

                {/* <motion.div className="project-card" variants={FadeInUp} whileHover={{y: -10, transition: {duration: 0.2}}}>
                    <motion.div className="project-image" style={{backgroundImage: "url('/projects/project-1.png')"}} whileHover={{scale: 1.05, transition: {duration: 0.2}}}/>
                    <motion.div>
                        <h2>Tic-Tac-Toe ⭕❌</h2>
                        <p>A classic 2-player Tic-Tac-Toe game built with React. Features dynamic turn-based gameplay, win detection, and a clean responsive UI. Designed for desktop and mobile play.</p>
                        <motion.div className="project-tech">
                            <span>React</span>
                            <span>Javascript</span>
                            <span>Framer Motion</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className="project-card" variants={FadeInUp} whileHover={{y: -10, transition: {duration: 0.2}}}>
                    <motion.div className="project-image" style={{backgroundImage: "url('/projects/social-media.png')"}} whileHover={{scale: 1.05, transition: {duration: 0.2}}}/>
                    <motion.div>
                        <h2>Project 2</h2>
                        <p>Short Description - Project 2</p>
                        <motion.div className="project-tech">
                            <span>Tech 1</span>
                            <span>Tech 2</span>
                            <span>Tech 3</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className="project-card" variants={FadeInUp} whileHover={{y: -10, transition: {duration: 0.2}}}>
                    <motion.div className="project-image" style={{backgroundImage: "url('/projects/stopwatch.png')"}} whileHover={{scale: 1.05, transition: {duration: 0.2}}}/>
                    <motion.div>
                        <h2>Project 3</h2>
                        <p>Short Description - Project 3</p>
                        <motion.div className="project-tech">
                            <span>Tech 1</span>
                            <span>Tech 2</span>
                            <span>Tech 3</span>
                        </motion.div>
                    </motion.div>
                </motion.div> */}
            </motion.div>
        </motion.section>
    );
}