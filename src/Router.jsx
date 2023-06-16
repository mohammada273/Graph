import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/home";
import Login from './features/login/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}