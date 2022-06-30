import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			damping: 8,
			when: "beforeChildren",
			staggerChildren: 0.5,
		},
	},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		// transition: { type: "spring", delay: 2 },
	},
};

const Order = ({ pizza, setShowModal, showModal }) => {
	useEffect(() => {
		setTimeout(() => {
			setShowModal(true);
		}, 5000);
	}, [setShowModal]);

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="container order"
			exit="exit">
			<h2>Thank you for your order :)</h2>

			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;
