
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-agroshop-beige sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-agroshop-green rounded-full p-2">
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
              className="text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9.5 13.5 2.5 2.5 2.5-2.5" />
              <path d="M7 10h2.5" />
              <path d="M14.5 10H17" />
              <path d="M8 7h8" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-agroshop-green">AgroShop</h1>
            <p className="text-xs text-agroshop-brown -mt-1">Pet Shop & Clínica</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-agroshop-brown hover:text-agroshop-green font-medium">
            Início
          </a>
          <a href="#services" className="text-agroshop-brown hover:text-agroshop-green font-medium">
            Serviços
          </a>
          <a href="#products" className="text-agroshop-brown hover:text-agroshop-green font-medium">
            Produtos
          </a>
          <a href="#about" className="text-agroshop-brown hover:text-agroshop-green font-medium">
            Sobre
          </a>
          <a href="#contact" className="text-agroshop-brown hover:text-agroshop-green font-medium">
            Contato
          </a>
          <Link to="/admin" className="text-agroshop-green hover:text-agroshop-green font-medium">
            Admin
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-agroshop-green text-agroshop-green hover:bg-agroshop-green hover:text-white">
              <LogIn className="h-4 w-4 mr-2" />
              Entrar
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-agroshop-green hover:bg-agroshop-light-green text-white">
              Cadastrar
            </Button>
          </Link>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-agroshop-green"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-agroshop-beige">
          <div className="container-custom py-4 flex flex-col gap-4">
            <a href="#" className="text-agroshop-brown hover:text-agroshop-green font-medium py-2 border-b border-agroshop-cream">
              Início
            </a>
            <a href="#services" className="text-agroshop-brown hover:text-agroshop-green font-medium py-2 border-b border-agroshop-cream">
              Serviços
            </a>
            <a href="#products" className="text-agroshop-brown hover:text-agroshop-green font-medium py-2 border-b border-agroshop-cream">
              Produtos
            </a>
            <a href="#about" className="text-agroshop-brown hover:text-agroshop-green font-medium py-2 border-b border-agroshop-cream">
              Sobre
            </a>
            <a href="#contact" className="text-agroshop-brown hover:text-agroshop-green font-medium py-2 border-b border-agroshop-cream">
              Contato
            </a>
            <Link to="/admin" className="text-agroshop-green hover:text-agroshop-green font-medium py-2 border-b border-agroshop-cream">
              Admin
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-agroshop-green text-agroshop-green hover:bg-agroshop-green hover:text-white w-full mt-2">
                <LogIn className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-agroshop-green hover:bg-agroshop-light-green text-white w-full mt-2">
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

