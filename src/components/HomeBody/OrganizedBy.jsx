
import React from 'react';


const LOGO_1_URL = '/logo/kiit.png'; 

function OrganizedBy({ title, organization }) {
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 text-gray-800">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {title || 'Organised By'}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          
          
          <div className="text-center max-w-[450px]">
            <img
              src={LOGO_1_URL} 
              alt="KIIT Logo"
              className="h-24 md:h-28 object-contain mx-auto"
            />
            
            <p className="mt-4 font-semibold text-lg text-gray-700">
              {organization}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OrganizedBy;