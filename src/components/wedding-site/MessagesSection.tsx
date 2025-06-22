
import { useState } from "react";
import { MessageCircle, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MessagesSection = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Maria Silva",
      message: "Estamos muito felizes por vocês! Que Deus abençoe esta união! 💕",
      date: "Há 2 dias"
    },
    {
      id: 2,
      name: "João Santos", 
      message: "Casal lindo! Desejamos muito amor e felicidade para vocês dois! 🎉",
      date: "Há 3 dias"
    },
    {
      id: 3,
      name: "Ana Costa",
      message: "Que alegria saber do casamento de vocês! Estaremos lá para celebrar! ❤️",
      date: "Há 1 semana"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: "Agora"
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="messages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>Recados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Deixe seu Recado
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deixe uma mensagem carinhosa para os noivos! Seus votos e desejos são muito especiais para nós.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Formulário para nova mensagem */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border border-green-100 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                  className="border-green-300 focus:border-green-500"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Deixe sua mensagem carinhosa aqui..."
                  value={newMessage.message}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:border-green-500 focus:outline-none resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Recado
              </Button>
            </form>
          </div>

          {/* Lista de mensagens */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-8">
              Mensagens dos Amigos
            </h3>
            
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-serif text-green-700">
                      {msg.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {msg.name}
                      </h4>
                      <span className="text-gray-500 text-sm">
                        {msg.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                  
                  <Heart className="h-5 w-5 text-green-500 flex-shrink-0" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
