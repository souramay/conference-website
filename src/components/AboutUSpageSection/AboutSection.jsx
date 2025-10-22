function AboutSection({ title, content, imageUrl }) {
  return (
    
    <section className="bg-white shadow-xl rounded-2xl p-6 md:p-10 lg:p-12">
      
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-10">
        {title}
      </h2>

      
      <div className="mb-8 md:mb-10">
        <img 
          src={imageUrl} 
          alt={title} 
          
          className="w-full max-h-[500px] object-cover rounded-xl shadow-lg mx-auto 
                     transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.005]"
        />
      </div>

     
      <div
        // Changed prose container to max-w-4xl for comfortable reading line length
        className="prose prose-lg text-gray-700 prose-strong:text-gray-900 leading-relaxed max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};

export default AboutSection;