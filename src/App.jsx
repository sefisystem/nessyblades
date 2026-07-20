import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Scissors,
  Coffee,
  Music,
  Instagram,
  Twitter,
  Facebook,
  Star,
} from 'lucide-react';

export default function NessyBladesApp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    location: '',
  });

  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  const services = [
    {
      id: 'midnight',
      name: 'The Midnight Classic',
      price: 45,
      description: 'A precision tailored haircut with a hot towel finish.',
    },
    {
      id: 'aliyu',
      name: 'The Aliyu Special / VIP Treatment',
      price: 75,
      description:
        'Full haircut, beard sculpting, straight razor lineup, and a relaxing facial massage.',
    },
    {
      id: 'dawn',
      name: 'The Dawn Patrol Beard Trim',
      price: 30,
      description:
        'Perfect for early risers needing a sharp beard shape-up before morning meetings.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarkinmota',
      text: 'Nessy Blades gave me the sharpest cut I\'ve ever had. The precision and attention to detail is unmatched. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Aliyu Mohammad',
      text: 'The VIP treatment is worth every penny. Master Barber Nessy is a true professional. Best barber in the city!',
      rating: 5,
    },
  ];

  const portfolioImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1599351751059-0ef0174fb5d7?ixlib=rb-4.0.3&q=80&w=500',
      title: 'Precision Fade',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1621907742155-70fbb79d4d0e?ixlib=rb-4.0.3&q=80&w=500',
      title: 'Classic Lineup',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1605286372149-d24dbb6b0267?ixlib=rb-4.0.3&q=80&w=500',
      title: 'Beard Sculpting',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1599351751059-0ef0174fb5d7?ixlib=rb-4.0.3&q=80&w=500',
      title: 'Sharp Cut',
    },
  ];

  const timeSlots = [
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
    '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM',
    '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM',
    '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM', '10:00 AM',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'location' && value.trim()) {
      setShowMap(true);
    } else if (name === 'location' && !value.trim()) {
      setShowMap(false);
    }
  };

  const getLocationCoordinates = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setFormData((prev) => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
          }));
          setShowMap(true);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enter it manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(
        'https://script.google.com/macros/d/YOUR_GOOGLE_APPS_SCRIPT_ID/usercopy?u=1',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            service: formData.service,
            date: formData.date,
            time: formData.time,
            location: formData.location,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      setMessage('✅ Reservation booked successfully! Check your email for confirmation.');
      console.log('Booking submitted:', formData);

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        location: '',
      });
      setShowMap(false);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setMessage('✅ Reservation submitted! Our team will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        location: '',
      });
      setShowMap(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-black flex-shrink-0">
                <Scissors size={20} className="text-white" />
              </div>
              <span className="text-sm sm:text-xl font-black text-black truncate">NESSY BLADES</span>
            </div>
            <button
              onClick={() => {
                document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 sm:px-6 py-2 bg-black text-white font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm flex-shrink-0"
            >
              BOOK
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 border-2 border-black opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-black opacity-10 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase leading-tight mb-4 sm:mb-6 tracking-tighter">
            NESSY BLADES:<br />
            <span className="border-b-4 border-black py-1 sm:py-2 inline-block">SHARP CUTS</span><br />
            FOR THE NIGHT SHIFT
          </h1>
          <p className="text-lg sm:text-2xl text-black mb-6 sm:mb-8 font-bold">Your best look, anytime before dawn.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12">
            <Phone className="text-black" size={28} />
            <a href="tel:+15559003275" className="text-xl sm:text-3xl font-black text-black hover:underline transition">
              +1 (555) 900-3275
            </a>
          </div>

          <button
            onClick={() => {
              document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 py-3 sm:py-5 bg-black text-white font-black uppercase text-base sm:text-xl border-2 border-black hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Reserve Your Time
          </button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-black text-white py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-2 border-b-4 border-white pb-3">OUR WORK</h2>
          <p className="text-base sm:text-xl font-bold mb-8">Premium cuts from Master Barber Nessy</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {portfolioImages.map((image) => (
              <div key={image.id} className="bg-white border-2 border-white overflow-hidden hover:border-black transition-all">
                <div className="aspect-square overflow-hidden bg-gray-300">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = '#000';
                    }}
                  />
                </div>
                <p className="p-2 sm:p-4 font-black uppercase text-black text-xs sm:text-sm">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Nessy & The Vibe */}
      <section className="bg-white text-black py-12 sm:py-20 px-4 border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4 sm:mb-8 border-b-4 border-black pb-3">MASTER BARBER NESSY</h2>
            <p className="text-base sm:text-2xl leading-relaxed font-bold">
              Master Barber Nessy operates in the shadows, catering to those who grind while the city sleeps. Specializing in precision fades and classic straight-razor shaves, Nessy Blades has become the go-to exclusive grooming experience for night owls, early risers, and VIPs—including notable clients like Aliyu Mohammad. When the sun goes down, the clippers turn on.
            </p>
          </div>

          <div className="border-t-4 border-black pt-12">
            <h3 className="text-2xl sm:text-4xl font-black uppercase mb-8 border-b-4 border-black pb-3">THE VIBE</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <Coffee className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-black text-black uppercase mb-2 text-sm sm:text-xl">Premium Amenities</p>
                  <p className="text-sm sm:text-lg font-bold">Complimentary black coffee or whiskey with every cut.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <Music className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-black text-black uppercase mb-2 text-sm sm:text-xl">Atmosphere</p>
                  <p className="text-sm sm:text-lg font-bold">Low lo-fi beats, dark leather chairs, and a relaxed, unhurried atmosphere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-2 border-b-4 border-white pb-3">WHAT CLIENTS SAY</h2>
          <p className="text-sm sm:text-xl font-bold mb-8">Real testimonials from satisfied customers</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white text-black border-2 border-white p-6 sm:p-8">
                <div className="mb-4">
                  <p className="font-black text-lg sm:text-xl mb-3">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-black" />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-lg font-bold italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-white py-12 sm:py-20 px-4 scroll-mt-16 border-t-4 border-black">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8 text-center border-b-4 border-black pb-3">BOOK YOUR RESERVATION</h2>

          {message && (
            <div className="mb-6 p-4 sm:p-6 border-2 border-black bg-white">
              <p className="font-black text-sm sm:text-lg text-black">{message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-8 border-4 border-black">
            {/* Personal Details */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                placeholder="your@email.com"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-3">Select Service</label>
              <div className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white border-2 border-black hover:bg-black hover:text-white transition cursor-pointer text-sm sm:text-base"
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={formData.service === service.id}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 mt-1 accent-black flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-black uppercase break-words">{service.name}</p>
                      <p className="text-xs opacity-75 mt-1 font-bold">{service.description}</p>
                      <p className="font-black mt-2">${service.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">Time (9 PM - 10 AM)</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                >
                  <option value="">Choose a time...</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location & Google Maps */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">Your Location</label>
              <div className="flex flex-col sm:flex-row gap-2 mb-3">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="flex-1 bg-white border-2 border-black text-black px-3 py-2 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-xs sm:text-sm"
                  placeholder="Enter your location or address"
                />
                <button
                  type="button"
                  onClick={getLocationCoordinates}
                  className="px-3 py-2 bg-black text-white font-black border-2 border-black hover:bg-white hover:text-black transition text-xs sm:text-sm whitespace-nowrap"
                >
                  📍 MY LOCATION
                </button>
              </div>

              {/* Google Map */}
              {showMap && (
                <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white border-2 border-black p-3 sm:p-4 rounded">
                    <p className="font-black text-black uppercase mb-2 text-xs sm:text-sm">Location Pinned</p>
                    <div className="w-full h-48 sm:h-64 bg-black border-2 border-black rounded flex items-center justify-center">
                      <div className="text-center px-4">
                        <MapPin className="text-white mx-auto mb-2" size={32} />
                        <p className="text-white font-black text-xs break-all">{formData.location}</p>
                        <p className="text-white text-xs mt-2">📍 Mobile barber service available</p>
                        <a
                          href={`https://www.google.com/maps/search/${formData.location}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 px-3 py-2 bg-white text-black font-black text-xs hover:bg-gray-200 transition"
                        >
                          OPEN MAPS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-black uppercase py-3 sm:py-5 text-sm sm:text-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {loading ? '⏳ PROCESSING...' : '✂️ CONFIRM RESERVATION'}
            </button>
          </form>

          <p className="text-center text-black text-xs mt-4 font-bold">Your reservation will be saved. We'll send a confirmation to your email.</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-black text-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8 border-b-4 border-white pb-3">VISIT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <div className="bg-white text-black border-2 border-white p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4">Address</h3>
                <div className="flex gap-3 mb-6">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-base sm:text-lg">124 Midnight Ave</p>
                    <p className="font-black text-base sm:text-lg">Suite B</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/124+Midnight+Ave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-black border-2 border-black hover:bg-white hover:text-black transition inline-block text-xs sm:text-sm"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white text-black border-2 border-white p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4">Contact</h3>
                <div className="flex gap-3 mb-6">
                  <Phone size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-base sm:text-lg">+1 (555) 900-3275</p>
                    <p className="font-bold text-sm">Open 9 PM - 10 AM</p>
                  </div>
                </div>
                <a
                  href="tel:+15559003275"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-black border-2 border-black hover:bg-white hover:text-black transition inline-block text-xs sm:text-sm"
                >
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-white flex-shrink-0">
                  <Scissors size={20} className="text-black" />
                </div>
                <span className="text-sm sm:text-lg font-black text-white">NESSY BLADES</span>
              </div>
              <p className="text-white font-bold text-xs sm:text-sm">Premium barber experience for the night shift.</p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-black uppercase text-white mb-3 border-b-2 border-white pb-2 text-sm">Navigation</h4>
              <ul className="space-y-2 text-white text-xs">
                <li>
                  <a href="#booking" className="hover:underline transition font-bold">
                    Book Reservation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition font-bold">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition font-bold">
                    About Nessy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition font-bold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-black uppercase text-white mb-3 border-b-2 border-white pb-2 flex items-center gap-2 text-sm">
                <MapPin size={16} /> Location
              </h4>
              <p className="text-white text-xs leading-relaxed font-bold">
                124 Midnight Ave<br />Suite B
              </p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-black uppercase text-white mb-3 border-b-2 border-white pb-2 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition border-2 border-white"
                >
                  <Instagram size={16} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition border-2 border-white"
                >
                  <Twitter size={16} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition border-2 border-white"
                >
                  <Facebook size={16} className="text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-white pt-8">
            <p className="text-center text-white text-xs font-bold">© 2024 NESSY BLADES. ALL RIGHTS RESERVED. OPEN 9 PM - 10 AM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
