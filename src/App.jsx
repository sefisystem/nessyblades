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
  ChevronDown,
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
  const [bookingStep, setBookingStep] = useState('details');

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

  const timeSlots = [
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM',
    '12:00 AM',
    '12:30 AM',
    '1:00 AM',
    '1:30 AM',
    '2:00 AM',
    '2:30 AM',
    '3:00 AM',
    '3:30 AM',
    '4:00 AM',
    '4:30 AM',
    '5:00 AM',
    '5:30 AM',
    '6:00 AM',
    '6:30 AM',
    '7:00 AM',
    '7:30 AM',
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert(
      `Reservation booked for ${formData.name} on ${formData.date} at ${formData.time}!`
    );
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
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Scissors size={24} className="text-black" />
              </div>
              <span className="text-xl font-black text-yellow-500">
                NESSY BLADES
              </span>
            </div>
            <button
              onClick={() => {
                document
                  .getElementById('booking')
                  .scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2 bg-yellow-500 text-black font-black uppercase hover:bg-black hover:border-2 hover:border-yellow-500 transition-all duration-300"
            >
              BOOK A RESERVATION
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            NESSY BLADES:{' '}
            <span className="text-yellow-500">SHARP CUTS</span>
            <br />
            FOR THE NIGHT SHIFT
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-8 font-light">
            Your best look, anytime before dawn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Phone className="text-yellow-500" size={32} />
            <a
              href="tel:+15559003275"
              className="text-2xl font-black text-yellow-500 hover:text-yellow-400 transition"
            >
              +1 (555) 900-3275
            </a>
          </div>

          <button
            onClick={() => {
              document
                .getElementById('booking')
                .scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-yellow-500 text-black font-black uppercase text-lg hover:bg-black hover:border-2 hover:border-yellow-500 transition-all duration-300"
          >
            Reserve Your Time
          </button>
        </div>
      </section>

      {/* About Nessy & The Vibe */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-black uppercase mb-8 text-yellow-500">
              MASTER BARBER NESSY
            </h2>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              Master Barber Nessy operates in the shadows, catering to those who
              grind while the city sleeps. Specializing in precision fades and
              classic straight-razor shaves, Nessy Blades has become the go-to
              exclusive grooming experience for night owls, early risers, and
              VIPs—including notable clients like Aliyu Mohammad. When the sun
              goes down, the clippers turn on.
            </p>
          </div>

          <div className="border-t-2 border-yellow-500 pt-12">
            <h3 className="text-3xl sm:text-4xl font-black uppercase mb-8 text-white">
              THE VIBE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Coffee className="text-black" size={28} />
                </div>
                <div>
                  <p className="font-black text-white uppercase mb-2">
                    Premium Amenities
                  </p>
                  <p className="text-gray-300">
                    Complimentary black coffee or whiskey with every cut.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Music className="text-black" size={28} />
                </div>
                <div>
                  <p className="font-black text-white uppercase mb-2">
                    Atmosphere
                  </p>
                  <p className="text-gray-300">
                    Low lo-fi beats, dark leather chairs, and a relaxed,
                    unhurried atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-800 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-yellow-500" size={24} />
                <p className="font-black uppercase text-white">LOCATION</p>
              </div>
              <p className="text-xl text-gray-200 font-light">
                124 Midnight Ave, Suite B
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="bg-black py-20 px-4 scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black uppercase mb-12 text-center text-yellow-500">
            BOOK YOUR RESERVATION
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900 p-8 border-2 border-yellow-500"
          >
            {/* Personal Details */}
            <div>
              <label className="block text-sm font-black uppercase text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-black border-2 border-gray-700 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition uppercase font-semibold"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-black border-2 border-gray-700 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition uppercase font-semibold"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-black border-2 border-gray-700 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition uppercase font-semibold"
                placeholder="your@email.com"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-black uppercase text-white mb-4">
                Select Service
              </label>
              <div className="space-y-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-start gap-4 p-4 bg-black border-2 border-gray-700 hover:border-yellow-500 transition cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={formData.service === service.id}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 mt-1 accent-yellow-500"
                    />
                    <div className="flex-1">
                      <p className="font-black uppercase text-white">
                        {service.name}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {service.description}
                      </p>
                      <p className="font-black text-yellow-500 mt-2">
                        ${service.price}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-black uppercase text-white mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black border-2 border-gray-700 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-black uppercase text-white mb-2">
                  Select Time (9 PM - 10 AM)
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black border-2 border-gray-700 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition font-semibold"
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

            {/* Location & Mobile Booking */}
            <div>
              <label className="block text-sm font-black uppercase text-white mb-2">
                Your Location (For VIP Premium Mobile Booking)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-black border-2 border-gray-700 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition uppercase font-semibold"
                placeholder="Enter your location or address"
              />

              {/* Map Component */}
              {showMap && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-gray-800 border-2 border-yellow-500 p-6 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-black uppercase text-white">
                        Delivery Location Map
                      </p>
                      <MapPin className="text-yellow-500" size={24} />
                    </div>

                    {/* Realistic Map Mockup */}
                    <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg relative overflow-hidden border border-gray-600">
                      {/* Map background with grid effect */}
                      <svg
                        className="absolute inset-0 w-full h-full opacity-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 40 0 L 0 0 0 40"
                              fill="none"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>

                      {/* Map elements */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs font-bold">
                          {formData.location}
                        </div>
                      </div>

                      {/* Center marker */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                      </div>

                      {/* Road lines */}
                      <svg
                        className="absolute inset-0"
                        viewBox="0 0 400 256"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="100"
                          x2="400"
                          y2="100"
                          stroke="#666"
                          strokeWidth="3"
                        />
                        <line
                          x1="150"
                          y1="0"
                          x2="150"
                          y2="256"
                          stroke="#666"
                          strokeWidth="3"
                        />
                        <line
                          x1="250"
                          y1="0"
                          x2="250"
                          y2="256"
                          stroke="#666"
                          strokeWidth="2"
                        />
                      </svg>

                      {/* Zoom controls mockup */}
                      <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
                        <button className="bg-white text-gray-800 w-8 h-8 flex items-center justify-center font-bold text-lg rounded hover:bg-gray-200">
                          +
                        </button>
                        <button className="bg-white text-gray-800 w-8 h-8 flex items-center justify-center font-bold text-lg rounded hover:bg-gray-200">
                          −
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                      📍 Premium mobile barber service available for your
                      location
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-black uppercase py-4 text-lg hover:bg-black hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
            >
              Confirm Reservation
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-6">
            ✂️ Your reservation is confirmed after payment. We'll send a
            confirmation to your email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t-2 border-yellow-500 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <Scissors size={28} className="text-black" />
                </div>
                <span className="text-lg font-black text-yellow-500">
                  NESSY BLADES
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium barber experience for the night shift.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-black uppercase text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#booking" className="hover:text-yellow-500 transition">
                    Book Reservation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    About Nessy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-black uppercase text-white mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-yellow-500" />
                Location
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                124 Midnight Ave
                <br />
                Suite B
              </p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-black uppercase text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-yellow-500 transition"
                >
                  <Instagram size={20} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-yellow-500 transition"
                >
                  <Twitter size={20} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-yellow-500 transition"
                >
                  <Facebook size={20} className="text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-500 text-xs font-light">
              © 2024 NESSY BLADES. All rights reserved. Open 9 PM - 10 AM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
