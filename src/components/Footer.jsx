import { motion } from 'framer-motion';
import arrow from "../assets/arrow.png";

export const Footer = () => {
    return (
        <motion.footer className="footer" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.6}}>
            <p> &copy; 2025 Kenzie Junaidi. All rights reserved.</p>

            <div className="socials-container">
                <motion.a href="https://github.com/kenziejunaidi" target="_blank">
                    Github  
                    <img src={arrow} alt="link-arrow" width={16} height={16}/>
                </motion.a>

                <motion.a href="https://linkedin.com/in/kenziejunaidi" target="_blank">
                    LinkedIn 
                    <img src={arrow} alt="link-arrow" width={16} height={16}/>
                </motion.a>

                <motion.a href="https://instagram.com/kenziejunaidi" target="_blank">
                    Instagram 
                    <img src={arrow} alt="link-arrow" width={16} height={16}/>
                </motion.a>
            </div>
        </motion.footer>
    );
}