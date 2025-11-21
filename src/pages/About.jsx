const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Building a Nation on the Move</h1>
        <p className="text-xl text-blue-400 max-w-2xl mx-auto">Since 1981, we have been the heartbeat of Indian roads.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000" alt="Factory" className="rounded-2xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Maruti Suzuki India Limited is India's largest passenger car manufacturer. 
              For over four decades, we have revolutionized the Indian automobile industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From the iconic Maruti 800 to the advanced Grand Vitara Hybrid, our journey has been driven by a commitment 
              to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-marutiBlue mb-2">40+</h3>
            <p className="font-bold text-gray-800">Years of Trust</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-marutiBlue mb-2">25M+</h3>
            <p className="font-bold text-gray-800">Cars Sold</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-marutiBlue mb-2">4000+</h3>
            <p className="font-bold text-gray-800">Service Centers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;