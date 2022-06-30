import React, { useState } from "react";
import { motion } from "framer-motion";
import { Refresh } from "./Refresh";

import "./App.css";

const animation = {
	rest: { scale: 1, rotate: 0, borderRadius: "20%" },
	// hover: {
	// 	scale: 1,
	// 	transition: {
	// 		duration: 0.5,
	// 		ease: "easeInOut",
	// 	},
	// },
	pressed: {
		scale: [2, 2, 1, 1],
		rotate: [0, 270, 270, 0],
		borderRadius: ["20%", "50%", "50%", "20%"],
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};

const App = () => {
	const [count, setCount] = useState(0);
	console.log(count);
	return (
		<>
			<Refresh onClick={() => setCount((prevCnt) => prevCnt + 1)} />
			<div className="example-container">
				<motion.div
					animate={{ scale: 2 }}
					initial="rest"
					whileHover="hover"
					onTap="pressed"
					variants={animation}
				/>
			</div>
		</>
	);
};

export default App;
