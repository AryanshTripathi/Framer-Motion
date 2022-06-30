import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
	animation1: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 0.5,
			},
			y: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 0.25,
				ease: "easeOut",
			},
		},
	},

	animation2: {
		x: 0,
		y: [0, -40],
		transition: {
			y: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 0.25,
				ease: "easeOut",
			},
		},
	},
};

const Loader = () => {
	const [animation, cycleAnimation] = useCycle("animation1", "animation2");
	return (
		<>
			<motion.div
				className="loader"
				variants={loaderVariants}
				animate={animation}></motion.div>
			<div className="floor"></div>

			<div className="loader-btn" onClick={() => cycleAnimation()}>
				Cycle Loader
			</div>
		</>
	);
};

export default Loader;
