import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import ClientSelector from "./ClientSelector";

// Mock data for clients (duplicated from ClientSelector to resolve the reference error)
const mockClients = [
  { id: 1, name: "João Silva", email: "joao@exemplo.com", phone: "(11) 98765-4321", pets: ["Max (Cachorro)"] },
  { id: 2, name: "Maria Oliveira", email: "maria@exemplo.com", phone: "(11) 91234-5678", pets: ["Luna (Gato)", "Thor (Cachorro)"] },
  { id: 3, name: "Carlos Santos", email: "carlos@exemplo.com", phone: "(11) 92345-6789", pets: ["Rex (Cachorro)"] },
  { id: 4, name: "Ana Costa", email: "ana@exemplo.com", phone: "(11) 93456-7890", pets: ["Mia (Gato)"] },
];

// Mock data for pet options
const petOptions = [
  { id: 1, name: "Max", species: "Cachorro", breed: "Labrador" },
  { id: 2, name: "Luna", species: "Gato", breed: "Siamês" },
  { id: 3, name: "Thor", species: "Cachorro", breed: "Golden Retriever" },
];

// Mock data for service options
const serviceOptions = [
  { id: 1, name: "Banho", category: "Higiene" },
  { id: 2, name: "Tosa", category: "Higiene" },
  { id: 3, name: "Banho e Tosa", category: "Higiene" },
  { id: 4, name: "Consulta Veterinária", category: "Saúde" },
  { id: 5, name: "Vacina", category: "Saúde" },
];

// Time slot options
const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
  "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", 
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

// Schema for appointment form
const appointmentFormSchema = z.object({
  date: z.date({
    required_error: "Por favor selecione uma data",
  }),
  time: z.string({
    required_error: "Por favor selecione um horário",
  }),
  petId: z.string({
    required_error: "Por favor selecione um pet",
  }),
  serviceId: z.string({
    required_error: "Por favor selecione um serviço",
  }),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

const AppointmentForm = () => {
  const [step, setStep] = useState<"selectClient" | "appointmentDetails">("selectClient");
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  
  // Form setup
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      notes: "",
    }
  });

  const onSelectClient = (clientId: number) => {
    setSelectedClientId(clientId);
    setStep("appointmentDetails");
  };

  const onSubmit = (data: AppointmentFormValues) => {
    console.log("Agendamento criado:", {
      clientId: selectedClientId,
      ...data,
      formattedDate: format(data.date, "dd/MM/yyyy")
    });
    
    toast.success("Agendamento realizado com sucesso!");
    form.reset();
    setStep("selectClient");
    setSelectedClientId(null);
  };

  return (
    <div className="space-y-6">
      {step === "selectClient" ? (
        <Card>
          <CardHeader>
            <CardTitle>Selecionar Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <ClientSelector onSelectClient={onSelectClient} />
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Detalhes do Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p>
                <span className="font-medium">Cliente selecionado:</span>{" "}
                {mockClients.find(c => c.id === selectedClientId)?.name}
              </p>
              <Button 
                variant="link" 
                className="p-0 h-auto text-agroshop-brown"
                onClick={() => setStep("selectClient")}
              >
                Trocar cliente
              </Button>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Data</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP", { locale: ptBR })
                                ) : (
                                  <span>Selecione uma data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => 
                                date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                date.getDay() === 0 // Domingo
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Horário</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um horário" />
                              <Clock className="h-4 w-4 opacity-50" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="petId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pet</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um pet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {petOptions.map((pet) => (
                              <SelectItem key={pet.id} value={pet.id.toString()}>
                                {pet.name} ({pet.species} - {pet.breed})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviço</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service.id} value={service.id.toString()}>
                                {service.name} ({service.category})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Informações adicionais para o agendamento..."
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-2">
                  <Button 
                    type="submit" 
                    className="bg-agroshop-green hover:bg-agroshop-light-green"
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentForm;
