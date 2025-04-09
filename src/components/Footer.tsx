
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-agroshop-green text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-agroshop-green"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9.5 13.5 2.5 2.5 2.5-2.5" />
                  <path d="M7 10h2.5" />
                  <path d="M14.5 10H17" />
                  <path d="M8 7h8" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-2xl">AgroShop</h2>
                <p className="text-xs -mt-1">Pet Shop & Clínica</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Cuidando com amor e dedicação do seu melhor amigo desde 2012.
            </p>
            <p className="text-white/80">
              © {year} Agroshop Pet Shop. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Consulta Veterinária
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Banho e Tosa
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Vacinação
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Exames
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Hospedagem
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                Av. Paulista, 1000 - Bela Vista, São Paulo - SP
              </li>
              <li className="text-white/80">
                (11) 3456-7890
              </li>
              <li className="text-white/80">
                (11) 98765-4321 (WhatsApp)
              </li>
              <li className="text-white/80">
                contato@agroshop.com.br
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-agroshop-brown py-4">
        <div className="container-custom text-center text-white/80 text-sm">
          <p>
            Site desenvolvido para fins de portfólio - Todos os direitos reservados © {year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
