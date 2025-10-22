
import React from 'react';

function SubmissionInfo({ title, content }) {
  return (

    <section className="py-16 md:py-24 bg-white text-gray-800">
   
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          {title || 'Paper Submission'}
        </h2>
        
      
        <div 
          className="prose lg:prose-lg max-w-none text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
        
      </div>
    </section>
  );
}

export default SubmissionInfo;