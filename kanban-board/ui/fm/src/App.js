import { Route, Routes } from "react-router-dom";
import Comments from "./components/Comments";
import Task from "./components/Task";
import Login from "./components/Login";
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar from './components/Navbar';
import './Styles.css'
function App() {
	return (
		<div>
			<Navbar/>
			<Routes>
				
				<Route path='/' element={<Login />} />
				<Route path="about" element={<AboutUs/>} />
       			 <Route path="register" element={<Register />} />
       			 <Route path="privacy" element={<PrivacyPolicy />} />
				<Route path='/task' element={<Task />} />
				<Route path='/comments/:category/:id' element={<Comments />} />
			</Routes>
		</div>
	);
}

export default App;