import { motion } from 'framer-motion'
import { useEffect } from 'react';

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

export const Profile = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);

    return (
        <motion.section id="profile" className="profile" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.2}}>
            <motion.div className="header-container" style={{ marginTop: '10rem' }} variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                <h5 className="section-title-header">ABOUT MY JOURNEY</h5>
            </motion.div>
            <motion.h2 className="section-title" variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                My Profile
            </motion.h2>

            <motion.div className="about-container">
                <div className="about-box image-box">
                    <div className="photo">

                    </div>
                </div>
                <div className="about-box summary-box">
                    <p>I’m a 3rd-year Computer Science student at BINUS University with leadership experience in student organizations and hands-on practice as a part-time Sales Manager. <span style={{ fontWeight: '700', color: 'var(--accent-color)' }}>Skilled in AI and Data Analytics</span>, I’ve delivered personal projects and coordinated internal fundraising initiatives. Proactive, detail-oriented, and team-focused, I’m eager to apply my skills to real-world projects and collaborative challenges.</p>
                    <motion.a href="https://drive.google.com/file/d/1czGVHIKYc59m_BAlE39uGWeSe9Y7xGqi/view?usp=sharing" target="_blank" className="cv-button" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Download CV</motion.a>
                </div>
            </motion.div>

            <motion.div className="skill-container">
                <motion.div className="skill-card">
                    <div className="skill-icon" style={{ backgroundColor: 'var(--green-fade)' }}>
                        <i class="fas fa-brain" style={{ color: 'var(--green)' }}></i>
                    </div>

                    <h5>Machine Learning</h5>

                    <div className="stack-container">
                        <div className="stack">Tensorflow</div>
                        <div className="stack">Keras</div>
                        <div className="stack">PyTorch</div>
                        <div className="stack">Scikit-learn</div>
                    </div>
                </motion.div>
                <motion.div className="skill-card">
                    <div className="skill-icon" style={{ backgroundColor: 'var(--blue-fade)' }}>
                        <i class="fas fa-chart-line" style={{ color: 'var(--blue)' }}></i>
                    </div>

                    <h5>Data Analytics</h5>

                    <div className="stack-container">
                        <div className="stack">Pandas</div>
                        <div className="stack">Numpy</div>
                        <div className="stack">Matplotlib</div>
                        <div className="stack">Seaborn</div>
                    </div>
                </motion.div>
                <motion.div className="skill-card">
                    <div className="skill-icon" style={{ backgroundColor: 'var(--green-fade)' }}>
                        <i class="fas fa-code" style={{ color: 'var(--green)' }}></i>
                    </div>

                    <h5>Programming</h5>

                    <div className="stack-container">
                        <div className="stack">Python</div>
                        <div className="stack">Javascript</div>
                        <div className="stack">React</div>
                        <div className="stack">Flask</div>
                    </div>
                </motion.div>
                <motion.div className="skill-card">
                    <div className="skill-icon" style={{ backgroundColor: 'var(--blue-fade)' }}>
                        <i class="fas fa-cogs" style={{ color: 'var(--blue)' }}></i>
                    </div>

                    <h5>Tools & Platforms</h5>

                    <div className="stack-container">
                        <div className="stack">Git</div>
                        <div className="stack">Google Colab</div>
                        <div className="stack">Firebase</div>
                        <div className="stack">Figma</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* <motion.div className="header-container" style={{ marginTop: '6rem' }} variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                <h5 className="section-title-header">PROFESSIONAL & ORGANIZATIONAL</h5>
            </motion.div>
            <motion.h2 className="section-title" variants={FadeInUp} initial="initial" whileInView="animate" viewport={{once: true}}>
                My Experiences
            </motion.h2>

            <motion.div className="experience-container">
                <motion.div className="exp">
                    <motion.div className="exp-header">
                        <div>
                            <h3>Sales Manager</h3>
                            <h5 style={{ fontWeight: '700' }}>Mulai · <span style={{ fontWeight: '500' }}>Mar 2025 - Present</span></h5>
                        </div>
                    </motion.div>

                    <motion.div className="exp-content">
                        <ul className="exp-list">
                            <li>Conducted targeted outreach to over 500 companies via email and LinkedIn, averaging 5 new contacts daily to explore potential partnerships and business opportunities.</li>
                            <li>Compiled and delivered weekly progress reports tracking outreach, responses, and engagement to support strategic planning by the core team.</li>
                            <li>Collaborated with an 8-person team and utilized tools such as Apollo, HubSpot, and Google Sheets to streamline communication and data tracking.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.div> */}

        </motion.section>
    );
}