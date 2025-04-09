
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import PetRegistrationForm from "./PetRegistrationForm";

// Client form schema
const clientFormSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  address: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  cpf: z.string().min(11, { message: "CPF deve ter 11 dígitos" }).max(14),
});

type ClientFormValues = z.infer<typeof clientFormSchema>;

const ClientRegistrationForm = () => {
  const [showPetForm, setShowPetForm] = useState(false);
  const [pets, setPets] = useState<any[]>([]);

  // Form setup
  const form = useForm<ClientFormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      cpf: "",
    }
  });

  const onSubmit = (data: ClientFormValues) => {
    console.log("Cliente cadastrado:", data);
    toast.success("Cliente cadastrado com sucesso!");
    
    // In a real app, we would store this in a database
    // For now, just log it to console
    if (pets.length > 0) {
      console.log("Pets do cliente:", pets);
    }
    
    // Reset the form
    form.reset();
    setPets([]);
  };

  const addPet = (petData: any) => {
    setPets([...pets, petData]);
    setShowPetForm(false);
    toast.success("Pet adicionado com sucesso!");
  };

  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
      </DialogHeader>

      <Tabs defaultValue="client" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="client">Dados do Cliente</TabsTrigger>
          <TabsTrigger value="pets">Pets ({pets.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="client">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="João Silva" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="joao@exemplo.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 98765-4321" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Input placeholder="Rua, número, bairro, cidade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input placeholder="123.456.789-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" className="bg-agroshop-green hover:bg-agroshop-light-green">
                  Cadastrar Cliente
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="pets">
          <div className="space-y-4">
            {pets.length > 0 ? (
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Pets Cadastrados</h3>
                <ul className="space-y-2">
                  {pets.map((pet, index) => (
                    <li key={index} className="p-3 bg-muted/50 rounded-md">
                      <p className="font-medium">{pet.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {pet.species} • {pet.breed} • {pet.age} {pet.age === 1 ? 'ano' : 'anos'}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                <p>Nenhum pet cadastrado ainda.</p>
              </div>
            )}
            
            {showPetForm ? (
              <PetRegistrationForm onSave={addPet} onCancel={() => setShowPetForm(false)} />
            ) : (
              <Button 
                type="button" 
                onClick={() => setShowPetForm(true)}
                className="w-full bg-agroshop-cream text-agroshop-brown hover:bg-agroshop-light-cream"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Pet
              </Button>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

export default ClientRegistrationForm;
