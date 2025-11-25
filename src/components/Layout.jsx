import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Car, User, LogOut, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useState } from 'react';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2 text-marutiBlue font-bold text-xl tracking-tighter">
           <Car className="text-marutiBlue" /> MARUTI SUZUKI
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-gray-600 items-center">
          <Link to="/" className="hover:text-marutiBlue transition">Home</Link>
          <Link to="/browse" className="hover:text-marutiBlue transition">Browse Cars</Link>
          <Link to="/about" className="hover:text-marutiBlue transition">About Us</Link>
          <Link to="/contact" className="hover:text-marutiBlue transition">Contact</Link>
          
          {user ? (
            <div className="flex items-center gap-4 border-l pl-4 border-gray-300">
              
              <button onClick={handleLogout} className="text-red-500 flex items-center gap-1 text-sm hover:bg-red-50 px-3 py-1 rounded-full transition">
                <LogOut size={16}/> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-marutiBlue text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-800 transition text-sm font-bold">
              <User size={16}/> Login
            </Link>
          )}
        </div>
      </div>

      
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Car/> Maruti Suzuki</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Joy of Mobility. Creating masterpieces for Indian roads since 1981. 
          We are committed to a greener, safer, and more sustainable future.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 text-blue-400">Corporate</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
          <li><a href="#" className="hover:text-white transition">Investors</a></li>
          <li><a href="#" className="hover:text-white transition">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 text-blue-400">Our Brands</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link to="/browse" className="hover:text-white transition">Arena</Link></li>
          <li><Link to="/browse" className="hover:text-white transition">NEXA</Link></li>
          <li><a href="#" className="hover:text-white transition">True Value</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 text-blue-400">Reach Us</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="mt-1 flex-shrink-0" />
            <span>Old Palam Road,Udyog Vihar, Gurugram</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} />
            <span>1800 102 1800</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} />
            <span>contact@maruti.co.in</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
      © 2024 Maruti Suzuki India Limited. All Rights Reserved.
    </div>
  </footer>
);

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;