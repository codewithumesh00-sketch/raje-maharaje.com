import React, { useState, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ArrowRight } from 'lucide-react';

const RoyalAtelierVideoSection = () => {
  const { navigateTo } = useShop();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Curated Luxury Royal Video URLs
  const videoPlaylists = [
    {
      id: 1,
      title: 'Varanasi Master Handlooms & Gold Zari Weaving',
      subtitle: '400-Year Royal Silk Tradition',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: '/images/craft_fan_squares_4k.png',
      tag: 'Banarasi Zari'
    },
    {
      id: 2,
      title: 'The Sovereign Velvet Bandhgala Atelier',
      subtitle: 'Bespoke Tailoring & Hand-Rolled Borders',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: '/images/home_hero_bandhgala_cutout.png',
      tag: 'Bespoke Couture'
    },
    {
      id: 3,
      title: 'Awadhi Chikankari Shadow Needlecraft',
      subtitle: 'Generational Mughal Needlework Artisans',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      poster: '/images/hero_chikankari_4k.png',
      tag: 'Lucknow Atelier'
    }
  ];

  const currentVideo = videoPlaylists[activeVideoIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-black text-white border-b border-neutral-800 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
              <span>Cinema // Royal Heritage</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Royal Atelier // Craftsmanship
            </h2>
          </div>

          <button
            onClick={() => navigateTo('about')}
            className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors pb-0.5 border-b border-white self-start sm:self-auto flex items-center space-x-1.5"
          >
            <span>Discover The Lineage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full bg-neutral-950 overflow-hidden shadow-2xl border border-neutral-800">
          <video
            ref={videoRef}
            key={currentVideo.src}
            src={currentVideo.src}
            poster={currentVideo.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Video Title & Tag in Bottom-Left */}
          <div className="absolute bottom-6 left-6 z-10 space-y-1.5 max-w-xl">
            <span className="px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
              {currentVideo.tag}
            </span>
            <h3 className="font-sans font-extrabold text-xl sm:text-3xl text-white tracking-tight uppercase">
              {currentVideo.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light">
              {currentVideo.subtitle}
            </p>
          </div>

          {/* Video Controls in Bottom-Right */}
          <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-2.5">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="p-3 bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={toggleMute}
              className="p-3 bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="p-3 bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Playlist Switcher (3 Clips) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {videoPlaylists.map((vid, idx) => {
            const isActive = activeVideoIndex === idx;
            return (
              <button
                key={vid.id}
                onClick={() => setActiveVideoIndex(idx)}
                className={`p-3.5 text-left border transition-all flex items-center space-x-3 ${
                  isActive
                    ? 'bg-neutral-900 border-white text-white'
                    : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                }`}
              >
                <div className="w-14 h-10 overflow-hidden bg-neutral-800 flex-shrink-0 relative">
                  <img src={vid.poster} alt={vid.title} className="w-full h-full object-cover" />
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-neutral-400 block">
                    0{idx + 1} // {vid.tag}
                  </span>
                  <span className="font-sans font-bold text-xs text-white truncate block">
                    {vid.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoyalAtelierVideoSection;
