
const NeonTriviaSection = () => {
  return (
    <div className="neon-pop-trivia bg-gradient-to-br from-purple-900 via-black to-purple-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl mb-12 text-pink-500">
          Curiosidades do Casal
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-lg border-2 border-pink-500 shadow-neon">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Primeiro Encontro</h3>
            <p className="text-purple-300">Foi em um café futurista no centro da cidade 🚀</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-lg border-2 border-purple-500 shadow-neon">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Música Favorita</h3>
            <p className="text-pink-300">Daft Punk - One More Time 🎵</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-lg border-2 border-purple-500 shadow-neon">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Viagem dos Sonhos</h3>
            <p className="text-pink-300">Tóquio durante as olimpíadas 🌟</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-lg border-2 border-pink-500 shadow-neon">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Hobby Compartilhado</h3>
            <p className="text-purple-300">Gaming e cyberpunk culture 🎮</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .neon-pop-trivia h2 {
          font-family: 'Orbitron', monospace;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-trivia h3 {
          font-family: 'Audiowide', cursive;
        }
        
        .neon-pop-trivia p {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .shadow-neon {
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
        }
      `}</style>
    </div>
  );
};

export default NeonTriviaSection;
