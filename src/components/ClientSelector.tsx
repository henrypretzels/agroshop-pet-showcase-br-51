
import React, { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Edit, Trash2, History } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import ClientRegistrationForm from "./ClientRegistrationForm";
import ClientHistory from "./ClientHistory";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { toast } from "sonner";

// Mock data for clients
export const mockClients = [
  { id: 1, name: "João Silva", email: "joao@exemplo.com", phone: "(11) 98765-4321", pets: ["Max (Cachorro)"] },
  { id: 2, name: "Maria Oliveira", email: "maria@exemplo.com", phone: "(11) 91234-5678", pets: ["Luna (Gato)", "Thor (Cachorro)"] },
  { id: 3, name: "Carlos Santos", email: "carlos@exemplo.com", phone: "(11) 92345-6789", pets: ["Rex (Cachorro)"] },
  { id: 4, name: "Ana Costa", email: "ana@exemplo.com", phone: "(11) 93456-7890", pets: ["Mia (Gato)"] },
];

interface ClientSelectorProps {
  onSelectClient: (clientId: number) => void;
}

const ClientSelector = ({ onSelectClient }: ClientSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [clients, setClients] = useState(mockClients);
  
  // Filter clients based on search term
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const handleSelectClient = (clientId: number) => {
    setSelectedClientId(clientId);
    onSelectClient(clientId);
  };

  const handleEditClient = (clientId: number) => {
    // In a real app, this would open a form with the client data
    toast.info(`Editando cliente ${clientId}`);
    // For demonstration purposes only
    console.log("Edit client:", clientId);
  };

  const handleDeleteClient = (clientId: number) => {
    // In a real app, this would confirm before deleting
    setClients(clients.filter(client => client.id !== clientId));
    toast.success("Cliente removido com sucesso");
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar cliente..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-agroshop-green hover:bg-agroshop-light-green">
              <UserPlus className="mr-2 h-4 w-4" />
              Novo Cliente
            </Button>
          </DialogTrigger>
          <ClientRegistrationForm />
        </Dialog>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Pets</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <ContextMenu key={client.id}>
                  <ContextMenuTrigger asChild>
                    <TableRow>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>{client.pets.join(", ")}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleEditClient(client.id)}
                            className="h-8 w-8"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleDeleteClient(client.id)}
                            className="h-8 w-8 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="icon"
                                className="h-8 w-8"
                              >
                                <History className="h-4 w-4" />
                              </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[600px] sm:w-[600px]">
                              <SheetHeader>
                                <SheetTitle>Histórico - {client.name}</SheetTitle>
                              </SheetHeader>
                              <div className="mt-6">
                                <ClientHistory clientId={client.id} />
                              </div>
                            </SheetContent>
                          </Sheet>
                          
                          <Button 
                            size="sm" 
                            onClick={() => handleSelectClient(client.id)}
                            className="bg-agroshop-green hover:bg-agroshop-light-green"
                          >
                            Selecionar
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem onClick={() => handleSelectClient(client.id)}>
                      Selecionar
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => handleEditClient(client.id)}>
                      Alterar
                    </ContextMenuItem>
                    <ContextMenuItem 
                      onClick={() => handleDeleteClient(client.id)}
                      className="text-red-500 focus:text-red-500"
                    >
                      Excluir
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10 text-gray-500">
                  {searchTerm ? "Nenhum cliente encontrado com esse termo." : "Nenhum cliente cadastrado."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClientSelector;
