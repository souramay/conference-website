import React from 'react';

const HERO_IMAGE_URL = "./HeroImg/HeroImg.jpg"; 

function HeroSection({ title, subtitle, heroData, aboutTitle, aboutContent, marqueeData }) {
  const importantDates = heroData?.dates || [];

  return (
    <section className="relative w-full min-h-[80vh] flex items-center text-white ">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${HERO_IMAGE_URL})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>

      <div className="relative container max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
          
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 opacity-90 drop-shadow-md">
              {subtitle}
            </h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 border-b border-white/20 pb-2">
              {aboutTitle || 'About the Conference'}
            </h3>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mb-8 font-light opacity-90">
              {aboutContent}
            </p>

            {/* Buttons wrapped in a flex container; added marquee link if provided */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                className="px-6 py-3 bg-blue-600 rounded-lg
                           text-base font-semibold shadow-lg transition-all duration-300
                           hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More
              </button>

              {marqueeData && (
                <a
                  href={marqueeData.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-transparent border-2 border-white rounded-lg
                             text-base font-semibold shadow-lg transition-all duration-300
                             hover:bg-white hover:text-gray-900"
                >
                  {marqueeData.text || 'Technical Agenda'}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 w-full">
            <div
              className="bg-gray-900/50 text-white 
                         rounded-xl shadow-2xl p-6 md:p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {heroData.title || 'Important Dates'}
              </h3>
              
              <ul className="space-y-4 mb-8">
                {importantDates.length > 0 ? (
                  importantDates.map((item) => (
                    <li 
                      key={item.event}
                      className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/20 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-semibold text-gray-200">{item.event}</span>
                      <span className="font-bold text-white text-left sm:text-right">{item.date}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-300 text-center">Dates will be announced soon.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;