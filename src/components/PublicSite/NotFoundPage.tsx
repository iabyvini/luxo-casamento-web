
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gold-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Site não encontrado</h1>
        <p className="text-lg text-gray-600 mb-8">
          O site que você está procurando não existe ou não está publicado.
        </p>
        <a 
          href="/" 
          className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors"
        >
          Voltar à Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
