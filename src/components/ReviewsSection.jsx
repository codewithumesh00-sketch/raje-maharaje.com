import React, { useState } from 'react';
import { reviewsData } from '../data/crafts';
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  ThumbsUp, 
  Share2, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';

// Official Multi-Color Google G Logo
export const GoogleLogo = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

// Authentic Google Gold Star
export const GoogleStar = ({ filled = true, className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} ${filled ? 'fill-[#FBBC04] text-[#FBBC04]' : 'fill-gray-200 text-gray-200'}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Google Local Guide Icon
export const LocalGuideBadge = ({ level = 6 }) => (
  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#d93025] bg-red-50/80 px-2 py-0.5 rounded-full border border-red-100">
    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#e37400]" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
    </svg>
    <span>Local Guide • Level {level}</span>
  </span>
);

const ReviewsSection = () => {
  const [reviewsList, setReviewsList] = useState(reviewsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedReviews, setLikedReviews] = useState({});
  const [copied, setCopied] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newReviewForm, setNewReviewForm] = useState({
    author: '',
    city: '',
    role: 'Connoisseur',
    rating: 5,
    craft: 'Tanchoi Zari Brocade',
    text: '',
    localGuide: true
  });

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsList.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);
  };

  const toggleLike = (id) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewForm.author.trim() || !newReviewForm.text.trim()) return;

    const colors = ['bg-[#1a73e8]', 'bg-[#0F9D58]', 'bg-[#E37400]', 'bg-[#A142F4]', 'bg-[#EA4335]'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const createdReview = {
      id: `rev-${Date.now()}`,
      author: newReviewForm.author.trim(),
      role: newReviewForm.role || 'Patron',
      city: newReviewForm.city.trim() || 'Mumbai',
      rating: newReviewForm.rating,
      date: 'Just now',
      relativeTime: 'Just now',
      text: newReviewForm.text.trim(),
      avatarBg: randomColor,
      avatarLetter: newReviewForm.author.trim().charAt(0).toUpperCase(),
      verified: true,
      localGuide: newReviewForm.localGuide,
      guideLevel: 5,
      reviewsCount: 18,
      photosCount: 6,
      tags: [newReviewForm.craft, 'Verified Purchase'],
      helpfulCount: 0,
      ownerReply: {
        author: 'Raje Maharaje (Owner)',
        date: 'Just now',
        text: `Esteemed ${newReviewForm.author}, thank you deeply for your royal patronage. We are thrilled our handcrafted silk brought elegance to your ensemble.`
      }
    };

    setReviewsList([createdReview, ...reviewsList]);
    setCurrentIndex(0);
    setIsWriteModalOpen(false);
    setNewReviewForm({
      author: '',
      city: '',
      role: 'Connoisseur',
      rating: 5,
      craft: 'Tanchoi Zari Brocade',
      text: '',
      localGuide: true
    });
  };

  const current = reviewsList[currentIndex] || reviewsList[0];
  const isLiked = !!likedReviews[current.id];
  const currentHelpful = (current.helpfulCount || 12) + (isLiked ? 1 : 0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4] text-[#202124] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-xs border border-gray-200 text-xs font-semibold text-gray-700 tracking-wider uppercase mb-3">
            <GoogleLogo className="w-4 h-4" />
            <span>Google Customer Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 uppercase">
            Voices of Royalty
          </h2>
          <p className="text-sm text-gray-600 font-sans mt-2">
            Read verified reflections from destination wedding grooms, connoisseurs, and dignitaries.
          </p>
        </div>

        {/* Google Overall Rating Bar & Trust Score Summary */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Overall Score */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F0FE] flex items-center justify-center p-2.5 shadow-inner">
              <GoogleLogo className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-[#202124] tracking-tight font-sans">
                  5.0
                </span>
                <div className="flex items-center space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <GoogleStar key={i} className="w-5 h-5" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5 flex items-center gap-1.5">
                <span>Based on <strong>{148 + (reviewsList.length - reviewsData.length)}+ verified reviews</strong></span>
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Recommended
                </span>
              </p>
            </div>
          </div>

          {/* Right: Actions / Rating Badges */}
          <div className="flex items-center flex-wrap gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#F8F9FA] rounded-xl border border-gray-200 text-xs text-gray-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Google Verified Business</span>
            </div>
            <button 
              onClick={() => setIsWriteModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <span>Write a Review</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Write a Review Modal */}
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-[120] overflow-y-auto flex items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
              onClick={() => setIsWriteModalOpen(false)}
            />
            <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 z-[121] text-left">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <GoogleLogo className="w-5 h-5" />
                  <h3 className="font-sans font-bold text-lg text-gray-900">
                    Write a Google Review
                  </h3>
                </div>
                <button 
                  onClick={() => setIsWriteModalOpen(false)}
                  className="text-gray-400 hover:text-gray-700 text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleReviewSubmit} className="mt-4 space-y-4">
                {/* Star rating selector */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Overall Rating *
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReviewForm({ ...newReviewForm, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <GoogleStar 
                          filled={star <= newReviewForm.rating} 
                          className="w-7 h-7" 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-gray-600 ml-2">
                      {newReviewForm.rating}.0 / 5.0
                    </span>
                  </div>
                </div>

                {/* Name & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singhania"
                      value={newReviewForm.author}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, author: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#1a73e8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      City / Occasion *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Udaipur / Wedding"
                      value={newReviewForm.city}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, city: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#1a73e8]"
                    />
                  </div>
                </div>

                {/* Craft */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Craft / Creation Purchased
                  </label>
                  <select
                    value={newReviewForm.craft}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, craft: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#1a73e8]"
                  >
                    <option value="Tanchoi Zari Brocade">Tanchoi Zari Brocade</option>
                    <option value="Awadhi Chikankari Silk">Awadhi Chikankari Silk</option>
                    <option value="Ajrakh Hand-Block Print">Ajrakh Hand-Block Print</option>
                    <option value="Pochampally Ikat Weave">Pochampally Ikat Weave</option>
                    <option value="Bespoke Grand Royal Chest">Bespoke Grand Royal Chest</option>
                  </select>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Review & Experience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share your reflection on fabric quality, weave detail, and presentation..."
                    value={newReviewForm.text}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, text: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1a73e8]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <GoogleLogo className="w-3.5 h-3.5" />
                    <span>Publish Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Featured Google Review Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all relative">
          
          {/* Header Row: Reviewer Avatar + Name + Google Logo */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-100">
            
            <div className="flex items-start gap-4">
              {/* Google Profile Avatar with dynamic color */}
              <div className="relative">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${current.avatarBg || 'bg-[#1a73e8]'} text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm uppercase font-sans select-none`}>
                  {current.avatarLetter || current.author?.charAt(0) || 'V'}
                </div>
                {current.localGuide && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs border border-gray-100">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#e37400]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Reviewer Details */}
              <div>
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-gray-900 tracking-tight">
                    {current.author}
                  </h3>
                  {current.verified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified Royal Patron</span>
                    </span>
                  )}
                </div>

                {/* Google Local Guide & Review Stats */}
                <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500 mt-1">
                  {current.localGuide ? (
                    <LocalGuideBadge level={current.guideLevel || 6} />
                  ) : (
                    <span className="text-gray-500 font-medium">Verified Customer</span>
                  )}
                  <span className="text-gray-300">•</span>
                  <span>{current.reviewsCount || 24} reviews</span>
                  <span className="text-gray-300">•</span>
                  <span>{current.photosCount || 12} photos</span>
                </div>

                {/* Role / City */}
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  {current.role} • <span className="text-gray-700">{current.city}</span>
                </p>
              </div>
            </div>

            {/* Google Brand Stamp (Top Right) */}
            <div className="hidden sm:flex flex-col items-end">
              <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <GoogleLogo className="w-4 h-4" />
                <span>Posted on Google</span>
              </div>
              <span className="text-[11px] text-gray-400 mt-1">5.0 Star Experience</span>
            </div>
          </div>

          {/* Rating Row & Time */}
          <div className="my-5 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-0.5">
                {Array.from({ length: current.rating || 5 }).map((_, i) => (
                  <GoogleStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-900 bg-[#FEF7E0] px-2 py-0.5 rounded text-[#B06000] border border-[#FEEFC3]">
                5.0 / 5.0
              </span>
              <span className="text-xs text-gray-500 font-normal">
                {current.relativeTime || current.date || '2 weeks ago'}
              </span>
            </div>

            {/* Mobile Google Badge */}
            <div className="sm:hidden flex items-center gap-1 text-[11px] text-gray-500">
              <GoogleLogo className="w-3.5 h-3.5" />
              <span>Google Review</span>
            </div>
          </div>

          {/* Main Review Text */}
          <div className="text-gray-800 text-base sm:text-lg leading-relaxed font-sans font-normal my-4">
            "{current.text}"
          </div>

          {/* Product / Heritage Tags */}
          {current.tags && current.tags.length > 0 && (
            <div className="flex items-center flex-wrap gap-2 my-5">
              {current.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                >
                  <Sparkles className="w-3 h-3 text-gold-600" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Authentic Google Owner Reply */}
          {current.ownerReply && (
            <div className="mt-6 mb-4 bg-[#F8F9FA] rounded-xl p-4 sm:p-5 border-l-4 border-[#1a73e8] border-y border-r border-gray-200/80">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111111] text-gold-400 flex items-center justify-center font-serif text-xs font-bold">
                    RM
                  </div>
                  <span className="font-semibold text-xs text-gray-900">
                    {current.ownerReply.author}
                  </span>
                </div>
                <span className="text-[11px] text-gray-400">
                  {current.ownerReply.date}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pl-8">
                {current.ownerReply.text}
              </p>
            </div>
          )}

          {/* Bottom Card Footer: Helpful, Share & Carousel Controls */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Interaction Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => toggleLike(current.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isLiked 
                    ? 'bg-blue-50 border-blue-200 text-[#1a73e8] font-semibold' 
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="Mark review as helpful"
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#1a73e8]' : ''}`} />
                <span>Helpful ({currentHelpful})</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-medium transition-colors"
                aria-label="Share review"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center space-x-1.5">
                {reviewsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex 
                        ? 'w-6 bg-[#1a73e8]' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700 active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-medium text-gray-600 px-1">
                  {currentIndex + 1} / {reviewsList.length}
                </span>
                <button
                  onClick={nextReview}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700 active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Small Google Footer Note */}
        <div className="text-center mt-6 text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <GoogleLogo className="w-3.5 h-3.5" />
          <span>Ratings and reviews are verified in accordance with Google review policies.</span>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;

