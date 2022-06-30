
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Base from "./Components/Base";
import Toppings from "./Components/Toppings";
import Order from "./Components/Order";
import Modal from "./Components/Modal";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
	const location = useLocation();
	const [showModal, setShowModal] = useState(false);
	const [pizza, setPizza] = useState({ base: "", toppings: [] });

	const addBase = (base) => {
		setPizza({ ...pizza, base });
	};

	const addTopping = (topping) => {
		let newToppings;
		if (!pizza.toppings.includes(topping)) {
			newToppings = [...pizza.toppings, topping];
		} else {
			newToppings = pizza.toppings.filter((item) => item !== topping);
		}
		setPizza({ ...pizza, toppings: newToppings });
	};

	return (
		<>
			<Header />
			<AnimatePresence
				exitBeforeEnter
				onExitComplete={() => {
					setShowModal(false);
				}}>
				<Routes location={location} key={location.key}>
					<Route
						path="/base"
						element={<Base addBase={addBase} pizza={pizza} />}
					/>
					<Route
						path="/toppings"
						element={<Toppings addTopping={addTopping} pizza={pizza} />}
					/>
					<Route
						path="/order"
						element={
							<Order
								pizza={pizza}
								setShowModal={setShowModal}
								showModal={showModal}
							/>
						}
					/>
					<Route path="/" element={<Home />} />
				</Routes>
			</AnimatePresence>
			<Modal showModal={showModal} setShowModal={setShowModal} />
		</>
	);
}

export default App;


