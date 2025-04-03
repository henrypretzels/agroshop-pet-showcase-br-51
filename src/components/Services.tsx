
import { ArrowRight, Bath, Bug, AlarmClock, Stethoscope, HeartPulse, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <Stethoscope className="h-8 w-8 text-agroshop-green" />,
    title: "Veterinária",
    description: "Consultas e atendimento veterinário especializado para todos os tipos de pets."
  },
  {
    icon: <Bath className="h-8 w-8 text-agroshop-green" />,
    title: "Banho e Tosa",
    description: "Banho, tosa e tratamentos estéticos para deixar seu pet sempre bonito e limpo."
  },
  {
    icon: <Scissors className="h-8 w-8 text-agroshop-green" />,
    title: "Pet Shop",
    description: "Produtos de qualidade para alimentação, higiene, conforto e diversão do seu pet."
  },
  {
    icon: <Bug className="h-8 w-8 text-agroshop-green" />,
    title: "Vacinas",
    description: "Programa completo de vacinação para garantir a saúde e proteção do seu animal."
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-agroshop-green" />,
    title: "Exames",
    description: "Diagnóstico por imagem e laboratório para exames completos e precisos."
  },
  {
    icon: <AlarmClock className="h-8 w-8 text-agroshop-green" />,
    title: "Emergência 24h",
    description: "Serviço de emergência disponível 24 horas para atender seu pet quando precisar."
  }
];

const Services = () => {
  return (
    <section className="section bg-white" id="services">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-agroshop-brown mb-4">
              <span className="text-agroshop-green">Serviços</span> para o bem-estar do seu pet
            </h2>
            <p className="text-muted-foreground">
              Oferecemos uma gama completa de serviços veterinários e de estética para garantir a saúde e o bem-estar do seu melhor amigo.
            </p>
          </div>
          <Button variant="link" className="text-agroshop-green flex items-center gap-1 group mt-4 md:mt-0">
            Ver todos serviços
            <ArrowRight className="h-4 w-4 group-hover:animate-bounce-right" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <Card key={index} className="card-hover border-none shadow-md bg-white">
              <CardContent className="p-6">
                <div className="bg-agroshop-cream rounded-lg p-3 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-agroshop-brown">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
