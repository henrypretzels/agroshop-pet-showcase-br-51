
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-b from-agroshop-beige to-white overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="animate-fade-in">
            <span className="bg-agroshop-cream text-agroshop-brown px-4 py-1 rounded-full text-sm font-medium">
              O melhor para seu pet
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agroshop-brown leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Tudo que seu <span className="text-agroshop-green">animal</span> precisa em um só lugar
          </h1>
          
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Na Agroshop combinamos produtos de qualidade com serviços veterinários de excelência para garantir a saúde e felicidade do seu melhor amigo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button className="btn-primary flex items-center gap-2 group">
              Conhecer Serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-agroshop-green text-agroshop-green hover:bg-agroshop-green hover:text-white">
              Explorar Produtos
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full bg-agroshop-cream border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-agroshop-brown">🐾</span>
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold">+1500</p>
              <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-agroshop-light-green/10 animate-pulse" style={{ animationDuration: "3s" }}></div>
          <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" 
            alt="Cão feliz sendo atendido" 
            className="relative z-10 rounded-2xl object-cover shadow-2xl w-full h-[400px] md:h-[500px]"
          />
          <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg animate-float">
            <div className="flex items-center gap-3">
              <div className="bg-agroshop-cream p-2 rounded-lg">
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
                  className="text-agroshop-brown"
                >
                  <path d="M19.138 7.407a9 9 0 1 0-3.37 5.264M13 19l6-6-6-6" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Atendimento Completo</p>
                <p className="text-xs text-muted-foreground">Veterinário + Banho & Tosa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
