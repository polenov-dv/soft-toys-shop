import { Routes, Route } from "react-router-dom";
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import MainLayout from "layouts/MainLayout";
import { Cart } from 'pages/Cart';
import { FullWare } from 'pages/FullWare';
import { Suspense } from "react";
import { Loader } from "components/Loader";
import { Sign } from 'pages/Sign';
import { About } from 'pages/About';

export const AppRouter = () => {

	return (
		<Suspense fallback={<Loader />}>
			<Routes >
				<Route path="/" element={<MainLayout />}>
					<Route path="" element={<Home />} />
					<Route path="cart" element={<Cart />} />
					<Route path="/ware/:id" element={<FullWare />} />
					<Route path="about" element={<About />} />
					<Route path="login" element={<Sign />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
};