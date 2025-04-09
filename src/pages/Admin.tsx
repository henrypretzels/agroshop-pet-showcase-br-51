import React, { useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Package, Calendar, ShoppingBag, Dog, Cat, Bird, Fish, Rabbit, Scissors, Bath, Syringe, Stethoscope, Pill, Sparkles, UserPlus } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import ProductRegistrationForm from "@/components/ProductRegistrationForm";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ServiceRegistrationForm from "@/components/ServiceRegistrationForm";
import ClientRegistrationForm from "@/components/ClientRegistrationForm";
import AppointmentForm from "@/components/AppointmentForm";
import ClientSelector from "@/components/ClientSelector";

const Admin = () => {
  // Mock data for demonstration
  const recentAppointments = [
    { id: 1, petName: "Max", owner: "João Silva", service: "Consulta", date: "10/04/2025", status: "Confirmado" },
    { id: 2, petName: "Luna", owner: "Maria Oliveira", service: "Banho e Tosa", date: "11/04/2025", status: "Pendente" },
    { id: 3, petName: "Thor", owner: "Carlos Santos", service: "Vacina", date: "12/04/2025", status: "Confirmado" },
    { id: 4, petName: "Mia", owner: "Ana Costa", service: "Exame", date: "13/04/2025", status: "Pendente" },
  ];

  // State to track which primary icon is selected
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  // State to track which section is active
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  
  // State to track selected client
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);

  // Primary menu icons with their labels
  const primaryIcons = [
    { icon: Dog, label: "Cachorro" },
    { icon: Cat, label: "Gato" },
    { icon: Bird, label: "Pássaro" },
    { icon: Fish, label: "Peixe" },
    { icon: Rabbit, label: "Coelho" },
  ];

  // Secondary menu icons with their labels
  const secondaryIcons = [
    { icon: Bath, label: "Banho" },
    { icon: Scissors, label: "Tosa" },
    { icon: Stethoscope, label: "Consulta" },
    { icon: Syringe, label: "Vacina" },
    { icon: Pill, label: "Medicação" },
  ];

  // Handle client selection
  const handleSelectClient = (clientId: number) => {
    setSelectedClientId(clientId);
    console.log("Selected client ID:", clientId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Admin Sidebar */}
        <div className="w-64 bg-white h-screen shadow-md">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-agroshop-green">Admin Dashboard</h1>
          </div>
          <NavigationMenu orientation="vertical" className="max-w-none w-full">
            <NavigationMenuList className="flex flex-col space-y-1 p-2">
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink 
                  className={`flex items-center gap-2 p-3 rounded-md w-full ${
                    activeSection === "clients" 
                      ? "bg-agroshop-cream text-agroshop-brown font-medium" 
                      : "hover:bg-agroshop-cream text-agroshop-brown"
                  }`}
                  onClick={() => setActiveSection("clients")}
                >
                  <Users size={18} />
                  <span>Clientes</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink 
                  className={`flex items-center gap-2 p-3 rounded-md w-full ${
                    activeSection === "products" 
                      ? "bg-agroshop-cream text-agroshop-brown font-medium" 
                      : "hover:bg-agroshop-cream text-agroshop-brown"
                  }`}
                  onClick={() => setActiveSection("products")}
                >
                  <Package size={18} />
                  <span>Produtos</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink 
                  className={`flex items-center gap-2 p-3 rounded-md w-full ${
                    activeSection === "services" 
                      ? "bg-agroshop-cream text-agroshop-brown font-medium" 
                      : "hover:bg-agroshop-cream text-agroshop-brown"
                  }`}
                  onClick={() => setActiveSection("services")}
                >
                  <Sparkles size={18} />
                  <span>Serviços</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink 
                  className={`flex items-center gap-2 p-3 rounded-md w-full ${
                    activeSection === "appointments" 
                      ? "bg-agroshop-cream text-agroshop-brown font-medium" 
                      : "hover:bg-agroshop-cream text-agroshop-brown"
                  }`}
                  onClick={() => setActiveSection("appointments")}
                >
                  <Calendar size={18} />
                  <span>Agendamentos</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-agroshop-brown">
              {activeSection === "clients" ? "Clientes" : 
               activeSection === "products" ? "Produtos" : 
               activeSection === "services" ? "Serviços" : 
               activeSection === "appointments" ? "Agendamentos" : "Dashboard"}
            </h1>
            
            {/* Conditional Button based on active section */}
            {activeSection === "appointments" ? (
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Cadastrar Cliente
                    </Button>
                  </DialogTrigger>
                  <ClientRegistrationForm />
                </Dialog>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Novo Agendamento
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white p-2" align="end">
                    {primaryIcons.map((item, index) => (
                      <Popover key={index}>
                        <PopoverTrigger asChild>
                          <DropdownMenuItem 
                            className="flex items-center p-2 cursor-pointer hover:bg-agroshop-cream rounded"
                            onSelect={(e) => {
                              e.preventDefault(); // Prevent the dropdown from closing
                              setSelectedIcon(item.label);
                            }}
                          >
                            <item.icon className="mr-2 h-5 w-5" />
                            <span>{item.label}</span>
                          </DropdownMenuItem>
                        </PopoverTrigger>
                        <PopoverContent side="right" className="bg-white p-2 w-auto">
                          <div className="flex flex-col gap-2">
                            {secondaryIcons.map((secItem, secIndex) => (
                              <div 
                                key={secIndex} 
                                className="flex items-center p-2 cursor-pointer hover:bg-agroshop-cream rounded"
                                onClick={() => {
                                  console.log(`Selected ${item.label} - ${secItem.label}`);
                                  // Here you can add your logic for what happens when a secondary icon is clicked
                                }}
                              >
                                <secItem.icon className="mr-2 h-5 w-5" />
                                <span>{secItem.label}</span>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : activeSection === "products" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Adicionar Produto
                  </Button>
                </DialogTrigger>
                <ProductRegistrationForm />
              </Dialog>
            ) : activeSection === "services" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Adicionar Serviço
                  </Button>
                </DialogTrigger>
                <ServiceRegistrationForm />
              </Dialog>
            ) : activeSection === "clients" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Cadastrar Cliente
                  </Button>
                </DialogTrigger>
                <ClientRegistrationForm />
              </Dialog>
            ) : null}
          </div>

          {/* Display content based on active section */}
          {activeSection === "dashboard" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Clientes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">245</div>
                    <p className="text-xs text-muted-foreground">+15% do mês anterior</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Agendamentos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32</div>
                    <p className="text-xs text-muted-foreground">Esta semana</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Vendas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 8.450</div>
                    <p className="text-xs text-muted-foreground">+23% do mês anterior</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Agendamentos Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pet</TableHead>
                        <TableHead>Proprietário</TableHead>
                        <TableHead>Serviço</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentAppointments.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell>{appointment.petName}</TableCell>
                          <TableCell>{appointment.owner}</TableCell>
                          <TableCell>{appointment.service}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              appointment.status === "Confirmado" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {appointment.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </>
          )}

          {activeSection === "products" && (
            <Card>
              <CardHeader>
                <CardTitle>Lista de Produtos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-500">
                  Use o botão "Adicionar Produto" para cadastrar um novo produto no estoque.
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Código</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço de Venda</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead>Validade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        Nenhum produto cadastrado. Clique em "Adicionar Produto" para começar.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          
          {activeSection === "services" && (
            <Card>
              <CardHeader>
                <CardTitle>Lista de Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-500">
                  Use o botão "Adicionar Serviço" para cadastrar um novo serviço.
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Variáveis</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-8 text-gray-500">
                        Nenhum serviço cadastrado. Clique em "Adicionar Serviço" para começar.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          
          {activeSection === "clients" && (
            <Card>
              <CardHeader>
                <CardTitle>Lista de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-500">
                  Gerencie os clientes e seus pets. Utilize a busca para encontrar clientes específicos.
                </p>
                <ClientSelector onSelectClient={handleSelectClient} />
              </CardContent>
            </Card>
          )}
          
          {activeSection === "appointments" && (
            <AppointmentForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
