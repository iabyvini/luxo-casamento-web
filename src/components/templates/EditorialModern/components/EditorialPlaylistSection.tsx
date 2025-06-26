
const EditorialPlaylistSection = () => {
  return (
    <div className="editorial-modern-playlist bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-light text-center mb-16 tracking-tight text-gray-900">
          Our Soundtrack
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 border border-gray-200">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-medium">First Dance</span>
              <span className="text-gray-600">Perfect - Ed Sheeran</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-medium">Entrance</span>
              <span className="text-gray-600">A Thousand Years - Christina Perri</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-medium">Reception</span>
              <span className="text-gray-600">Can't Stop the Feeling - Justin Timberlake</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .editorial-modern-playlist h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-playlist span {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default EditorialPlaylistSection;
