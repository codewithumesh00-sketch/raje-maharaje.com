import React, { useState, useEffect } from 'react';

const NicobarTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Pocket square from Maharaje added colour and life to an otherwise sober black bandhgala.",
      author: "Arun Varma",
      role: "Senior Advocate",
      location: "New Delhi",
    },
    {
      id: 2,
      quote: "The craftsmanship, patterns, and distinctive fabrics set it apart. It has since become my default gift for male friends—replacing the cufflinks I once relied on.",
      author: "Asad Lalljee",
      role: "SVP, Essar Group",
      location: "Mumbai",
    },
    {
      id: 3,
      quote: "The beautiful satin and linen pocket squares from Raje Maharaje were an absolute hit at our Sangeet, adding elegance and colour to their outfits. An excellent quality product, exceptional service, and indeed a memorable addition to the celebration.",
      author: "Deepali Narula",
      role: "Events & Marketing Consultant • Fmr Director FTV",
      location: "New Delhi",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-[#f1f1f0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 select-none border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-neutral-500 block mb-6">
          Words of Appreciation
        </span>

        <div className="min-h-[140px] sm:min-h-[120px] flex flex-col justify-center items-center">
          <p className="font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-800 leading-relaxed max-w-2xl mx-auto mb-6">
            "{testimonials[activeIdx].quote}"
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-neutral-900">
              {testimonials[activeIdx].author}
            </h4>
            <p className="text-[11px] font-sans text-neutral-500 font-light mt-0.5">
              {testimonials[activeIdx].role} &bull; {testimonials[activeIdx].location}
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIdx ? 'w-6 h-1.5 bg-neutral-900' : 'w-1.5 h-1.5 bg-neutral-400 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicobarTestimonials;
