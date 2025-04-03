
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Oliveira",
    pet: "Toby (Labrador)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    petImage: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    text: "A Agroshop é simplesmente incrível! O atendimento veterinário salvou meu Toby quando ele estava muito doente. Todos são muito atenciosos e os produtos são de ótima qualidade. Recomendo para todos os donos de pets!"
  },
  {
    id: 2,
    name: "Ana Souza",
    pet: "Nina (Gato Persa)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    petImage: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1058&q=80",
    text: "Minha gatinha Nina fica linda após o banho e tosa na Agroshop! Os produtos para gatos são excelentes e os veterinários entendem perfeitamente as necessidades específicas dos felinos. Não troco por nada!"
  },
  {
    id: 3,
    name: "Pedro Mendes",
    pet: "Rex (Pastor Alemão)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    petImage: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    text: "Desde que descobri a ração recomendada pelo veterinário da Agroshop, meu Rex melhorou muito! A pelagem está linda e ele tem muito mais energia. O serviço de entrega em domicílio também é muito prático."
  },
  {
    id: 4,
    name: "Mariana Lima",
    pet: "Pipoca (Yorkshire)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    petImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    text: "Minha pequena Pipoca adora ir à Agroshop! O atendimento é carinhoso e ela volta super feliz do banho e tosa. Consigo encontrar todos os acessórios e produtos específicos para raças pequenas."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section bg-agroshop-beige" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agroshop-brown mb-4">
            O que nossos <span className="text-agroshop-green">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground">
            Depoimentos de tutores e seus pets que confiam na Agroshop para cuidados veterinários, produtos e serviços.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)`, width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full px-4 md:px-16 flex-shrink-0"
                >
                  <Card className="bg-white p-6 md:p-8 shadow-xl rounded-2xl border-none">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 flex flex-col items-center">
                        <div className="relative mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-agroshop-cream"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-agroshop-green rounded-full p-1">
                            <img
                              src={testimonial.petImage}
                              alt={testimonial.pet}
                              className="w-12 h-12 rounded-full object-cover border-2 border-white"
                            />
                          </div>
                        </div>
                        <h3 className="font-bold text-lg text-agroshop-brown">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                        <div className="flex mt-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-agroshop-green text-agroshop-green" />
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2 flex flex-col justify-center">
                        <blockquote className="text-lg italic text-muted-foreground">
                          "{testimonial.text}"
                        </blockquote>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${
                  index === activeIndex
                    ? 'bg-agroshop-green'
                    : 'bg-agroshop-brown/30 hover:bg-agroshop-brown/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md md:flex hidden"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 text-agroshop-brown" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md md:flex hidden"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-agroshop-brown" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
