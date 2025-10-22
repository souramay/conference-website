import React from 'react';

// --- Data (Parsed from your HTML) ---
const committeeMembers = [
  { name: "Wenwu Wang", affiliation: "University of Surrey, UK" },
  { name: "Padmalochan Bera", affiliation: "IIT Bhubaneswar, India" },
  { name: "Ashutosh Bhatia", affiliation: "BITS Pilani, India" },
  { name: "Pierluigi Siano", affiliation: "Universita degli Studi di Salerno, Italy" },
  { name: "D. Janakiram", affiliation: "IIT Madras, India" },
  { name: "Roberto Caldelli", affiliation: "Universita degli Studi Firenze, Italy" },
  { name: "Satchidananda Dehuri", affiliation: "Fakir Mohan University, India" },
  { name: "C. W. Chow", affiliation: "National Chiao Tung University, Taiwan" },
  { name: "Mohd Helmy Abd Wahab", affiliation: "Universiti Tun Hussein Onn, Malaysia" },
  { name: "Kuntal Ghosh", affiliation: "ISI Kolkata, India" },
  { name: "G C Deka", affiliation: "Ministry of Skill Development & Entrepreneurship, India" },
  { name: "Chinmaya Mahapatra", affiliation: "University of British Columbia, Canada" },
  { name: "M S. Kakkasageri", affiliation: "Basaveshwar Engineering College (Autonomous), India" },
  { name: "Y-Chuang Chen", affiliation: "Minghsin University of Science and Technology, Taiwan" },
  { name: "Bighnaraj Naik", affiliation: "VSSUT, India" },
  { name: "Prasant Kumar Pattnaik", affiliation: "KIIT University, India" },
  { name: "Aniket Mahanti", affiliation: "University of Auckland, New Zealand" },
  { name: "Dilip Ranjan Mohanty", affiliation: "Wellington Management, Massachusetts, USA" },
  { name: "S S Rautaray", affiliation: "KIIT University, India" },
  { name: "Qurban A Memon", affiliation: "UAE University" },
  { name: "Hajjam El Hassani", affiliation: "Univbersite de Bourgogne Franche Comte, France" },
  { name: "Anjali Mathur", affiliation: "Jaipur National University, India" },
  { name: "B.K. ROUT, FIE", affiliation: "Birla Institute of Technology & Science, Pilani, India" },
  { name: "Somanath Tripathy", affiliation: "IIT Patna, India" },
  { name: "Veena Goswami", affiliation: "KIIT University, India" },
  { name: "Gautam K. Das", affiliation: "IIT Guwahati, India" },
  { name: "Hemant Kumar Rath", affiliation: "TCS Research & Innovation, Singapore" },
  { name: "Ruggero Donida Labati", affiliation: "Universita' degli Studi di Milano, Italy" },
  { name: "Gayadhar Panda", affiliation: "NIT Meghalaya, India" },
  { name: "Ala' Aburumman", affiliation: "University of South Australia, Australia" },
  { name: "Himansu Das", affiliation: "KIIT Deemed to be University, India" },
  { name: "Gunter Fahrnberger", affiliation: "University of Hagen, Germany" },
  { name: "Venkata Rao Kasukurthi", affiliation: "Andhra university College of Engineering, India" },
  { name: "Pratyay Kuila", affiliation: "NIT Sikkim, India" },
  { name: "Babita Majhi", affiliation: "Central university Bilaspur, India" },
  { name: "Durga Prasad Mohapatra", affiliation: "NIT Rourkela, India" },
  { name: "Chandal Nahak", affiliation: "IIT Kharagpur, India" },
  { name: "Gyanendra Kr. Verma", affiliation: "NIT Kurukshetra, INDIA" },
  { name: "Pradheepkumar Singaravelu", affiliation: "NEC India Pvt Ltd, India" },
  { name: "Marco Mussetta", affiliation: "Politechico Di Milano, Italy" },
  { name: "Indrajit Saha", affiliation: "NITTTR Kolkata, India" },
  { name: "Vasanth Iyer", affiliation: "Florida International University, Warrensburg, MO" },
  { name: "Felix Albu", affiliation: "Valahia University of Targoviste, Romania" },
  { name: "Mohamed Amine Ferrag", affiliation: "Guelma University, Algeria" },
  { name: "Neha Sharma", affiliation: "ZIBACAR, India" },
  { name: "Monish Chatterjee", affiliation: "Asansol Engineering College, India" },
  { name: "Angelo Genovese", affiliation: "Universita degli Studi di Milano , Italy" },
  { name: "Pankaj Kumar Sa", affiliation: "NIT Rourkela, India" },
  { name: "Carlo Vallati", affiliation: "University of Pisa, Italy" },
  { name: "Radu-Emil Precup, SMIEEE", affiliation: "Politehnica University of Timisoara, Romania" },
  { name: "Bernd E. Wolfinger", affiliation: "University of Hamburg, Germany" },
  { name: "Meenakshi D'Souza", affiliation: "IIIT Bangalore, India" },
  { name: "P G Sapna", affiliation: "Coimbatore Institute of Technology, India" },
  { name: "Vinod Kumar Singh", affiliation: "SRGI, Jhansi, (U.P.), India" },
  { name: "Sudhakar Pandey", affiliation: "NIT Raipur" },
  { name: "Neeraj Kumar", affiliation: "Thapar University Patiala, India" },
  { name: "Natarajan Meghanathan", affiliation: "Jackson State University, USA" },
  { name: "J Mohanty", affiliation: "KIIT Deemed to be University, India" },
  { name: "Malka Halgamuge", affiliation: "The University of Melbourne, Australia" },
  { name: "Sarangapani Jagannathan", affiliation: "Missouri University of Science and Technology, USA" },
  { name: "Alok kumar Jagadev", affiliation: "KIIT University, India" },
  { name: "Subhankar Dhar", affiliation: "San Jose State University, USA" },
  { name: "Santi Maity", affiliation: "IIEST, India" },
  { name: "Srinivasan R", affiliation: "M.S.Ramaiah Inst. of Technology, India" },
  { name: "S K Swain", affiliation: "KIIT University, India" },
  { name: "Suma V", affiliation: "Dayananda Sagar Institutions, India" },
  { name: "Sipra DasBit", affiliation: "IIEST, India" },
  { name: "Kiran K", affiliation: "UVCE, India" },
  { name: "Dilip Kumar Shaw", affiliation: "National Institute of Technology, Jamshedpur, Jharkhand, India" },
  { name: "P S Manoharan", affiliation: "Thiagarajar College of Engineering, Madurai, India" },
  { name: "Mrutyunjaya Panda", affiliation: "Utkal University, Bhubaneswar, Odisha,India" },
  { name: "Florin Popentiu Vladicescu", affiliation: "University Politehnica of Bucharest, Romania" },
  { name: "Alok Ranjan Prusty", affiliation: "Ministry of Skill Development and Entrepreneurship, Government of India" },
  { name: "Manoj Kumar Nigam", affiliation: "MATS University, Raipur C.G., India" },
  { name: "Subarna Shakya", affiliation: "Pulchowk Campus, Institute of Engineering, Tribhuvan University, Nepal" },
  { name: "R.Geetharamani", affiliation: "Anna University . Chennai, India" },
  { name: "Arun Agarwal", affiliation: "ITER, Siksha 'O' Anusandhan Deeemed to be University, Odisha, India" },
  { name: "Kauser Ahmed P", affiliation: "VIT, Vellore, India" },
  { name: "Kapil K. Wankhade", affiliation: "Jhulelal Institute of Technology (JIT), Nagpur, MS, India" },
  { name: "Nagaraj V. Dharwadkar", affiliation: "Rajarambapu Institute of Technology, Islampur, Maharashtra, India" },
  { name: "M E Paramasivam", affiliation: "Sona College of Technology, Salem, India" },
  { name: "Manju Darbari", affiliation: "BBD University, Lucknow, India" },
  { name: "Mohd. Sadiq", affiliation: "Indian Institute of Science, Bangalore, India" },
  { name: "Malaya Kumar Nath", affiliation: "NIT Puducherry, Karaikal, India" },
  { name: "P.Sivakumar", affiliation: "Dr NGP Institute of Technology, Coimbatore, Tamilnadu, India" },
  { name: "P.M.K.Prasad", affiliation: "GVP College of Engineering for Women, Visakhapatnam, India" },
  { name: "Rajan Patel", affiliation: "Gandhinagar Institute of Technology (GIT), Moti Bhoyan, Gandhinagar, India" },
  { name: "Nimisha P. Patel", affiliation: "Sankalchand Patel College of Engineering, Visnagar, India" },
  { name: "S. S. Thakur", affiliation: "MCKV Institute of Engineering, Howrah, India" },
  { name: "Rutuparna Panda", affiliation: "VSS University of Technology (VSSUT), Burla, India" },
  { name: "Mahua Nandy Pal", affiliation: "MCKV Institute of Engineering, Howrah, India" },
  { name: "Narayan A Joshi", affiliation: "Dharmsinh Desai University, Nadiad, Gujarat, India" },
  { name: "Pabitra Mohan Khilar", affiliation: "NIT Rourkela, India" },
  { name: "Sumanta Panda", affiliation: "VSSUT, Burla, India" },
  { name: "Tarun Kumar", affiliation: "Government Polytechnic Sutawali Amroha, UP, India" },
  { name: "Neelamadhaba Padhy", affiliation: "GIET University , India" },
  { name: "Jataprakash Panda", affiliation: "VSSUR, Burla, India" },
  { name: "Rashmi M. R.", affiliation: "Amrita School of Engineering, India" },
  { name: "Dinesh Kumar", affiliation: "Vignan Institute of Technology & Science (VITS), Hyderabad, India" },
  { name: "Biswa Pratap Singh", affiliation: "National Central University, Taiwan" },
  { name: "Anil Kumar Verma", affiliation: "Thapar University, India" },
  { name: "Annappa B", affiliation: "National Institute of Technology Karnataka Surathkal, India" },
  { name: "Ranjit Rajak", affiliation: "Dr.HariSingh Gour Central University,India" },
  { name: "K.Sridhar Patnaik", affiliation: "BIT,Mesra,Ranchi, India" },
  { name: "Ali Mirza Mahmood", affiliation: "DMS SVH College of Engineering, India" },
  { name: "G Sahoo", affiliation: "BIT,Mesra,Ranchi, India" },
  { name: "Sachin D Ruikar", affiliation: "Walchand College of Engg., Sangli, Maharashtra, India" },
  { name: "Chandan Jyoti Kumar", affiliation: "Don Bosco College of Engineering & Technology, India" },
  { name: "Sourodeep Bhattacharjee", affiliation: "CSIR - Central Mechanical Engineering Research Institute, India" },
  { name: "K. M. Azharul Hasan", affiliation: "Khulna University of Engineering & Technology (KUET), Bangladesh" },
  { name: "Kamaljit Lakhtaria", affiliation: "Sir Padampat Singhania University, India" },
  { name: "Ujwala Baruah", affiliation: "NIT, Silchar, India" },
  { name: "Samarjeet Borah", affiliation: "Sikkim Manipal Institute of Technology, India" },
  { name: "Rabindra K. Barik", affiliation: "KIIT Deemed to be University, India" },
  { name: "Subrat Kumar Pattanayak", affiliation: "National Institute of Technology,Raipur,India" },
  { name: "Dibya Jyoti Bora", affiliation: "The Assam Kaziranga University, Jorhat, Assam" },
  { name: "Jagannath Singh", affiliation: "KIIT Deemed to be University, India" },
  { name: "Harishchandra Dubey", affiliation: "University of Texas at Dallas, Texas, USA" },
  { name: "Shamim H Ripon", affiliation: "East West University, Dhaka, Bangladesh" },
  { name: "Subhansu Bandyopadhyay", affiliation: "University of Calcutta, India" },
  { name: "Virender Kadyan", affiliation: "Chitkara University, India" },
  { name: "Deepak Ranjan Nayak", affiliation: "IIITDM Kanchipuram, India" },
  { name: "Asis Tripathy", affiliation: "VIT Vellore, India" },
  { name: "Abinash Tripathy", affiliation: "Raghu Engineering College, Visakhapatnam, India" },
  { name: "Jyotsna Kumar Mandal", affiliation: "Kalyani University, India" },
  { name: "Monalisa Biswal", affiliation:"National Institute of Technology, Raipur, India" },
  { name: "Sanjeet Nayak", affiliation: "Manipal University Jaipur, India" },
  { name: "Suvendu Nayak", affiliation: "C. V. Raman College of Engineering, Bhubanneswar, India" },
  { name: "Ranjita Kumari Dash", affiliation: "PES University, Bengaluru, India" }
];



function ProgrammeCommitteePage() {
  return (
    
    <div className="bg-white min-h-screen pt-20">
      <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24">

       
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Programme Committee
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-x-8 gap-y-6">
          {committeeMembers.map((member, index) => (
           
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

export default ProgrammeCommitteePage;