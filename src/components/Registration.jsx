import React from 'react';


const InfoIcon = () => (
 <svg className="w-6 h-6 mr-3 inline-block text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const PackageIcon = () => (
<svg className="w-6 h-6 mr-3 inline-block text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
);
const AlertIcon = () => (
<svg className="w-6 h-6 mr-3 inline-block text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
);
const CreditCardIcon = () => (
 <svg className="w-6 h-6 mr-3 inline-block text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
);
const CancelIcon = () => (
<svg className="w-6 h-6 mr-3 inline-block text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const MailIcon = () => (
<svg className="w-6 h-6 mr-3 inline-block text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

// Map icon identifiers to components
const icons = {
  info: <InfoIcon />,
  package: <PackageIcon />,
  alert: <AlertIcon />,
  creditCard: <CreditCardIcon />,
  cancel: <CancelIcon />,
  mail: <MailIcon />,
};


const pageTitle = "Registration Information";

const generalInfo = {
  title: "General Information",
  icon: 'info',
  content: [
    "Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). Submitted papers must be unpublished and not currently under review for any other publication. Authors of accepted papers will need to sign the Springer consent to publish form and present their paper at the conference. Springer reserves the right to exclude a paper from distribution after the conference (e.g., removal from Springer Link) if the paper is not presented at the conference.",
    "Each accepted article is required to be registered at the full rate by at least one author. All accepted and registered papers will be published in the conference proceedings. If an author has got more than one accepted paper, each paper must also be registered. If the author does not complete the conference registration, the paper will be automatically removed from the conference proceedings.",
    "Please note that papers will not be included in the proceedings unless at least one author pays the registration fee by the deadline.",
  ],
  listItems: [
    "The number of pages is limited to 8 per paper.",
    "It is obligatory for at least one author to register, attend the conference, and present each accepted paper.",
  ]
};

const registrationIncludes = {
  title: "Conference Registration Includes",
  icon: 'package',
  items: [
    "Welcome reception with conference kit",
    "Participation in all conference sessions",
    "High tea, lunch, and banquet dinner",
    "Conference Certificate"
  ]
};

const deadlineNotes = {
  title: "Deadline & Important Notes",
  icon: 'alert',
  deadline: "Obligatory registration deadline: October 15, 2019.",
  notesTitle: "Note:",
  notes: [
    "The registration fee does not cover accommodation, transportation, etc.",
    "Attendees cannot pick up conference kits for colleagues without prior written permission from the original registrant.",
    "Conference Attendee / Co-author participant / Listener registration fee does not cover the registration kit and proceedings.",
    "Without full author registration and presentation at the conference, the paper will not be published in Springer Proceedings.",
    "All registration fees specified exclude bank charges.",
    "All authors, including Indians currently residing/working abroad, should make payments in USD."
  ]
};

const paymentInfo = {
  title: "Payment of Registration Fee",
  icon: 'creditCard',
  intro: "To be published in the conference proceedings (AISC Series, Springer), an author of an accepted paper is required to register for the conference at the full rate, and the paper must be presented by an author of that paper at the conference.",
  fees: [
    "Indian authors: 6000 INR per paper",
    "International authors: 200 USD per paper",
    "Conference attendee / Co-author participant / Listener: 1000 INR"
  ],
  methods: "Participants can use online transfer (within India only) or wire transfer (from outside India) for paying registration fees.",
  bankDetailsTitle: "Bank Transfer Details:",
  bankDetails: [
    { label: "Bank Name", value: "UNITED BANK OF INDIA" },
    { label: "Branch Details", value: "KIIT-BHUBANESWAR (1849)" },
    { label: "Account Name", value: "ICCAN" },
    { label: "Account Number", value: "18490102219" },
    { label: "IFSC Code", value: "UTBI0KITQ08" },
    { label: "MICR Code", value: "751027012" },
    { label: "SWIFT Code", value: "UTBIINBBBBS" }
  ]
};

const cancellationPolicy = {
  title: "Cancellation of Registration",
  icon: 'cancel',
  content: [
    "If any author wishes to cancel their registration, they must send an email to das.himansu2007@gmail.com on or before November 30, 2019. A processing fee of INR 3000 will be deducted from the paid registration fee, and the remaining amount will be returned.",
    "No requests for authorship cancellation or refund will be accepted after November 30, 2019 (this includes inability to participate due to VISA problems). However, presenter cancellations will be accepted if written notification is sent to das.himansu2007@gmail.com by November 30, 2019, at the latest."
  ],
  email: "das.himansu2007@gmail.com"
};

const contactInfo = {
  title: "Contact for Registration Queries",
  icon: 'mail',
  lines: [
    "Himansu Das",
    "Organizing Chair, ICCAN-2019",
    "School of Computer Engineering",
    "Campus-15, KIIT University",
    "Bhubaneswar-751024, Odisha, India",
  ],
  email: "das.himansu2007@gmail.com"
};


function RegistrationPage() {
  const renderEmailLink = (text, email) => {
    return text.replace(email, `<a href="mailto:${email}" class="text-blue-600 hover:underline">${email}</a>`);
  };

  return (
   
    <div className="bg-white min-h-screen pt-20">
      <div className="container max-w-4xl mx-auto px-6 py-16 md:py-24">

    
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {pageTitle}
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

    
        <div className="space-y-12 text-gray-700 text-lg leading-relaxed">

       
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              {icons[generalInfo.icon]} {generalInfo.title}
            </h2>
            {generalInfo.content.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            <ul className="list-disc list-inside mt-4 pl-4 space-y-1">
              {generalInfo.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="my-10 border-gray-200" />

         
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              {icons[registrationIncludes.icon]} {registrationIncludes.title}
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {registrationIncludes.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="my-10 border-gray-200" />

       
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              {icons[deadlineNotes.icon]} {deadlineNotes.title}
            </h2>
            <p className="text-red-600 font-bold text-xl mb-6">
              {deadlineNotes.deadline}
            </p>
            <h4 className="font-semibold text-lg mb-2">{deadlineNotes.notesTitle}</h4>
            <ul className="list-disc list-inside text-gray-600 italic space-y-1">
              {deadlineNotes.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </section>

          <hr className="my-10 border-gray-200" />

      
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              {icons[paymentInfo.icon]} {paymentInfo.title}
            </h2>
            <p className="mb-4">{paymentInfo.intro}</p>
            <ul className="font-semibold list-disc list-inside my-4 space-y-1">
              {paymentInfo.fees.map((fee, index) => (
                <li key={index}>{fee}</li>
              ))}
            </ul>
            <p className="mb-8">{paymentInfo.methods}</p>

       
            <div className="overflow-x-auto">
              <h4 className="font-semibold mb-4 text-xl">{paymentInfo.bankDetailsTitle}</h4>
              <table className="w-full text-left border border-collapse border-gray-300 mb-8 text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Detail</th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Information</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentInfo.bankDetails.map((detail) => (
                    <tr key={detail.label} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium text-gray-600">{detail.label}</td>
                      <td className="border border-gray-300 px-4 py-2">{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-10 border-gray-200" />

     
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              {icons[cancellationPolicy.icon]} {cancellationPolicy.title}
            </h2>
            {cancellationPolicy.content.map((paragraph, index) => (
              <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: renderEmailLink(paragraph, cancellationPolicy.email) }} />
            ))}
          </section>

          <hr className="my-10 border-gray-200" />

       
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              {icons[contactInfo.icon]} {contactInfo.title}
            </h2>
            <p className="italic">
              <strong>For any correspondence contact:</strong><br/>
              {contactInfo.lines.map((line, index) => (
                <React.Fragment key={index}>{line}<br/></React.Fragment>
              ))}
              Mail: <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">{contactInfo.email}</a>
            </p>
          </section>

        </div> 

      </div>
    </div>
  );
}

export default RegistrationPage;