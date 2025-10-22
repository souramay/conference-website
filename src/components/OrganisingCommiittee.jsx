import React from 'react';


const committeeData = [
  {
    title: "Chief Patron",
    members: [
      { name: "Achyuta Samanta", affiliation: "KIIT, India" }
    ]
  },
  {
    title: "Patron",
    members: [
      { name: "Hrushikesha Mohanty", affiliation: "KIIT, India" }
    ]
  },
  {
    title: "Honorary General Chairs",
    members: [
      { name: "Rajkumar Buyya", affiliation: "The University of Melbourne, Australia" },
      { name: "Xiao-Zhi Gao", affiliation: "Aalto University, Finland" }
    ]
  },
  {
    title: "General Chairs",
    members: [
      { name: "Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
      { name: "Samaresh Mishra", affiliation: "KIIT Deemed to be University, India" },
      { name: "Kuan-Ching Li", affiliation: "Providence University, Taiwan" },
      { name: "Prasant Kumar Pattnaik", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Program Chairs",
    members: [
      { name: "Aleena Swetapadma", affiliation: "KIIT Deemed to be University, India" },
      { name: "Bighnaraj Naik", affiliation: "VSSUT, India" },
      { name: "Jitendra Kumar Rout", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Organizing Chair",
    members: [
      { name: "Himansu Das", affiliation: "KIIT Deemed to be University, India" },
      { name: "Siddharth S Rautaray", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Conference Management Chairs",
    members: [
      { name: "Updated Soon...", affiliation: null }
    ]
  },
  {
    title: "Session Management Chair",
    members: [
      { name: "Manjusha Pandey", affiliation: "KIIT Deemed to be University, India" },
      { name: "Ajay Kumar Jena", affiliation: "KIIT Deemed to be University, India" },
      { name: "Suneeta Mohanty", affiliation: "KIIT Deemed to be University, India" },
      { name: "Minakhi Rout", affiliation: "KIIT Deemed to be University, India" },
      { name: "Suchismita Das", affiliation: "KIIT Deemed to be University, India" }
      
    ]
  },
  {
    title: "Publication Chairs",
    members: [
      { name: "Suresh Chandra Moharana", affiliation: "KIIT Deemed to be University, India" },
      { name: "Ajaya Kumar Parida", affiliation: "KIIT Deemed to be University, India" },
      { name: "Chittaranjan Pradhan", affiliation: "KIIT Deemed to be University, India" },
      { name: "Mahendra Kumar Gourisaria", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Publicity Chairs",
    members: [
      { name: "Raghvendra Kumar Agrawal", affiliation: "Lakshmi Narain College of Technology, Bhopal, India" },
      { name: "Krishna Chakravarty", affiliation: "KIIT Deemed to be University, India" },
      { name: "Souvik Pal", affiliation: "Brainware University, India" },
      { name: "Kunal Anand", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Registration Chairs",
    members: [
      { name: "Sital Dash", affiliation: "KIIT Deemed to be University, India" },
      { name: "R. N. Ramakant Parida", affiliation: "KIIT Deemed to be University, India" },
      { name: "Abhaya Kumar Sahoo", affiliation: "KIIT Deemed to be University, India" },
      { name: "Roshni Pradhan", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Web Management Chair",
    members: [
      { name: "Akash Jaiswal", affiliation: "KIIT Deemed to be University, India" }
    ]
  },
  {
    title: "Organizing Committee",
    members: [
      { name: "Updated Soon...", affiliation: null }
    ]
  }
];


function CommitteeCard({ title, members }) {
  return (
    <div className="bg-white rounded-xl shadow-lg h-full p-6 transition-all duration-300 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h3>
      <ul className="space-y-3">
        {members.map((member, index) => (
          <li key={index}>
            {member.affiliation ? (
              <>
                <span className="block font-semibold text-gray-800">{member.name}</span>
                <span className="block text-sm text-gray-600">{member.affiliation}</span>
              </>
            ) : (
              // This handles the "Updated Soon..." text
              <span className="block text-gray-500 italic">{member.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



function CommitteePage() {
  return (
    
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24">

       
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Organising Committee
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeData.map((committee) => (
            <CommitteeCard 
              key={committee.title}
              title={committee.title} 
              members={committee.members} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default CommitteePage;