import React from "react";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", delay: 0.25 },
	},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

const nextVariants = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: { type: "spring", delay: 0.1 },
	},
};

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			// transition={{ type: "spring", delay: 0.5 }}
			className="base container">
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							whileHover={{
								originX: 0,
								scale: 1.3,
								color: "#f8e112",
							}}
							transition={{
								type: "spring",
								stiffness: 300,
							}}
							key={base}
							onClick={() => addBase(base)}>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div
					// initial="hidden"
					// animate="visible"
					variants={nextVariants}
					className="next">
					<Link to="/toppings">
						<Button text="Next" />
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
