
const BohoDressCodeSection = () => {
  return (
    <div className="boho-festival-dress bg-gradient-to-br from-orange-50 to-amber-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl mb-12 text-amber-900">
          Dress Code
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-600 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-amber-900">Para Elas</h3>
            <p className="text-amber-800 mb-4">Vestidos fluidos, estampas florais, cores terrosas</p>
            <div className="flex justify-center space-x-2">
              <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-600 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-amber-900">Para Eles</h3>
            <p className="text-amber-800 mb-4">Camisas linho, calças chino, tons naturais</p>
            <div className="flex justify-center space-x-2">
              <div className="w-8 h-8 bg-stone-600 rounded-full"></div>
              <div className="w-8 h-8 bg-amber-700 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .boho-festival-dress h2 {
          font-family: 'Dancing Script', cursive;
          font-size: 3.5rem;
        }
        
        .boho-festival-dress h3 {
          font-family: 'Pacifico', cursive;
        }
        
        .boho-festival-dress p {
          font-family: 'Nunito', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default BohoDressCodeSection;
