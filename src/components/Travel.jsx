import React from 'react';



const PlaneIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const TrainIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.284-.237-1.88M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.284.237-1.88M9 11l1-6H6l1 6h3zM15 11l1-6h-4l1 6h3z" />
  </svg>
);

const RoadIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a4 4 0 01-4-4V6a4 4 0 014-4h14a4 4 0 014 4v2a4 4 0 01-4 4M5 12a4 4 0 00-4 4v2a4 4 0 004 4h14a4 4 0 004-4v-2a4 4 0 00-4-4" />
  </svg>
);



const aboutCity = `
  <p>The ancient city Bhubaneswar, also the capital of the Indian state of Odisha (formerly known as Orissa), is one of the most beautiful cities in country known for its architectural wonders that are in the form of temples and shrines. The Temple City Bhubaneswar together with Puri and Konark, forms the 'golden triangle', which is one of the most visited destinations in India as well as in Southern Asia, for its proud possession of magnificent sculptures, majestic architectural heritage, and historic and mythological importance. Today these temples are a gentle reminder of the gracious past and the rich heritage of India. Bhubaneswar, being the largest city of the state, is the educational, political, economic, and cultural hub of region luring a good number of tourists from across the country and worldwide. Surrounded by myriad of mountains and lakes, and located near the eastern sea coast of India, Bhubaneswar is definitely a travel destination.</p>
`;

const airContent = `
  <p>The Biju Patnaik Airport of Bhubaneswar is the domestic airport and is well linked by air to Bhubaneswar, New Delhi, Mumbai, Chennai, Kolkota, Hyderabad , Bangalore. To get the information on flights to and from Bhubaneswar, please visit <a href="http://www.airindia.in" target="_blank" rel="noopener noreferrer">Air India</a> or <a href="http://www.goindigo.in" target="_blank" rel="noopener noreferrer">IndiGo</a>.</p>
`;

const railwayContent = `
  <p>The Bhubaneswar City is well connected by Indian Railway to major cities of India. The East Coast (E Co) Railway of Indian Railway has provided the fast and superfast train links to New Delhi, Kolkota, Mumbai, Chennai, Bangalore, Hyderabad, Ahmedabad, Thiruvannathapuram and other important cities of India as well as within the state. To get the list of trains and their schedules, please visit <a href="https://www.indianrail.gov.in/" target="_blank" rel="noopener noreferrer">INDIAN RAIL</a>. Domestic tourists can also book their tickets online at <a href="https://www.irctc.co.in/eticketing/loginHome.jsf" target="_blank" rel="noopener noreferrer">IRCTC</a>.</p>
`;

const roadContent = `
  <p>Bhubaneswar is well linked to the rest of India by the national highways. The Bus Stand (Baramunda Bust Stand) is located on NH5 and is about 12 kilometer from Railway Station and about 14 kilometer from Airport of Bhubaneswar. Bhubaneswar is on the golden quadrilateral on NH-5 between Kolkata and Chennai.</p>
`;

const climateItems = [
  { name: "Temperature", value: "20°C (68°F) to 35°C (95°F)" },
  { name: "Humidity", value: "60%" },
  { name: "Possibility of rain", value: "Low (9 mm average)" },
];

const placesToVisit = [
  "Khandagiri Caves", "Udayagiri Caves", "Lingaraj temple",
  "Jagannath Temple, Puri", "Konark Sun Temple", "Puri sea beach",
];

const airports = [
  { name: "Bhubaneswar", link: "http://www.aai.aero/allAirports/bhubaneshwar_generalinfo.jsp", airport: "Biju Patnaik International Airport" },
  { name: "Kolkata", airport: "Netaji Subhash Chandra Bose International Airport" },
  
  { name: "Bangalore", airport: "Bengaluru International Airport" },
  { name: "Delhi", airport: "Indira Gandhi International Airport" },
  { name: "Hyderabad", airport: "Rajiv Gandhi International Airport" },
  { name: "Mumbai", airport: "Chhatrapati Shivaji International Airport" },
];

//Reusable Transport Card Component

function TransportCard({ icon, title, content }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center gap-4 p-5 bg-blue-600 text-white">
        <div className="flex-shrink-0">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div
        className="p-6 prose prose-lg text-gray-700 max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

// --- Main Page Component ---

function TravelPage() {
  return (
    
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container max-w-6xl mx-auto px-6 py-16 md:py-24">

        
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Travel & Venue
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* --- Section 1: About the City & Climate --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
          
          {/* Main "About" Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About Bhubaneswar, Odisha, India
            </h2>
            <div
              className="prose prose-lg text-gray-700 max-w-none"
              dangerouslySetInnerHTML={{ __html: aboutCity }}
            />
          </div>
          
          {/* Side Cards (Climate & Places) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Climate in December
              </h3>
              <ul className="space-y-3">
                {climateItems.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-500">{item.name}</span>
                    <span className="text-lg text-gray-800">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Places to Visit
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                {placesToVisit.map((place) => (
                  <li key={place} className="text-lg text-gray-700">{place}</li>
                ))}
              </ul>
              <a 
                href="http://www.odishatourism.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Odisha Tourism Website
              </a>
            </div>
          </div>
        </section>

        {/* --- Section 2: How to Reach --- */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How to Reach Bhubaneswar
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <TransportCard 
              icon={<PlaneIcon />}
              title="Air Connection"
              content={airContent}
            />
            <TransportCard 
              icon={<TrainIcon />}
              title="Railway Connection"
              content={railwayContent}
            />
            <TransportCard 
              icon={<RoadIcon />}
              title="Road Connection"
              content={roadContent}
            />
          </div>
          
          {/* Airports List */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Important International Airports in India
            </h3>
            <ul className="space-y-3">
              {airports.map((port) => (
                <li key={port.name} className="flex flex-col pb-3 border-b border-gray-200 last:border-b-0">
                  <span className="text-lg font-semibold text-gray-800">{port.name}</span>
                  <span className="text-md text-gray-600">
                    {port.link ? (
                      <a href={port.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{port.airport}</a>
                    ) : (
                      port.airport
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Section 3: Location Map --- */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Location Map
          </h2>
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Kalinga+Institute+of+Industrial+Technology,+Chandrasekharpur,+Odisha&amp;aq=0&amp;oq=Kalinga+Institute+Of+Industrial+Technology&amp;sll=20.352352,85.818329&amp;sspn=0.097693,0.158443&amp;ie=UTF8&amp;hq=Kalinga+Institute+of+Industrial+Technology,+Chandrasekharpur,+Odisha&amp;t=m&amp;ll=20.3435,85.819788&amp;spn=0.041204,0.038109&amp;z=14&amp;output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default TravelPage;