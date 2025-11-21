import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-6">Corporate Office</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-4">
                  <MapPin className="text-marutiBlue shrink-0" />
                  <p>Maruti Suzuki India Limited,<br/>1, Nelson Mandela Road, Vasant Kunj,<br/>New Delhi - 110070</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-marutiBlue shrink-0" />
                  <p>1800 102 1800 (Toll Free)</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-marutiBlue shrink-0" />
                  <p>contact@maruti.co.in</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 ring-blue-500 outline-none" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 ring-blue-500 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 ring-blue-500 outline-none" />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 ring-blue-500 outline-none"></textarea>
              <button className="w-full bg-marutiBlue text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;