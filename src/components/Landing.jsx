import { motion } from "framer-motion";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter"; 
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export const Landing = () => {
    return (
        <motion.section id="landing" className="landing" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.2}}>
            <div className="landing-container" variants={staggerContainer} initial="initial" animate="animate">
                <motion.div className="landing-content">
                    <motion.div className="landing-badge">
                        <span>👋 Hello, I'm</span>
                    </motion.div>
                    <motion.h1 className="glow" whileHover={{scale: 1.05}}>
                        Kenzie Junaidi
                    </motion.h1>
                    <motion.h2 className="subtitle">
                        Aspiring AI Engineer
                    </motion.h2>
                    <motion.p className="description">
                        I'm a Computer Science student specializing in Intelligent Systems, actively learning to become a future software engineer with a strong foundation in AI. Passionate about solving real-world problems with smart technologies, I'm building skills in ML, programming, and system design—one fun and sometimes chaotic project at a time.
                    </motion.p>

                    <motion.div className="my-buttons" variants={staggerContainer}>
                        <motion.a href="https://drive.google.com/file/d/1czGVHIKYc59m_BAlE39uGWeSe9Y7xGqi/view?usp=sharing" target="_blank" className="primary-button" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Download CV</motion.a>
                        <motion.a href="#contact" className="secondary-button" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Contact Me</motion.a>
                    </motion.div>

                    <motion.div className="social-links" variants={staggerContainer} initial="initial" animate="animate">
                        <motion.a href="https://github.com/kenziejunaidi" target="_blank">
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/kenziejunaidi" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a href="https://instagram.com/kenziejunaidi" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div className="code-container" initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.4}}>
                    <div className="code-display">
                        <SyntaxHighlight language="javascript" customStyle={{margin: 0, padding: "2rem", height: "100%", borderRadius: "20px", opacity: "0.9", backdropFilter: "blur(10px)", marginBottom: "50px"}} style={vscDarkPlus}>
                            {`const aboutMe: DeveloperProfile = {
        codename: "KenzieJunaidi",
        origin: "Indonesia",
        role: "Computer Science Undergraduate | Future AI Engineer",
        stack: {
            languages: ["Python", "JavaScript", "C", "HTML", "CSS"],
            frameworks: ["React", "TensorFlow", "PyTorch", "Flask"],
            tools: ["VS Code", "Github", "Google Colab"]
        },
        traits: [
            "Proactive",
            "Detail-Oriented",
            "Team Player",
            "Adaptable",
            "Leadership Experience",
            "Eager to Learn",
        ],
        quote:
            "Learning every day, building for tomorrow.",
        };
                            `}
                        </SyntaxHighlight>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};