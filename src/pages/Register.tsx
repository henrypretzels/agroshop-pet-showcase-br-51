
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!name || !email || !phone || !address || !password) {
      toast({
        title: "Formulário incompleto",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Termos não aceitos",
        description: "Você precisa aceitar os termos e condições.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // This is just a placeholder for future registration logic
    toast({
      title: "Registro bem-sucedido!",
      description: "Sua conta foi criada com sucesso.",
      duration: 3000,
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-agroshop-beige font-nunito flex flex-col">
      <div className="container-custom py-4">
        <Link to="/" className="flex items-center gap-2 w-fit">
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
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-agroshop-cream">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-agroshop-brown mb-2">Criar Conta</h2>
              <p className="text-muted-foreground">
                Preencha seus dados para se cadastrar
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-agroshop-brown">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-agroshop-cream focus-visible:ring-agroshop-green"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-agroshop-brown">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-agroshop-cream focus-visible:ring-agroshop-green"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-agroshop-brown">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-agroshop-cream focus-visible:ring-agroshop-green"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address" className="text-agroshop-brown">
                  Endereço
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Seu endereço completo"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border-agroshop-cream focus-visible:ring-agroshop-green"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-agroshop-brown">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-agroshop-cream focus-visible:ring-agroshop-green"
                />
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="data-[state=checked]:bg-agroshop-green data-[state=checked]:border-agroshop-green mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  Eu aceito os{" "}
                  <Link to="/terms" className="text-agroshop-green hover:underline">
                    termos de serviço
                  </Link>{" "}
                  e{" "}
                  <Link to="/privacy" className="text-agroshop-green hover:underline">
                    política de privacidade
                  </Link>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-agroshop-green hover:bg-agroshop-green/90 text-white mt-6"
              >
                Cadastrar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Já tem uma conta?{" "}
                  <Link to="/login" className="text-agroshop-green hover:underline font-medium">
                    Faça login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
