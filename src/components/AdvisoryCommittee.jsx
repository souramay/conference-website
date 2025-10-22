import React from 'react';

// --- Data (Parsed from your HTML) ---
const committeeMembers = [
  { name: "Rajkumar Buyya, FIEEE", affiliation: "The University of Melbourne, Australia" },
  { name: "Prasant Mohapatra, FIEEE", affiliation: "University of California, USA" },
  { name: "Mohammad S. Obaidat, FIEEE", affiliation: "Fordham University, USA" },
  { name: "Vincenzo Piuri, FIEEE", affiliation: "University of Milano, Italy" },
  { name: "Carlos A. Coello Coello, FIEEE", affiliation: "CINVESTAV, Mexico" },
  { name: "Shekhar Verma", affiliation: "IIIT Allahabad, India" },
  { name: "Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
  { name: "Tirthankar Gayen", affiliation: "Jawaharlal Nehru University, India" },
  { name: "Dilip Kumar Partihary", affiliation: "IIT Kharagpur, India" },
  { name: "Joao Manuel R. S. Tavares", affiliation: "Universidade do Porto, Portugal" },
  { name: "Abhaprakash Praharaj", affiliation: "Tata Consultancy Services Limited, Germany" },
  { name: "Nilanjan Dey", affiliation: "Techno India College of Technology, India" },
  { name: "Sanjeevikumar Padmanaban", affiliation: "University of Johannesburg, South Africa" },
  { name: "Ganapati Panda", affiliation: "IIT Bhubaneswar, India" },
  { name: "Kenji Suzuki", affiliation: "Illinois Institute of Technology, USA" },
  { name: "Pabitra Pal Choudhury", affiliation: "ISI Kolkata, India" },
  { name: "Andrey V. Savchenko", affiliation: "National Research University Higher School of Economics, Russia" },
  { name: "Kuan-Ching Li", affiliation: "Providence University, Taiwan" },
  { name: "Bidyut B. Chaudhuri, LFIEEE", affiliation: "Indian Statistical Institute Kolkata, India" },
  { name: "Goutam Chakraborty", affiliation: "Iwate Prefectural University, Japan" },
  { name: "Pramod Kumar Meher", affiliation: "NTU, Sigapore" },
  { name: "Ishwar K. Sethi", affiliation: "Oakland University, Rochester, MI" },
  { name: "Raj Jain, LFIEEE", affiliation: "Washington University, USA" },
  { name: "PN Suganthan", affiliation: "NTU, Singapore" },
  { name: "Sagar Naik", affiliation: "University of Waterloo, Canada" },
  { name: "Ujjwal Maulik, FNAE", affiliation: "Jadavpur University, India" },
  { name: "Dhiya AL-Jumeily", affiliation: "Liverpool John Moores University, UK" },
  { name: "Anupam Agrawal", affiliation: "IIIT Allahabad, India" },
  { name: "Hugo Pedro Proenca", affiliation: "University of Beira Interior, Portugal" },
  { name: "L M Patnaik, INSA Senior Scientist", affiliation: "IISc Bangalore, India" },
  { name: "Tandra Pal", affiliation: "NIT Durgapur, India" },
  { name: "Xiao-Zhi Gao", affiliation: "Aalto University, Finland" },
  { name: "Prabhat Kumar Mahanti", affiliation: "University of New Brunswick, Canada" },
  { name: "Swapan Bhattacharya", affiliation: "Jadavpur University, India" },
  { name: "Prashant Pillai", affiliation: "University of Bradford, UK" },
  { name: "Arun K. Somani", affiliation: "Iowa State University, Ames, IA" },
  { name: "R. V. Rajakumar, Director", affiliation: "IIT Bhubaneswar, India" },
  { name: "Ashok Deshpande", affiliation: "University of California, Berkeley, USA" },
  { name: "Amitava Chatterjee", affiliation: "Jadavpur University, India" },
  { name: "Malay K. Kundu", affiliation: "ISI Kolkata, India" },
  { name: "Sushil K. Prasad", affiliation: "Georgia State University, USA" },
  { name: "Nabanita Das", affiliation: "ISI Kolkata, India" }
];


// --- Main Page Component ---
function AdvisoryCommitteePage() {
  return (
    // Page container with padding for fixed navbar
    <div className="bg-white min-h-screen pt-20">
      <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Page Title */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Advisory Committee
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Multi-column layout for the list */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-x-8 gap-y-6">
          {committeeMembers.map((member, index) => (
            // 'break-inside-avoid' prevents splitting
            <div key={index} className="mb-6 break-inside-avoid p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
              <span className="block font-semibold text-gray-800 text-lg">{member.name}</span>
              <span className="block text-gray-600">{member.affiliation}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AdvisoryCommitteePage;