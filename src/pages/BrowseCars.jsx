import { CARS } from '../data/cars';
import { useDispatch } from 'react-redux';
import { selectCar } from '../features/bookingSlice';
import { useNavigate } from 'react-router-dom';

const BrowseCars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBook = (car) => {
    dispatch(selectCar(car));
    navigate('/checkout');
  };

  return (
    <div className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Premium Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="h-56 bg-gray-200 relative">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {car.type}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                <p className="text-gray-500 text-sm mt-2 flex-grow">{car.desc}</p>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-blue-600">{car.price}</span>
                  <button 
                    onClick={() => handleBook(car)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCars;