import React, { useState } from 'react';
import { 
  User, Leaf, Sparkles, MapPin, Phone, Mail, Clock, 
  ChevronUp, Diamond, HeartHandshake, Sprout, Flower2, 
  MessageCircle, Image as ImageIcon
} from 'lucide-react';

/* --- Custom Social Icons --- */
const Facebook = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const Twitter = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const SPA_BG_IMAGE = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsProfileDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col justify-between relative">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-[#C59B27] py-3 px-8 flex justify-between items-center text-white shadow-md">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <img src="/logo192.png" alt="Eva Spa Logo" className="w-10 h-10 object-contain bg-white rounded-md p-1" />
          <span className="text-2xl font-semibold tracking-wide">Eva Spa</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          <button 
            onClick={() => navigateTo('home')} 
            className={`hover:text-amber-100 transition ${currentPage === 'home' ? 'border-b-2 border-white pb-1 font-bold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('services')} 
            className={`hover:text-amber-100 transition ${currentPage === 'services' ? 'border-b-2 border-white pb-1 font-bold' : ''}`}
          >
            Services
          </button>
          <button 
            onClick={() => navigateTo('about')} 
            className={`hover:text-amber-100 transition ${currentPage === 'about' ? 'border-b-2 border-white pb-1 font-bold' : ''}`}
          >
            About Us
          </button>
          <button 
            onClick={() => navigateTo('gallery')} 
            className={`hover:text-amber-100 transition ${currentPage === 'gallery' ? 'border-b-2 border-white pb-1 font-bold' : ''}`}
          >
            Gallery
          </button>
          <button 
            onClick={() => navigateTo('contact')} 
            className={`hover:text-amber-100 transition ${currentPage === 'contact' ? 'border-b-2 border-white pb-1 font-bold' : ''}`}
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4 relative">
          <button 
            onClick={() => navigateTo('booking')}
            className="bg-[#DFA724] hover:bg-yellow-500 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm transition transform active:scale-95"
          >
            Book Now
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="w-10 h-10 bg-[#8C4A38] rounded-full flex items-center justify-center hover:opacity-90 transition text-white shadow"
            >
              <User size={22} />
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-2xl py-3 border border-gray-100 z-50">
                <button 
                  onClick={() => navigateTo('login')}
                  className="w-full text-left px-5 py-2.5 text-[#8C4A38] hover:bg-amber-50 font-medium text-lg transition"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigateTo('register')}
                  className="w-full text-left px-5 py-2.5 text-[#8C4A38] hover:bg-amber-50 font-medium text-lg transition"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* DYNAMIC PAGES */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'services' && <ServicesPage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
        {currentPage === 'register' && <RegisterPage navigateTo={navigateTo} />}
        {currentPage === 'booking' && <BookingPage />}
      </main>

      {/* FOOTER */}
      <Footer navigateTo={navigateTo} />

      {/* FLOATING BUTTONS */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 bg-[#A0522D] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-900 transition z-40"
      >
        <ChevronUp size={24} />
      </button>

      <a 
        href="https://wa.me/250798735058" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition z-40"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

/* ==================== HOME PAGE ==================== */
const HomePage = ({ navigateTo }) => (
  <div>
    {/* HERO SECTION */}
    <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/EVA_SPA_VIDEO_wyxhhr.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">Eva Wellness Spa</h1>
        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">Where wellness meets luxury</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigateTo('booking')} className="bg-white text-black px-8 py-3.5 font-bold tracking-wider hover:bg-gray-100 transition shadow-lg">
            BOOK NOW
          </button>
          <button onClick={() => navigateTo('services')} className="border border-white text-white px-8 py-3.5 font-bold tracking-wider hover:bg-white hover:text-black transition">
            SERVICES
          </button>
        </div>
      </div>
    </header>

    {/* 3 FEATURES SECTION */}
    <section className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-stone-900 text-[#C59B27] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <User size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Expert Care</h3>
          <p className="text-gray-500 leading-relaxed">
            Professional therapists with years of experience in wellness and beauty treatments.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-stone-900 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Leaf size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Natural Products</h3>
          <p className="text-gray-500 leading-relaxed">
            Premium organic products sourced from nature for your skin and body care.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-stone-900 text-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Sparkles size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Luxury Experience</h3>
          <p className="text-gray-500 leading-relaxed">
            Immerse yourself in our tranquil environment designed for complete relaxation.
          </p>
        </div>
      </div>
    </section>

    {/* OUR SERVICES PREVIEW SECTION */}
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-3">Our Services</h2>
        <p className="text-gray-500 text-lg">Discover our range of wellness treatments</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Service Card 1 */}
          <div className="flex flex-col">
            <div className="h-64 rounded-2xl overflow-hidden shadow-md mb-4 bg-gray-200">
              <img 
                src="/gallery3.png" 
                alt="Hot Stone Massage" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Hot Stone Massage</h3>
            <p className="text-gray-500 text-sm">Therapeutic massage with heated stones</p>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col">
            <div className="h-64 rounded-2xl overflow-hidden shadow-md mb-4 bg-gray-200">
              <img 
                src="/gallery4.png" 
                alt="Couples Massage" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Couples Massage</h3>
            <p className="text-gray-500 text-sm">Relaxing massage experience for two</p>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col">
            <div className="h-64 rounded-2xl overflow-hidden shadow-md mb-4 bg-gray-200">
              <img 
                src="/gallery5.png" 
                alt="Sport Massage" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Sport Massage</h3>
            <p className="text-gray-500 text-sm">Massage to relieve muscle tension and improve performance</p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => navigateTo('services')}
            className="bg-[#1E293B] hover:bg-slate-900 text-white font-semibold px-8 py-3.5 tracking-wider text-sm transition rounded-sm shadow-md"
          >
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>

    {/* READY TO UNWIND CTA BANNER */}
    <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/gallery1.webp')` }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Ready to Unwind?</h2>
        <p className="text-xl text-gray-200 mb-8 font-light">Book your wellness journey today</p>
        <button 
          onClick={() => navigateTo('booking')}
          className="bg-white text-gray-900 font-semibold px-8 py-3.5 tracking-wider text-sm hover:bg-gray-100 transition shadow-lg rounded-sm"
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </section>
  </div>
);

/* ==================== SERVICES PAGE ==================== */
const ServicesPage = ({ navigateTo }) => (
  <div className="py-16 bg-white">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-medium text-gray-800 mb-3">Our Services</h2>
      <p className="text-gray-500 text-lg">Discover our full range of wellness treatments</p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-16">
      {[
        { title: 'Hot Stone Massage', desc: 'Therapeutic massage with heated stones' },
        { title: 'Couples Massage', desc: 'Relaxing massage experience for two' },
        { title: 'Sport Massage', desc: 'Massage to relieve muscle tension and improve performance' }
      ].map((service, idx) => (
        <div key={idx} className="group cursor-pointer border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
          <div className="overflow-hidden rounded-xl mb-4 h-64 bg-gray-100 flex items-center justify-center">
            <ImageIcon size={48} className="text-gray-400 group-hover:scale-110 transition duration-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="text-gray-500 mt-2">{service.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">All Treatments</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {[
          'AROMATHERAPY', 'FULL BODY BLISS', 'HOT STONE MASSAGE',
          'SIGNATURE LUX CEREMONY', 'DE-STRESS BACK', 'LEG REVIVER',
          'THERAPEUTIC PAIN RELIEF', 'COUPLES MASSAGE', 'PRE-NATAL MASSAGE'
        ].map((item, idx) => (
          <div key={idx} className="border border-[#C59B27] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-amber-50 transition group cursor-pointer">
            <Flower2 size={36} className="text-[#C59B27] mb-3 group-hover:scale-110 transition" />
            <span className="text-base font-semibold text-[#C59B27]">{item}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button onClick={() => navigateTo('booking')} className="bg-[#C59B27] text-white px-10 py-4 font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
          BOOK A TREATMENT
        </button>
      </div>
    </div>
  </div>
);

/* ==================== ABOUT PAGE ==================== */
const AboutPage = () => (
  <div className="relative py-20 bg-gray-800 min-h-[80vh]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center text-white mb-16">
        <h2 className="text-5xl font-semibold mb-4">About Eva Spa</h2>
        <p className="text-xl font-light">Your sanctuary for wellness, relaxation, and rejuvenation in the heart of Kigali</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded with a passion for wellness and beauty, Eva Spa has been serving our community with dedication and excellence. We believe that self-care is not a luxury, but a necessity for maintaining balance in today's fast-paced world.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team of certified professionals is dedicated to providing you with personalized treatments that address your unique needs and help you achieve your wellness goals.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-10 shadow-xl flex flex-col items-center justify-center text-center">
          <Leaf size={64} className="text-green-500 mb-6" />
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Natural & Organic</h3>
          <p className="text-gray-600 leading-relaxed">
            We use only the finest natural and organic products to ensure your skin receives the purest care possible, promoting both beauty and wellness.
          </p>
        </div>
      </div>

      <div className="text-center mb-10">
        <h3 className="text-4xl text-white font-semibold">Our Values</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Diamond size={32} className="text-blue-500" />, title: 'Excellence', desc: 'We strive for perfection in every treatment and service we provide.' },
          { icon: <HeartHandshake size={32} className="text-yellow-600" />, title: 'Care', desc: 'Your comfort and well-being are our top priorities always.' },
          { icon: <Sprout size={32} className="text-green-500" />, title: 'Sustainability', desc: 'We are committed to eco-friendly practices and products.' },
          { icon: <Sparkles size={32} className="text-yellow-400" />, title: 'Innovation', desc: 'We continuously update our techniques and treatments.' }
        ].map((value, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ==================== GALLERY PAGE ==================== */
const GalleryPage = () => {
  const galleryImages = ['/gallery1.webp', '/gallery2.webp', '/gallery3.png', '/gallery4.png', '/gallery5.png'];

  return (
    <div className="py-20 bg-[#E8EEFF] min-h-[80vh]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-medium text-gray-800 mb-4">Gallery</h2>
        <p className="text-gray-600 text-lg">Discover the serene beauty of our spa</p>
      </div>

      <div className="max-w-5xl mx-auto flex justify-center items-center py-10">
        <div className="grid grid-cols-3 gap-6 transform rotate-45 scale-75 md:scale-100">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="w-44 h-44 overflow-hidden rounded-xl shadow-xl bg-white border-4 border-white">
              <img src={src} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover transform -rotate-45 scale-150" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==================== CONTACT PAGE ==================== */
const ContactPage = () => (
  <div className="relative py-20 bg-slate-900 text-white min-h-[80vh]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold mb-4">Contact Eva Spa</h2>
        <p className="text-xl font-light text-gray-300">We'd love to hear from you. Get in touch with us for bookings or questions.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5 bg-white text-gray-800 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 mb-2">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full border border-amber-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full border border-amber-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-2">Message</label>
              <textarea rows="4" placeholder="Your message here..." className="w-full border border-amber-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            </div>
            <button type="button" className="w-full bg-[#C59B27] text-white font-bold py-4 rounded-lg hover:bg-yellow-600 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="lg:w-2/5 bg-[#C59B27] rounded-3xl p-10 shadow-2xl text-white">
          <h3 className="text-2xl font-bold mb-10">Visit Our Spa</h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin size={28} className="flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Location</h4>
                <p className="text-white/90">Nyamirambo, KN 169 st N 48<br/>Kigali, Rwanda</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={28} className="flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Phone</h4>
                <p className="text-white/90">+250 798 735 058</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={28} className="flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <p className="text-white/90">info@evawellnessspa.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ==================== LOGIN PAGE ==================== */
const LoginPage = ({ navigateTo }) => (
  <div 
    className="min-h-[85vh] bg-cover bg-center relative flex items-center px-6 md:px-20 py-12"
    style={{ backgroundImage: `url(${SPA_BG_IMAGE})` }}
  >
    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
      <button 
        onClick={() => navigateTo('home')}
        className="text-gray-500 hover:text-black text-sm flex items-center gap-2 mb-6"
      >
        ← Back to Home
      </button>

      <h2 className="text-3xl font-medium text-gray-900 mb-8">Welcome back</h2>

      <form className="space-y-6">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Email</label>
          <input 
            type="email" 
            defaultValue="john.doe@gmail.com" 
            className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none bg-transparent text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Password</label>
          <input 
            type="password" 
            defaultValue="............" 
            className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none bg-transparent text-gray-800"
          />
        </div>

        <button 
          type="button" 
          onClick={() => navigateTo('home')}
          className="w-full bg-[#1F2937] text-white py-3.5 font-semibold tracking-wider text-sm hover:bg-black transition rounded-sm mt-4"
        >
          LOGIN
        </button>
      </form>

      <p className="text-xs text-center text-gray-500 mt-8">
        Don't have an account? {' '}
        <span onClick={() => navigateTo('register')} className="text-black font-semibold underline cursor-pointer">
          Sign up
        </span>
      </p>
    </div>
  </div>
);

/* ==================== REGISTER PAGE ==================== */
const RegisterPage = ({ navigateTo }) => (
  <div 
    className="min-h-[85vh] bg-cover bg-center relative flex items-center px-6 md:px-20 py-12"
    style={{ backgroundImage: `url(${SPA_BG_IMAGE})` }}
  >
    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
      <button 
        onClick={() => navigateTo('home')}
        className="text-gray-500 hover:text-black text-sm flex items-center gap-2 mb-6"
      >
        ← Back to Home
      </button>

      <h2 className="text-3xl font-medium text-gray-900 mb-8">Create account</h2>

      <form className="space-y-5">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Full Name</label>
          <input 
            type="text" 
            defaultValue="John Doe" 
            className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none bg-transparent text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Email</label>
          <input 
            type="email" 
            defaultValue="john.doe@gmail.com" 
            className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none bg-transparent text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Phone</label>
          <input 
            type="tel" 
            defaultValue="+1 (555) 123-4567" 
            className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none bg-transparent text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Password</label>
          <input 
            type="password" 
            defaultValue="............" 
            className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none bg-transparent text-gray-800"
          />
        </div>

        <button 
          type="button" 
          onClick={() => navigateTo('home')}
          className="w-full bg-[#1F2937] text-white py-3.5 font-semibold tracking-wider text-sm hover:bg-black transition rounded-sm mt-4"
        >
          SIGN UP
        </button>
      </form>
    </div>
  </div>
);

/* ==================== BOOKING PAGE ==================== */
const BookingPage = () => (
  <div 
    className="min-h-[90vh] bg-cover bg-center relative py-16 px-4 flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${SPA_BG_IMAGE})` }}
  >
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="relative z-10 text-center text-white mb-8">
      <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-3">Book Your Spa Experience</h1>
      <p className="text-lg text-gray-200">Fill out the form below to book your appointment</p>
    </div>

    <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Services</label>
          <select className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50">
            <option>Choose services...</option>
            <option>Hot Stone Massage</option>
            <option>Couples Massage</option>
            <option>Aromatherapy</option>
            <option>Full Body Bliss</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
            <input 
              type="date" 
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
            <input 
              type="time" 
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input 
              type="text" 
              placeholder="Enter your first name" 
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input 
              type="text" 
              placeholder="Enter your last name" 
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes (Optional)</label>
          <textarea 
            rows="3" 
            placeholder="Any special requests, allergies, or preferences..." 
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
          ></textarea>
        </div>

        <button 
          type="button" 
          onClick={() => alert("Booking submitted successfully!")}
          className="w-full bg-[#7C8895] hover:bg-slate-700 text-white font-medium py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2"
        >
          <span>✨</span> Book Now
        </button>
      </form>
    </div>
  </div>
);

/* ==================== FOOTER ==================== */
const Footer = ({ navigateTo }) => (
  <footer className="bg-[#C59B27] text-white pt-16 pb-8 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/20 pb-12">
      <div>
        <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => navigateTo('home')}>
          <img src="/logo192.png" alt="Eva Spa Logo" className="w-10 h-10 object-contain bg-white rounded-md p-1" />
          <span className="text-2xl font-semibold tracking-wide">Eva Spa</span>
        </div>
        <p className="text-white/90 leading-relaxed mb-6">
          Experience World class wellness treatments designed to rejuvenate your body, mind, and spirit.
        </p>
        <div className="flex gap-4">
          <Facebook className="cursor-pointer hover:opacity-80 transition w-6 h-6" />
          <Instagram className="cursor-pointer hover:opacity-80 transition w-6 h-6" />
          <Twitter className="cursor-pointer hover:opacity-80 transition w-6 h-6" />
        </div>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-white/90 font-medium">
          <li><button onClick={() => navigateTo('home')} className="hover:underline">Home</button></li>
          <li><button onClick={() => navigateTo('services')} className="hover:underline">Services</button></li>
          <li><button onClick={() => navigateTo('about')} className="hover:underline">About Us</button></li>
          <li><button onClick={() => navigateTo('gallery')} className="hover:underline">Gallery</button></li>
          <li><button onClick={() => navigateTo('contact')} className="hover:underline">Contact</button></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
        <ul className="space-y-4 text-white/90">
          <li className="flex items-start gap-3"><MapPin size={20} className="mt-1 flex-shrink-0" /> Nyamirambo KN 169 st N 48, Kigali</li>
          <li className="flex items-center gap-3"><Phone size={20} className="flex-shrink-0" /> +250 798 735 058</li>
          <li className="flex items-center gap-3"><Mail size={20} className="flex-shrink-0" /> info@evawellnessspa.com</li>
          <li className="flex items-center gap-3"><Clock size={20} className="flex-shrink-0" /> Mon-Sun: 9AM - 10PM</li>
        </ul>
      </div>
    </div>
    
    <div className="text-center text-white/90 text-sm">
      <p>© 2026 Eva Spa. All rights reserved. || Powered by SANTECH</p>
    </div>
  </footer>
);