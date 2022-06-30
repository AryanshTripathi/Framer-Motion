import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: "2px 2px 15px peru",
		boxShadow: "2px 2px 15px peru",
		transition: {
			repeat: Infinity,
			repeatType: "reverse",
			repeatdelay: 0.5,
		},
	},
};

const Button = ({ text }) => {
	return (
		<motion.button variants={buttonVariants} whileHover="hover">
			{text}
		</motion.button>
	);
};

export default Button;
