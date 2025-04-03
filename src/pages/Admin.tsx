
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Package, Calendar } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Admin = () => {
  // Mock data for demonstration
  const recentAppointments = [
    { id: 1, petName: "Max", owner: "João Silva", service: "Consulta", date: "10/04/2025", status: "Confirmado" },
    { id: 2, petName: "Luna", owner: "Maria Oliveira", service: "Banho e Tosa", date: "11/04/2025", status: "Pendente" },
    { id: 3, petName: "Thor", owner: "Carlos Santos", service: "Vacina", date: "12/04/2025", status: "Confirmado" },
    { id: 4, petName: "Mia", owner: "Ana Costa", service: "Exame", date: "13/04/2025", status: "Pendente" },
  ];

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
                  className="flex items-center gap-2 p-3 hover:bg-agroshop-cream rounded-md w-full text-agroshop-brown" 
                  href="#dashboard"
                >
                  <Users size={18} />
                  <span>Clientes</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink 
                  className="flex items-center gap-2 p-3 hover:bg-agroshop-cream rounded-md w-full text-agroshop-brown" 
                  href="#products"
                >
                  <Package size={18} />
                  <span>Produtos</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink 
                  className="flex items-center gap-2 p-3 hover:bg-agroshop-cream rounded-md w-full text-agroshop-brown" 
                  href="#appointments"
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
            <h1 className="text-2xl font-bold text-agroshop-brown">Dashboard</h1>
            <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
              <PlusCircle className="mr-2 h-4 w-4" />
              Novo Agendamento
            </Button>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Admin;
