
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon, Plus, X } from "lucide-react";
import { toast } from "sonner";

// Definindo o schema de validação
const serviceFormSchema = z.object({
  description: z.string().min(3, { message: "A descrição deve ter pelo menos 3 caracteres" }),
  category: z.string().min(3, { message: "A categoria deve ter pelo menos 3 caracteres" }),
  variables: z.array(z.string()).min(1, { message: "Adicione pelo menos uma variável" })
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

const ServiceRegistrationForm = () => {
  const [variables, setVariables] = React.useState<string[]>([]);
  const [newVariable, setNewVariable] = React.useState("");

  // Configuração do formulário com React Hook Form
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      description: "",
      category: "",
      variables: []
    }
  });

  // Função para adicionar uma nova variável
  const addVariable = () => {
    if (newVariable.trim() === "") return;
    
    setVariables([...variables, newVariable]);
    form.setValue("variables", [...variables, newVariable]);
    setNewVariable("");
  };

  // Função para remover uma variável
  const removeVariable = (index: number) => {
    const updatedVariables = variables.filter((_, i) => i !== index);
    setVariables(updatedVariables);
    form.setValue("variables", updatedVariables);
  };

  // Função de envio do formulário
  const onSubmit = (data: ServiceFormValues) => {
    console.log("Serviço cadastrado:", data);
    toast.success("Serviço cadastrado com sucesso!");
    form.reset();
    setVariables([]);
  };

  return (
    <DialogContent className="sm:max-w-[550px]">
      <DialogHeader>
        <DialogTitle>Cadastrar Novo Serviço</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição do Serviço</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Banho" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria do Serviço</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Higiene, Saúde, Logística" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="variables"
            render={() => (
              <FormItem>
                <FormLabel>Variáveis do Serviço</FormLabel>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <FormControl>
                      <Input 
                        placeholder="Ex: Porte do animal, tipo de pelo" 
                        value={newVariable}
                        onChange={(e) => setNewVariable(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addVariable();
                          }
                        }}
                      />
                    </FormControl>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon"
                      onClick={addVariable}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {variables.length > 0 ? (
                    <div className="border rounded-md p-3 mt-2">
                      <ul className="space-y-2">
                        {variables.map((variable, index) => (
                          <li key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                            <span>{variable}</span>
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => removeVariable(index)}
                              className="h-6 w-6 rounded-full hover:bg-destructive/20"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Nenhuma variável adicionada. Adicione variáveis como porte do animal, tipo de pelo, etc.
                    </p>
                  )}
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button type="submit" className="bg-agroshop-green hover:bg-agroshop-light-green">
              Cadastrar Serviço
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default ServiceRegistrationForm;
