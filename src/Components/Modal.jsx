import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

const modalVariants = {
	visible: {
		y: "200px",
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
	hidden: {
		y: -1000,
		opacity: 0,
	},
};

const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className="backdrop"
					variants={backdropVariants}
					animate="visible"
					initial="hidden"
					exit="hidden">
					<motion.div variants={modalVariants} className="modal">
						<p>Want to make another Pizza !?</p>
						<Link to="/">
							<button>Start Again</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
