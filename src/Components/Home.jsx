import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Button from "./Button";

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 1 },
	},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

const Home = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="home container"
			exit="exit">
			<motion.h2
				initial={{ y: -900 }}
				animate={{
					fontSize: 50,
					color: "#ff2994",
					y: 0,
				}}
				transition={{ type: "spring", stiffness: 120 }}>
				Welcome to Pizza Joint
			</motion.h2>
			<Link to="/base">
				<Button text="Create Your Pizza" />
			</Link>
			<Loader />
		</motion.div>
	);
};

export default Home;
