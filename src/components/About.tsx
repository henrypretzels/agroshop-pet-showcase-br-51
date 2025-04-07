
import { ShieldCheck, Heart, ThumbsUp, Clock } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-agroshop-green" />,
    title: "Qualidade garantida",
    description: "Selecionamos os melhores produtos e oferecemos serviços de alta qualidade."
  },
  {
    icon: <Heart className="h-6 w-6 text-agroshop-green" />,
    title: "Cuidado genuíno",
    description: "Amamos os animais e tratamos cada pet como se fosse nosso."
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-agroshop-green" />,
    title: "Profissionais qualificados",
    description: "Nossa equipe é composta por especialistas apaixonados por pets."
  },
  {
    icon: <Clock className="h-6 w-6 text-agroshop-green" />,
    title: "Horário estendido",
    description: "Atendimento em horários convenientes e emergência 24 horas."
  }
];

const About = () => {
  return (
    <section className="section bg-white" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Equipe da Agroshop" 
                className="rounded-tl-3xl rounded-br-3xl shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-agroshop-green rounded-full p-3 text-white">10+</div>
                  <div>
                    <h4 className="font-bold">Anos de experiência</h4>
                    <p className="text-sm text-muted-foreground">Cuidando de pets desde 2012</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full h-full top-6 left-6 rounded-tl-3xl rounded-br-3xl border-2 border-agroshop-green -z-0"></div>
          </div>
          
          <div>
            <span className="bg-agroshop-cream text-agroshop-brown px-4 py-1 rounded-full text-sm font-medium">
              Nossa história
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-agroshop-brown mt-4 mb-6">
              Sobre a <span className="text-agroshop-green">Agroshop</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Fundada em 2012 na cidade de São Paulo, a Agroshop nasceu da paixão por animais e do desejo de oferecer produtos e serviços de alta qualidade para pets. O que começou como uma pequena loja familiar, hoje se tornou referência em cuidados para animais de estimação.
            </p>
            <p className="text-muted-foreground mb-6">
              Nossa missão é garantir o bem-estar e a felicidade dos pets, oferecendo atendimento veterinário de excelência, produtos selecionados e serviços completos para todos os tipos de animais.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-agroshop-cream p-2 rounded-lg h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-agroshop-brown">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Button "Conheça nossa equipe" has been removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
