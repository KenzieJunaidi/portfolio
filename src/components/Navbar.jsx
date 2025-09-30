import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const FadeInUp = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6},
};

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Navbar = () => {
    return (
        <motion.nav className="navbar" initial={{y: -100}} animate={{y: 0}} transition={{duration: 0.6, ease: "easeOut"}}>
            {/* <motion.div className="title">
                Portfolio
            </motion.div> */}

            <motion.ul className="nav-links" variants={staggerContainer} initial="initial" animate="animate">                
                <motion.li variants={FadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/#landing">Home</Link>
                    </motion.li>
                <motion.li variants={FadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/#projects">Projects</Link>
                </motion.li>
                <motion.li variants={FadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/#contact">Contact</Link>
                </motion.li>
                <motion.li variants={FadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/profile">Profile</Link>
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
};