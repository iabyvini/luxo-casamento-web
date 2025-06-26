
const EditorialManifestoSection = () => {
  return (
    <div className="editorial-modern-manifesto bg-black text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">
          Our Manifesto
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            Love is not just a feeling—it's a choice we make every day.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
            Today, we choose each other. Today, we choose forever.
          </p>
        </div>
      </div>
      
      <style>{`
        .editorial-modern-manifesto h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-manifesto p {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default EditorialManifestoSection;
