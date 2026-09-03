import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Arun Varma",
      role: "Senior Advocate",
      location: "New Delhi",
      quote: "Pocket square from Maharaje added colour and life to an otherwise sober black bandhgala.",
      rating: 5,
    },
    {
      id: 2,
      name: "Asad Lalljee",
      role: "SVP, Essar Group",
      location: "Mumbai",
      quote: "The craftsmanship, patterns, and distinctive fabrics set it apart. It has since become my default gift for male friends—replacing the cufflinks I once relied on.",
      rating: 5,
    },
    {
      id: 3,
      name: "Deepali Narula",
      role: "Events & Marketing Consultant • Fmr Director FTV",
      location: "New Delhi",
      quote: "For a recent Sangeet, I suggested gifting the men pocket squares instead of the giveaways usually meant for women. The beautiful satin and linen pocket squares from Raje Maharaje were an absolute hit, adding elegance and colour to their outfits. A special mention to Prita Dheer for her impeccable service and foresight!",
      rating: 5,
    },
    {
      id: 4,
      name: "Deepak Patel",
      role: "Connoisseur",
      location: "Indore, MP",
      quote: "Every time I wear one of these pocket squares, I get compliments. The colors are vibrant, and the handmade finish gives it a truly sophisticated edge. Recommended to everyone. Go buy it ASAP.",
      rating: 5,
    },
    {
      id: 5,
      name: "Bindiya Dhingra",
      role: "Art Patron",
      location: "New Delhi",
      quote: "These pocket squares make perfect gifts! I bought a few from Prita and believe that they are stylish, versatile, and a great way to add a personal touch. Kudos!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            Client Words & Accolades
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-[0.18em] font-light text-neutral-900">
            PRAISE FROM PATRONS
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light">
            Read authentic words from senior advocates, industry leaders, and event curators who celebrate with Raje Maharaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF9F5] p-8 border border-neutral-200/70 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-sans text-neutral-700 font-light leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>
              <div className="border-t border-neutral-200/60 pt-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-900">
                  {rev.name}
                </h3>
                <p className="text-[11px] font-sans text-neutral-500 font-light">
                  {rev.role} &bull; {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {reviews.slice(3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 border border-neutral-200/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-xs font-sans text-neutral-600 font-light leading-relaxed mb-4 italic">
                  "{rev.quote}"
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                  {rev.name}
                </span>
                <span className="text-[11px] text-neutral-400 font-light">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
