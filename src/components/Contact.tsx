
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container-custom">
        <div>
          <span className="bg-agroshop-cream text-agroshop-brown px-4 py-1 rounded-full text-sm font-medium">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-agroshop-brown mt-4 mb-6">
            Entre em <span className="text-agroshop-green">contato</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Tire suas dúvidas, agende uma consulta ou visite nossa loja. Estamos sempre prontos para atender você e seu pet com o carinho e atenção que merecem.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="bg-agroshop-cream p-3 rounded-full h-fit">
                <MapPin className="h-6 w-6 text-agroshop-brown" />
              </div>
              <div>
                <h3 className="font-semibold text-agroshop-brown mb-1">Endereço</h3>
                <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
                <p className="text-muted-foreground">São Paulo - SP, 01310-100</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-agroshop-cream p-3 rounded-full h-fit">
                <Phone className="h-6 w-6 text-agroshop-brown" />
              </div>
              <div>
                <h3 className="font-semibold text-agroshop-brown mb-1">Telefone</h3>
                <p className="text-muted-foreground">(11) 3456-7890</p>
                <p className="text-muted-foreground">(11) 98765-4321 (WhatsApp)</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-agroshop-cream p-3 rounded-full h-fit">
                <Mail className="h-6 w-6 text-agroshop-brown" />
              </div>
              <div>
                <h3 className="font-semibold text-agroshop-brown mb-1">Email</h3>
                <p className="text-muted-foreground">contato@agroshop.com.br</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-agroshop-cream p-3 rounded-full h-fit">
                <Clock className="h-6 w-6 text-agroshop-brown" />
              </div>
              <div>
                <h3 className="font-semibold text-agroshop-brown mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">Segunda a Sexta: 8h às 19h</p>
                <p className="text-muted-foreground">Sábado: 8h às 17h</p>
                <p className="text-muted-foreground">Emergência: 24h</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full text-agroshop-green border-agroshop-green hover:bg-agroshop-green hover:text-white">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-agroshop-green border-agroshop-green hover:bg-agroshop-green hover:text-white">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-agroshop-green border-agroshop-green hover:bg-agroshop-green hover:text-white">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.6939608339167!2d-54.88063982326927!3d-29.17809397968597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDEwJzQwLjUiUyA1NMKwNTInNDIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1682618876392!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Agroshop"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
