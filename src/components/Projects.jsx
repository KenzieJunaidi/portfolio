import { motion } from "framer-motion";

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
    return (
        <motion.section id="projects" className="projects" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.6}}>
            <motion.h2 className="section-title" variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                My Projects
            </motion.h2>
            <motion.div className="project-grid" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true}}>
                <motion.div className="project-card" variants={FadeInUp} whileHover={{y: -10, transition: {duration: 0.2}}}>
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
                </motion.div>
            </motion.div>
        </motion.section>
    );
}