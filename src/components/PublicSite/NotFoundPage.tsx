
const NotFoundPage = () => {
  console.log('🚫 NotFoundPage renderizada');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gold-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Site não encontrado</h1>
        <p className="text-lg text-gray-600 mb-8">
          O site que você está procurando não existe, não está publicado ou pode estar temporariamente indisponível.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors"
          >
            Voltar à Home
          </a>
          <p className="text-sm text-gray-500">
            Se você acredita que isso é um erro, entre em contato conosco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
