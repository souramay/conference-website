import React from 'react';

// --- Speaker Data (Plain Text Abstracts) ---
const speakersData = [
  {
    name: "Laxmi N. Bhuyan",
    imageUrl: "/speakers/lnb.jpg", // Adjust path as needed
    titles: [
      "Life Fellow IEEE, Fellow ACM, Fellow AAAS",
      "Distinguished Professor, Department of Computer Science and Engineering,",
      "University of California, Riverside (UCR). California, USA."
    ],
    talkTitle: "ENERGY SAVING IN DATA CENTERS",
    // Abstract as an array of paragraphs
    talkAbstract: [
      "U.S. data center electricity consumption grew by roughly 36% between 2005 and 2014 to about 70 Billion KWh/year, or 12 billion U.S. dollars. Based on current estimates, they are projected to consume approximately 73 billion kWh in 2020 due to the application of many power saving techniques. The last decade has also brought an explosive growth of delay-sensitive interactive services that have become an integral part of our lives and constituted an increasingly high portion of data center workloads. This talk presents our current research efforts to reduce energy consumption in data center servers for latency sensitive applications while satisfying the tail latency constraints. We apply both DVFS and CPU sleep states intelligently to save energy. We also introduce an approximation technique that can be applied to interactive applications, like web search, to further reduce the power consumption while maintaining satisfactory quality."
    ]
  },
  {
    name: "Rajkumar Buyya",
    imageUrl: "/speakers/rajkumar2015.jpg",
    titles: [
      "Director, Cloud Computing and Distributed Systems (CLOUDS) Lab, The University of Melbourne, Australia.",
      "CEO, Manjrasoft Pvt Ltd, Melbourne, Australia",
      "Fellow IEEE, Life Member of ACM",
      "Redmond Barry Distinguished Professor of Computer Science and Software Engineering"
    ],
    talkTitle: "New Frontiers in Cloud and Edge/Fog Computing for Big Data & Internet-of-Things Applications",
    // Abstract as an array of paragraphs
    talkAbstract: [
      "Computing is being transformed to a model consisting of services that are delivered in a manner similar to utilities such as water, electricity, gas, and telephony. Cloud computing paradigm has turned this vision of \"computing utilities\" into a reality. It offers infrastructure, platform, and software (application) as services, which are made available as subscription-based services in a pay-as-you-go model to consumers. Cloud application platforms need to offer (1) APIs and tools for rapid creation of elastic applications and (2) a runtime system for deployment of applications on geographically distributed computing infrastructure in a seamless manner.",
      "The Internet of Things (IoT) paradigm enables seamless integration of cyber-and-physical worlds and opening up opportunities for creating new class of applications for domains such as smart cities. The emerging Fog computing paradigm is extends Cloud computing model to edge resources for latency sensitive IoT applications.",
      "This keynote presentation will cover (a) 21st century vision of computing and identifies various IT paradigms promising to deliver the vision of computing utilities; (b) innovative architecture for creating elastic Clouds integrating edge resources and managed Clouds, (c) Aneka, a Cloud Application Platform, for rapid development of Cloud/Big Data applications and their deployment on private/public Clouds with resource provisioning driven by SLAs, (d) a novel FogBus software framework with Blockchain-based data-integrity management for facilitating end-to-end IoT-Fog(Edge)-Cloud integration for execution of sensitive IoT applications, (e) experimental results on deploying Cloud and Big Data/Internet-of-Things (IoT) applications in engineering, and health care, satellite image processing, and smart cities on elastic Clouds; and (f) directions for delivering our 21st century vision along with pathways for future research in Cloud and Edge/Fog computing."
    ]
  },
  {
    name: "Kaushal Kumar Shukla",
    imageUrl: "/speakers/kks.jpg",
    titles: [
      "Professor and Dean (Faculty Affairs)",
      "Department of Computer Science and Engineering",
      "Indian Institute of Technology (BHU), Varanasi, India"
    ],
    talkTitle: "Self Organizing Neural Networks for Clustering Data Streams",
    talkAbstract: null // No abstract
  },
  {
    name: "Shekhar Verma",
    imageUrl: "/speakers/sverma.jpg",
    titles: [
      "Professor",
      "Department of Information Technology",
      "Indian Institute of Information Technology - Allahabad, India"
    ],
    talkTitle: null, // No talk title
    talkAbstract: null
  },
  {
    name: "Deepak Puthal",
    imageUrl: "/speakers/DP.jpg", // Adjust path as needed
    titles: [
      "School of Computing, Newcastle University, Newcastle upon Tyne, United Kingdom",
      "Honorary Fellow at Faculty of Engineering and Information Technology, University of Technology Sydney, Australia"
    ],
    talkTitle: "Internet of Things Workflow Orchestration and Cyber Defense",
    // Abstract as an array of paragraphs
    talkAbstract: [
      "We are in the era of the Internet of Things (IoT) and surrounded by Internet-enabled devices in our everyday life. Identifying a suitable device configuration, software and infrastructures in the context of user requirements are fundamental to the success of delivering IoT applications. Cyber defense refers to the protection of the interconnected IoT systems, such as hardware, software, and data from adversaries. The IoT systems run on both hardware and software, where some of the hardware do not maintain basic security standards and software has not been well tested for security and safety. Vulnerable hardware and software create opportunities for adversaries to easily break into the system and misuse the user’s data by violating data security policies. With the importance of IoT in a wide range of applications and nonstandard hardware and software opens a discussion platform to build next generation cyber defense mechanisms of IoT Systems. This talk will cover IoT workflow and current and future of IoT system security."
    ]
  }
];


function SpeakerCard({ speaker }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row items-start">
     
      <div className="md:w-1/4 flex-shrink-0 p-6 md:p-8 flex justify-center">
        <img
          src={speaker.imageUrl}
          alt={speaker.name}
          className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-200 shadow-md"
        />
      </div>

      
      <div className="md:w-3/4 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
        {speaker.titles.map((title, index) => (
          <p key={index} className="text-gray-600 text-sm leading-snug">{title}</p>
        ))}

        {speaker.talkTitle && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-blue-600 mb-3">{speaker.talkTitle}</h4>
            
         
            {speaker.talkAbstract && Array.isArray(speaker.talkAbstract) && (
              <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                {speaker.talkAbstract.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
            
          </div>
        )}
      </div>
    </div>
  );
}



function KeynoteSpeakersPage() {
  return (
   
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container max-w-5xl mx-auto px-6 py-16 md:py-24">

      
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Keynote & Invited Speakers
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

      
        <div className="space-y-12">
          {speakersData.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>

     
        <div className="mt-16 md:mt-20 text-center text-gray-500 italic">
          <p>More speakers will be updated soon.</p>
        </div>

      </div>
    </div>
  );
}

export default KeynoteSpeakersPage;
