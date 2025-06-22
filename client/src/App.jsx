import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./components/EditProduct";
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0f172a] text-white">
        <nav className="w-full glass shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 bg-clip-text glow">MARKET PLACE</h1>
            <div className="flex items-center gap-6">
              <Link to="/" className="hover:underline hover:text-lime-400">Home</Link>
              <Link to="/add" className="hover:underline hover:text-lime-400">Add Product</Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 flex justify-center items-center min-h-screen px-4 pb-10">
          <div className="w-full max-w-6xl fade-scale">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
