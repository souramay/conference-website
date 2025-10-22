
import { useEffect, useState } from 'react';
import HeroSection from './HomeBody/HeroSection';
import OrganizedBy from './HomeBody/OrganizedBy';
import SubmissionInfo from './HomeBody/SubmissionInfo';

function HomeBody() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Home.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching page data:', error));
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Loading Conference Data...</p>
      </div>
    );
  }

  return (
  
    <div className="flex flex-col min-h-screen font-sans">
      
      
      <HeroSection 
        title={data.site.title}
        subtitle={data.site.subtitle} 
        heroData={data.hero}
        aboutTitle={data.about.title} 
        aboutContent={data.about.content} 
        marqueeData={data.marquee}
      />
      
     
      
      <main className="flex-grow">
        
       
        <OrganizedBy  className=""
          title={data.organizedBy.title} 
      
          organization={data.organizedBy.organization} 
        />
        

        <SubmissionInfo 
          title={data.submission.title} 
          content={data.submission.content} 
        />

      </main>
    </div>
  );
}

export default HomeBody;