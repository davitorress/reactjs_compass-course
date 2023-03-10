import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth";

function App() {
	const authCtx = useContext(AuthContext);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
				<Route path="/profile" element={authCtx.isLoggedIn ? <UserProfile /> : <Navigate to="/auth" />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Layout>
	);
}

export default App;
