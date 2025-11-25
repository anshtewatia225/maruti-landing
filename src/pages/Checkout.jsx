import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CreditCard, Calendar, Lock, ShieldCheck, ChevronRight, MapPin, User } from 'lucide-react';

const Checkout = () => {
  const selectedCar = useSelector((state) => state.booking.selectedCar);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  
  if (!selectedCar) return <Navigate to="/browse" />;

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
  
    setTimeout(() => {
      alert('Appointment Confirmed! Payment Successful.');
      setLoading(false);
      navigate('/');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900">Confirm Booking</h1>
          <p className="text-gray-500 mt-2 flex items-center justify-center md:justify-start gap-2">
            <Lock size={16} className="text-green-600"/> Secure 256-bit SSL Encrypted Payment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT*/}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              
              <div className="relative h-48 bg-gray-200">
                <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium opacity-80">{selectedCar.type}</p>
                  <h3 className="text-xl font-bold">{selectedCar.name}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Customer</span>
                  <span className="font-semibold text-gray-900">{user?.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Showroom</span>
                  <div className="text-right">
                     <span className="font-semibold text-gray-900 block">Maruti Arena</span>
                     <span className="text-xs text-gray-400 flex items-center justify-end gap-1"><MapPin size={10}/> New Delhi</span>
                  </div>
                </div>
                
                
                <div className="pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500">Booking Fee</p>
                    <p className="text-sm text-green-600 font-medium">Refundable</p>
                  </div>
                  <span className="text-3xl font-bold text-marutiBlue">₹ 1,000</span>
                </div>
              </div>
            </div>

            
            <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck className="text-marutiBlue shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">100% Refund Guarantee</h4>
                <p className="text-blue-700 text-xs mt-1">If you change your mind, cancel anytime 24hrs before the appointment for a full refund.</p>
              </div>
            </div>
          </div>


          {/* RIGHT*/}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Payment Details</h2>

              
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-4">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Name</label>
                    <div className="relative">
                       <input required type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-marutiBlue focus:border-transparent outline-none transition" placeholder={user?.name} />
                       <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <div className="relative">
                       <input required type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-marutiBlue focus:border-transparent outline-none transition" placeholder="0000 0000 0000 0000" />
                       <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <div className="relative">
                         <input required type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-marutiBlue focus:border-transparent outline-none transition" placeholder="MM/YY" />
                         <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <div className="relative">
                         <input required type="password" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-marutiBlue focus:border-transparent outline-none transition" placeholder="123" />
                         <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-500 mt-4 mb-6">
                   By clicking the button below, you agree to our Terms of Service and authorize the charge of ₹ 1,000 to your card.
                </div>

                <button 
                  disabled={loading}
                  className="w-full bg-marutiBlue text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/30 disabled:bg-gray-400 disabled:shadow-none flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">Processing Payment...</span>
                  ) : (
                    <>
                      Pay ₹ 1,000 & Confirm Appointment <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};



export default Checkout;
