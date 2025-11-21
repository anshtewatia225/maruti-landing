import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { loginSuccess } from '../features/authSlice';
import { Car, ArrowRight, Github, Chrome } from 'lucide-react';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    // Simulate API
    const mockUser = {
      name: "Maruti Customer",
      email: data.email,
      token: "abc-123-xyz"
    };
    dispatch(loginSuccess(mockUser));
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex w-full">
      
      {/* Left Side - Aesthetic Image & Brand Message */}
      <div className="hidden lg:flex w-1/2 relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1920')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-between p-16 w-full text-white">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
             <Car className="text-blue-500" /> MARUTI SUZUKI
          </Link>
          
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              The Journey <br/> Begins Here.
            </h1>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Log in to book test drives, manage your service history, and explore the future of mobility tailored just for you.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Clean Modern Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 md:p-16">
        <div className="max-w-md w-full space-y-8">
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-marutiBlue focus:border-transparent transition duration-200 outline-none"
                  placeholder="name@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                   <label className="block text-sm font-medium text-gray-700">Password</label>
                   <a href="#" className="text-xs font-bold text-marutiBlue hover:underline">Forgot password?</a>
                </div>
                <input 
                  type="password"
                  {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 chars" } })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-marutiBlue focus:border-transparent transition duration-200 outline-none"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password.message}</p>}
              </div>
            </div>

            <button type="submit" className="w-full bg-gray-900 hover:bg-marutiBlue text-white py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 transform hover:shadow-lg flex items-center justify-center gap-2 group">
              Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700">
                 <Chrome size={18} /> Google
               </button>
               <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700">
                 <Github size={18} /> Github
               </button>
            </div>

          </form>
          
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account? <a href="#" className="font-bold text-marutiBlue hover:underline">Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;