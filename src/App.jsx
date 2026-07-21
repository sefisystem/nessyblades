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
  Globe,
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
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      navBook: 'BOOK',
      heroTitle1: 'NESSY BLADES:',
      heroTitle2: 'SHARP CUTS',
      heroTitle3: 'FOR THE NIGHT SHIFT',
      heroSubtitle: 'Your best look, anytime before dawn.',
      heroButton: 'Reserve Your Time',
      ourWork: 'OUR WORK',
      ourWorkSub: 'Premium cuts from Master Barber Nessy',
      masterBarber: 'MASTER BARBER NESSY',
      masterDesc: 'Master Barber Nessy is the real deal. Operating when everyone else is sleeping, catering to the night shift warriors and early risers. Specializing in precision fades and classic straight-razor shaves, Nessy Blades has become the go-to grooming spot for night owls, grinders, and VIPs—including notable clients like Aliyu Mohammad. When the sun goes down, the clippers come alive.',
      theVibe: 'THE VIBE',
      premiumAmenities: 'Premium Amenities',
      amenitiesDesc: 'Complimentary black coffee or whiskey with every cut. Keep your energy up!',
      atmosphere: 'Atmosphere',
      atmosphereDesc: 'Lo-fi beats, dark leather chairs, and a chill vibe. Just you, the barber, and good conversation.',
      whatClientsSay: 'WHAT CLIENTS SAY',
      whatClientsSub: 'Real testimonials from satisfied customers',
      bookReservation: 'BOOK YOUR RESERVATION',
      fullName: 'Full Name',
      yourName: 'Your Name',
      phone: 'Phone Number',
      phoneNumber: '+234 813 456 4778',
      email: 'Email',
      selectService: 'Select Service',
      selectDate: 'Select Date',
      selectTime: 'Select Time (9 PM - 10 AM)',
      yourLocation: 'Your Location',
      myLocation: '📍 MY LOCATION',
      locationPinned: 'Location Pinned',
      mobileBarber: 'Mobile barber service available',
      openMaps: 'OPEN MAPS',
      confirmReservation: '✂️ CONFIRM RESERVATION',
      processing: '⏳ PROCESSING...',
      confirmationMsg: '✅ Reservation booked! Check your email for confirmation.',
      successMsg: '✅ Reservation submitted! Our team will contact you soon.',
      reservationNote: 'Your reservation will be saved. We\'ll send a confirmation to your email.',
      visitUs: 'VISIT US',
      address: 'Address',
      getDirections: 'GET DIRECTIONS',
      contact: 'Contact',
      callNow: 'CALL NOW',
      openHours: 'Open 9 PM - 10 AM',
      navigation: 'Navigation',
      services: 'Services',
      aboutNessy: 'About Nessy',
      followUs: 'Follow Us',
      location: 'Location',
      copyright: '© 2024 NESSY BLADES. ALL RIGHTS RESERVED. OPEN 9 PM - 10 AM',
      madeBy: 'Built with passion by Abdelwakil',
    },
    yo: {
      navBook: 'BOOK',
      heroTitle1: 'NESSY BLADES:',
      heroTitle2: 'GBARA FIFIKUN',
      heroTitle3: 'FUN OJOEKOO',
      heroSubtitle: 'Owa ti o dara julọ, nigbakigba le titi',
      heroButton: 'Gbe Akoko Rẹ',
      ourWork: 'IŠE TAWON TEMI',
      ourWorkSub: 'Gbara to ni kikun lati ọdọ Olubarba Nessy',
      masterBarber: 'OLUBARBA NESSY',
      masterDesc: 'Olubarba Nessy je eni ti o ni ohun elo patapata. Ositọ ni akoko ijiya, o n ṣiṣẹ fun awon to n gbe ojoekoo ati awon ti a ti sona ni ere. Ó ṣe itupale ni gbara to ni kikun ati gbara to tẹgbẹ. Nessy Blades ti di ibi ti awon ti o bẹ lọ - pẹlu awon olumulo to n ju bi Aliyu Mohammad. Nigba ti oorun ba jade, ijiya na wa.',
      theVibe: 'ORI IRU NKA',
      premiumAmenities: 'Ewa Pataki',
      amenitiesDesc: 'Kafe ala dudu tabi oti waini fun iloyii kọọkan. Duro ni lagbara!',
      atmosphere: 'Eko Ayan',
      atmosphereDesc: 'Ayan to rọrun, ibadandun ti nla, ati isokan to dara. Ẹ ati olubarba ati ọrọ to dara.',
      whatClientsSay: 'KIN NI AWON OLUMULO SOO',
      whatClientsSub: 'Ogbogbo ọrọ lati ọdọ awon ti o n je inu rẹ lọ',
      bookReservation: 'GBENIKE AKOKO',
      fullName: 'Orukọ Deede',
      yourName: 'Orukọ Rẹ',
      phone: 'Nọmba Foonu',
      phoneNumber: '+234 813 456 4778',
      email: 'Imeeli',
      selectService: 'Yan Iṣẹ',
      selectDate: 'Yan Ọjọ',
      selectTime: 'Yan Akoko (9 PM - 10 AM)',
      yourLocation: 'Ibi Ti O Wa',
      myLocation: '📍 IBIARA MI',
      locationPinned: 'Ibi Ti A Gbe',
      mobileBarber: 'Iṣẹ olubarba wa duro fun rẹ',
      openMaps: 'FI MAPS SI IṢẸ',
      confirmReservation: '✂️ JẸRISI AKOKO',
      processing: '⏳ N ṢIṢẸ...',
      confirmationMsg: '✅ Gbenike tipẹtipẹ! Wo imeeli rẹ fun igbejade.',
      successMsg: '✅ Gbenike ti wa! A o tawọ rẹ lẹsẹkẹsẹ.',
      reservationNote: 'A o gbe akoko rẹ le. A o fi igbejade wá odidi rẹ.',
      visitUs: 'WO OUN',
      address: 'Adirẹsi',
      getDirections: 'GBA ILANA',
      contact: 'Olusokan',
      callNow: 'PE NI BAYI',
      openHours: 'Sii 9 PM - 10 AM',
      navigation: 'Ilana Rin',
      services: 'Awoṣe Iṣẹ',
      aboutNessy: 'Nipa Nessy',
      followUs: 'Tẹle Wa',
      location: 'Ibi',
      copyright: '© 2024 NESSY BLADES. GBOGBO ẸTỌ TI A PA SI. SII 9 PM - 10 AM',
      madeBy: 'Ẹ kọ pẹlu ife nipẹ Abdelwakil',
    },
  };

  const t = translations[language];

  const services = [
    {
      id: 'midnight',
      name: language === 'en' ? 'The Midnight Classic' : 'Olokike Ojoekoo',
      price: 45,
      description: language === 'en' ? 'A precision tailored haircut with a hot towel finish. Clean lines, sharp edges.' : 'Gbara to ni kikun pẹlu towu ti o sẹsẹ jẹ. Ẹ dun ju!',
    },
    {
      id: 'aliyu',
      name: language === 'en' ? 'The Aliyu Special / VIP Treatment' : 'Ẹbun Aliyu / Iṣẹ to Julo',
      price: 75,
      description: language === 'en' ? 'Full haircut, beard sculpting, straight razor lineup, and a relaxing facial massage. The works!' : 'Gbara deede, obe awe, ati ṣọ ara. Gbogbo ẹsẹ!',
    },
    {
      id: 'dawn',
      name: language === 'en' ? 'The Dawn Patrol Beard Trim' : 'Ibawo Aro - Obe Awe',
      price: 30,
      description: language === 'en' ? 'Perfect for early risers needing a sharp beard shape-up before morning meetings.' : 'Dara fun awon ti a ti sona - obe awe to ni kikun.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarkinmota',
      text: language === 'en' ? 'Nessy Blades gave me the sharpest cut I\'ve ever had. The precision and attention to detail is unmatched. Highly recommended!' : 'Nessy Blades fun mi ni gbara to ju eyi ti mo ti ri. Awọ to dara julọ. Mo repela!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Aliyu Mohammad',
      text: language === 'en' ? 'The VIP treatment is worth every penny. Master Barber Nessy is a true professional. Best barber in the city!' : 'Iṣẹ to julo na se owo ati. Olubarba Nessy ni oṣokan. Ti o dara julọ ninu ilu!',
      rating: 5,
    },
  ];

  const portfolioImages = [
    {
      id: 1,
      url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22%3E%3Crect fill=%22%23000%22 width=%22500%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3EPrecision Fade%3C/text%3E%3C/svg%3E',
      title: language === 'en' ? 'Precision Fade' : 'Gbara Kikun',
    },
    {
      id: 2,
      url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22%3E%3Crect fill=%22%23111%22 width=%22500%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3EClassic Lineup%3C/text%3E%3C/svg%3E',
      title: language === 'en' ? 'Classic Lineup' : 'Ilana Ola',
    },
    {
      id: 3,
      url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22%3E%3Crect fill=%22%23222%22 width=%22500%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3EBeard Sculpting%3C/text%3E%3C/svg%3E',
      title: language === 'en' ? 'Beard Sculpting' : 'Obe Awe Kiakia',
    },
    {
      id: 4,
      url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22%3E%3Crect fill=%22%23333%22 width=%22500%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3ESharp Cut%3C/text%3E%3C/svg%3E',
      title: language === 'en' ? 'Sharp Cut' : 'Gbara to Kikun',
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
            location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
          }));
          setShowMap(true);
          
          // Open Google Maps
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          console.error('Error getting location:', error);
          alert(language === 'en' ? 'Unable to get your location. Please enter it manually.' : 'A ko le gba ibi rẹ. Jọwọ se itan.');
        }
      );
    } else {
      alert(language === 'en' ? 'Geolocation is not supported by your browser.' : 'Ibi-ṣiṣẹ ko sin kọkọ rẹ.');
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

      setMessage(t.confirmationMsg);
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
      setMessage(t.successMsg);
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
          <div className="flex justify-between items-center h-16 gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-black flex-shrink-0">
                <Scissors size={20} className="text-white" />
              </div>
              <span className="text-sm sm:text-xl font-black text-black truncate">NESSY BLADES</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setLanguage(language === 'en' ? 'yo' : 'en')}
                className="px-2 py-2 bg-black text-white font-black border-2 border-black hover:bg-white hover:text-black transition text-xs flex items-center gap-1"
              >
                <Globe size={14} /> {language === 'en' ? 'YO' : 'EN'}
              </button>
              <button
                onClick={() => {
                  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 sm:px-6 py-2 bg-black text-white font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm"
              >
                {t.navBook}
              </button>
            </div>
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
            {t.heroTitle1}<br />
            <span className="border-b-4 border-black py-1 sm:py-2 inline-block">{t.heroTitle2}</span><br />
            {t.heroTitle3}
          </h1>
          <p className="text-lg sm:text-2xl text-black mb-6 sm:mb-8 font-bold">{t.heroSubtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12">
            <Phone className="text-black" size={28} />
            <a href="tel:+234813456478" className="text-xl sm:text-3xl font-black text-black hover:underline transition">
              +234 813 456 4778
            </a>
          </div>

          <button
            onClick={() => {
              document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 py-3 sm:py-5 bg-black text-white font-black uppercase text-base sm:text-xl border-2 border-black hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            {t.heroButton}
          </button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-black text-white py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-2 border-b-4 border-white pb-3">{t.ourWork}</h2>
          <p className="text-base sm:text-xl font-bold mb-8">{t.ourWorkSub}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {portfolioImages.map((image) => (
              <div key={image.id} className="bg-white border-2 border-white overflow-hidden hover:border-gray-300 transition-all">
                <div className="aspect-square overflow-hidden bg-gray-800">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4 sm:mb-8 border-b-4 border-black pb-3">{t.masterBarber}</h2>
            <p className="text-base sm:text-2xl leading-relaxed font-bold">{t.masterDesc}</p>
          </div>

          <div className="border-t-4 border-black pt-12">
            <h3 className="text-2xl sm:text-4xl font-black uppercase mb-8 border-b-4 border-black pb-3">{t.theVibe}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <Coffee className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-black text-black uppercase mb-2 text-sm sm:text-xl">{t.premiumAmenities}</p>
                  <p className="text-sm sm:text-lg font-bold">{t.amenitiesDesc}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <Music className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-black text-black uppercase mb-2 text-sm sm:text-xl">{t.atmosphere}</p>
                  <p className="text-sm sm:text-lg font-bold">{t.atmosphereDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-2 border-b-4 border-white pb-3">{t.whatClientsSay}</h2>
          <p className="text-sm sm:text-xl font-bold mb-8">{t.whatClientsSub}</p>

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
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8 text-center border-b-4 border-black pb-3">{t.bookReservation}</h2>

          {message && (
            <div className="mb-6 p-4 sm:p-6 border-2 border-black bg-white">
              <p className="font-black text-sm sm:text-lg text-black">{message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-8 border-4 border-black">
            {/* Personal Details */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">{t.fullName}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                placeholder={t.yourName}
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">{t.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-white border-2 border-black text-black px-3 py-2 sm:py-3 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-sm"
                placeholder="+234 813 456 4778"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">{t.email}</label>
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
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-3">{t.selectService}</label>
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
                <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">{t.selectDate}</label>
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
                <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">{t.selectTime}</label>
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
              <label className="block text-xs sm:text-sm font-black uppercase text-black mb-2">{t.yourLocation}</label>
              <div className="flex flex-col sm:flex-row gap-2 mb-3">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="flex-1 bg-white border-2 border-black text-black px-3 py-2 font-black uppercase focus:outline-none focus:ring-4 focus:ring-black transition text-xs sm:text-sm"
                  placeholder="Enter location or coordinates"
                />
                <button
                  type="button"
                  onClick={getLocationCoordinates}
                  className="px-3 py-2 bg-black text-white font-black border-2 border-black hover:bg-white hover:text-black transition text-xs sm:text-sm whitespace-nowrap"
                >
                  {t.myLocation}
                </button>
              </div>

              {/* Google Map */}
              {showMap && (
                <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white border-2 border-black p-3 sm:p-4 rounded">
                    <p className="font-black text-black uppercase mb-2 text-xs sm:text-sm">{t.locationPinned}</p>
                    <div className="w-full h-48 sm:h-64 bg-black border-2 border-black rounded flex items-center justify-center">
                      <div className="text-center px-4">
                        <MapPin className="text-white mx-auto mb-2" size={32} />
                        <p className="text-white font-black text-xs break-all">{formData.location}</p>
                        <p className="text-white text-xs mt-2">{t.mobileBarber}</p>
                        <a
                          href={`https://www.google.com/maps/search/${formData.location}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 px-3 py-2 bg-white text-black font-black text-xs hover:bg-gray-200 transition"
                        >
                          {t.openMaps}
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
              {loading ? t.processing : t.confirmReservation}
            </button>
          </form>

          <p className="text-center text-black text-xs mt-4 font-bold">{t.reservationNote}</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-black text-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8 border-b-4 border-white pb-3">{t.visitUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <div className="bg-white text-black border-2 border-white p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4">{t.address}</h3>
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
                  {t.getDirections}
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white text-black border-2 border-white p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4">{t.contact}</h3>
                <div className="flex gap-3 mb-6">
                  <Phone size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-base sm:text-lg">+234 813 456 4778</p>
                    <p className="font-bold text-sm">{t.openHours}</p>
                  </div>
                </div>
                <a
                  href="tel:+234813456478"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-black border-2 border-black hover:bg-white hover:text-black transition inline-block text-xs sm:text-sm"
                >
                  {t.callNow}
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
              <h4 className="font-black uppercase text-white mb-3 border-b-2 border-white pb-2 text-sm">{t.navigation}</h4>
              <ul className="space-y-2 text-white text-xs">
                <li>
                  <a href="#booking" className="hover:underline transition font-bold">
                    {t.bookReservation}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition font-bold">
                    {t.services}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition font-bold">
                    {t.aboutNessy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition font-bold">
                    {t.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-black uppercase text-white mb-3 border-b-2 border-white pb-2 flex items-center gap-2 text-sm">
                <MapPin size={16} /> {t.location}
              </h4>
              <p className="text-white text-xs leading-relaxed font-bold">
                124 Midnight Ave<br />Suite B
              </p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-black uppercase text-white mb-3 border-b-2 border-white pb-2 text-sm">{t.followUs}</h4>
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
            <p className="text-center text-white text-xs font-bold">{t.copyright}</p>
            <p className="text-center text-gray-400 text-xs mt-2">{t.madeBy}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}