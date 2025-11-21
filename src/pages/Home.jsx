import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-50">
      <div className="relative h-[600px] bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920')] bg-cover bg-center opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            DRIVE THE <br /> <span className="text-blue-500">FUTURE</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0">
            Experience the perfect blend of performance, safety, and elegance. 
            Book your test drive today with Maruti Suzuki.
          </p>
          <Link to="/browse" className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            Explore Cars <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;