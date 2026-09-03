import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

const storesData = [
  {
    id: 1,
    city: 'Delhi NCR',
    name: 'Khan Market Flagship',
    address: 'Shop No. 34, Middle Lane, Khan Market, New Delhi 110003',
    phone: '+91 11 4175 7380',
    hours: 'Mon-Sun: 10:30 AM – 8:30 PM',
    type: 'Flagship Experiential Store & Scent Bar',
    mapQuery: 'Nicobar+Khan+Market+New+Delhi',
  },
  {
    id: 2,
    city: 'Delhi NCR',
    name: 'Meherchand Market',
    address: '79-80 Meherchand Market, Lodhi Colony, New Delhi 110003',
    phone: '+91 11 4905 3772',
    hours: 'Mon-Sun: 10:30 AM – 8:00 PM',
    type: 'Home & Apparel Sanctuary',
    mapQuery: 'Nicobar+Meherchand+Market+New+Delhi',
  },
  {
    id: 3,
    city: 'Delhi NCR',
    name: 'Ambience Mall, Vasant Kunj',
    address: 'Ground Floor, Ambience Mall, Nelson Mandela Marg, Vasant Kunj, New Delhi 110070',
    phone: '+91 11 4087 0120',
    hours: 'Mon-Sun: 11:00 AM – 9:00 PM',
    type: 'Boutique & Gifting Concierge',
    mapQuery: 'Nicobar+Ambience+Mall+Vasant+Kunj',
  },
  {
    id: 4,
    city: 'Delhi NCR',
    name: 'Gurgaon Atelier & Studio Sankara',
    address: 'Studio Sankara, Hermitage Apartments, Sector 28, Gurugram 122002',
    phone: '+91 99108 07795',
    hours: 'Mon-Sat: 10:00 AM – 7:00 PM (By Appointment)',
    type: 'Bespoke Atelier & Custom Weaves',
    mapQuery: 'Studio+Sankara+Sector+28+Gurgaon',
  },
  {
    id: 5,
    city: 'Mumbai',
    name: 'Kala Ghoda Heritage Flagship',
    address: '10 Ropewalk Lane, Above Artists’ Centre, Kala Ghoda, Fort, Mumbai 400001',
    phone: '+91 22 2263 3880',
    hours: 'Mon-Sun: 11:00 AM – 8:30 PM',
    type: 'Heritage Flagship Store & Nico Cafe',
    mapQuery: 'Nicobar+Kala+Ghoda+Mumbai',
  },
  {
    id: 6,
    city: 'Mumbai',
    name: 'Bandra Linking Road',
    address: 'Ground Floor, Suburbia Mall, Linking Road, Bandra West, Mumbai 400050',
    phone: '+91 22 2640 5510',
    hours: 'Mon-Sun: 11:00 AM – 9:00 PM',
    type: 'Apparel, Dining & Living Boutique',
    mapQuery: 'Nicobar+Bandra+West+Mumbai',
  },
  {
    id: 7,
    city: 'Bangalore',
    name: 'Indiranagar 100ft Road',
    address: '4th Main Road, 100ft Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038',
    phone: '+91 80 4110 3290',
    hours: 'Mon-Sun: 10:30 AM – 8:30 PM',
    type: 'Experiential Store & Garden Courtyard',
    mapQuery: 'Nicobar+Indiranagar+Bangalore',
  },
  {
    id: 8,
    city: 'Bangalore',
    name: 'Lavelle Road',
    address: '4 Walton Road, Off Lavelle Road, Shanthala Nagar, Bengaluru 560001',
    phone: '+91 80 4370 8912',
    hours: 'Mon-Sun: 10:30 AM – 8:00 PM',
    type: 'Living & Gifting Boutique',
    mapQuery: 'Nicobar+Lavelle+Road+Bangalore',
  },
  {
    id: 9,
    city: 'Chennai',
    name: 'Rutland Gate, Nungambakkam',
    address: '4/1 Rutland Gate, 4th Street, Nungambakkam, Chennai 600006',
    phone: '+91 44 4855 0190',
    hours: 'Mon-Sun: 10:30 AM – 8:00 PM',
    type: 'Coastal Heritage Store',
    mapQuery: 'Nicobar+Rutland+Gate+Chennai',
  },
  {
    id: 10,
    city: 'Hyderabad',
    name: 'Banjara Hills',
    address: 'Road No. 10, Singhania Galleria, Banjara Hills, Hyderabad 500034',
    phone: '+91 40 4850 7210',
    hours: 'Mon-Sun: 11:00 AM – 8:30 PM',
    type: 'Apparel & Festive Gifting Lounge',
    mapQuery: 'Nicobar+Banjara+Hills+Hyderabad',
  },
  {
    id: 11,
    city: 'Goa',
    name: 'Assagao Tropical Sanctuary',
    address: 'House No. 142, Badem Junction, Assagao, Goa 403507',
    phone: '+91 832 226 8920',
    hours: 'Mon-Sun: 11:00 AM – 8:00 PM',
    type: 'Colonial Villa & Resort Edit',
    mapQuery: 'Nicobar+Assagao+Goa',
  },
  {
    id: 12,
    city: 'Jaipur',
    name: 'C-Scheme Heritage Quarter',
    address: 'Plot No. 12, Ashok Nagar, C-Scheme, Jaipur, Rajasthan 302001',
    phone: '+91 141 401 2340',
    hours: 'Mon-Sun: 10:30 AM – 8:00 PM',
    type: 'Royal Atelier & Craft Showcase',
    mapQuery: 'Nicobar+Jaipur+C+Scheme',
  },
];

const StoresPage = () => {
  const { navigateTo } = useShop();
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const cities = ['All', 'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Goa', 'Jaipur'];

  const filteredStores = storesData.filter((store) => {
    const matchesCity = selectedCity === 'All' || store.city === selectedCity;
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] select-none">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-[#7E746F] font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-[#241A16] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#241A16] font-medium">Store Locator</span>
        </nav>
      </div>

      {/* Hero Banner with Scent Note */}
      <div className="py-16 sm:py-20 text-center px-4 bg-[#F4EFE6] border-b border-[#E8E1D3]">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.28em] font-semibold text-[#8B1E2D]">
            A Place You Can Remember By Scent
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light text-[#241A16]">
            OUR STORES
          </h1>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light max-w-lg mx-auto">
            Walk into any of our stores and you’ll find Neroli and royal amber in the air. Step inside, unwind, and explore our collections in person.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, landmark, or street..."
              className="w-full bg-white border border-[#E8E1D3] pl-10 pr-4 py-3 text-xs sm:text-sm font-sans placeholder-[#A89F98] text-[#241A16] rounded-xs focus:outline-none focus:border-[#241A16]"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* City Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#E8E1D3]">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-xs whitespace-nowrap transition-all ${
                selectedCity === city
                  ? 'bg-[#241A16] text-white shadow-sm'
                  : 'bg-white text-[#7E746F] border border-[#E8E1D3] hover:border-[#241A16] hover:text-[#241A16]'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Stores Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white border border-[#E8E1D3] rounded-xs p-6 sm:p-8 flex flex-col justify-between hover:border-[#8B1E2D] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-[#8B1E2D]">
                    {store.city}
                  </span>
                  <span className="text-[9px] uppercase font-sans tracking-wider bg-[#FAF8F5] border border-[#E8E1D3] text-[#7E746F] px-2 py-0.5 rounded-xs">
                    {store.type}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-medium text-[#241A16] group-hover:text-[#8B1E2D] transition-colors mb-3">
                  {store.name}
                </h3>

                <div className="space-y-2.5 text-xs text-[#7E746F] font-sans font-light">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-[#8B1E2D] flex-shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-[#7E746F] flex-shrink-0" />
                    <a href={`tel:${store.phone}`} className="hover:text-[#241A16]">
                      {store.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-[#7E746F] flex-shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E1D3] flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#241A16] hover:text-[#8B1E2D] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <button
                  onClick={() => navigateTo('contact')}
                  className="text-[11px] uppercase tracking-wider text-[#7E746F] hover:text-[#241A16] hover:underline"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoresPage;
