
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface ClientHistoryProps {
  clientId: number;
}

const ClientHistory = ({ clientId }: ClientHistoryProps) => {
  // Mock data - in a real app this would come from an API
  const purchaseHistory = [
    { id: 1, date: "05/04/2025", product: "Ração Premium", quantity: 1, total: "R$ 89,90" },
    { id: 2, date: "20/03/2025", product: "Shampoo Neutro", quantity: 2, total: "R$ 45,80" },
    { id: 3, date: "15/02/2025", product: "Coleira Anti-pulgas", quantity: 1, total: "R$ 68,50" },
  ];

  const serviceHistory = [
    { id: 1, date: "01/04/2025", service: "Banho e Tosa", pet: "Max", status: "Concluído", price: "R$ 75,00" },
    { id: 2, date: "15/03/2025", service: "Consulta Veterinária", pet: "Max", status: "Concluído", price: "R$ 120,00" },
    { id: 3, date: "10/02/2025", service: "Vacina V10", pet: "Max", status: "Concluído", price: "R$ 95,00" },
  ];

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="services">Histórico de Serviços</TabsTrigger>
            <TabsTrigger value="purchases">Histórico de Compras</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Pet</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceHistory.length > 0 ? (
                  serviceHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.service}</TableCell>
                      <TableCell>{item.pet}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                      Nenhum serviço encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="purchases">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseHistory.length > 0 ? (
                  purchaseHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.product}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.total}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                      Nenhuma compra encontrada.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ClientHistory;
