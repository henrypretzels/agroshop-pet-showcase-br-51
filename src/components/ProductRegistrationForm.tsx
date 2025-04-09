
import React from "react";
import { useForm } from "react-hook-form";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form validation schema using Zod
const productFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  code: z.string().min(1, "Código do produto é obrigatório"),
  description: z.string().optional(),
  category: z.string().min(1, "Categoria é obrigatória"),
  costPrice: z.string().refine(
    (val) => !isNaN(Number(val)) && Number(val) >= 0,
    { message: "Preço de custo deve ser um número positivo" }
  ),
  sellingPrice: z.string().refine(
    (val) => !isNaN(Number(val)) && Number(val) >= 0,
    { message: "Preço de venda deve ser um número positivo" }
  ),
  profit: z.string().optional(),
  stock: z.string().refine(
    (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number.isInteger(Number(val)),
    { message: "Quantidade em estoque deve ser um número inteiro positivo" }
  ),
  expirationDate: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

const ProductRegistrationForm = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      code: "",
      description: "",
      category: "",
      costPrice: "",
      sellingPrice: "",
      profit: "",
      stock: "",
      expirationDate: "",
    },
  });

  // Watch cost and selling prices to calculate profit margin
  const costPrice = form.watch("costPrice");
  const sellingPrice = form.watch("sellingPrice");

  // Calculate profit margin whenever cost or selling price changes
  React.useEffect(() => {
    if (costPrice && sellingPrice && Number(costPrice) > 0) {
      const cost = Number(costPrice);
      const selling = Number(sellingPrice);
      const profitMargin = ((selling - cost) / cost * 100).toFixed(2);
      form.setValue("profit", profitMargin);
    } else {
      form.setValue("profit", "");
    }
  }, [costPrice, sellingPrice, form]);

  const onSubmit = (data: ProductFormValues) => {
    console.log("Product data:", data);
    // Here you would typically send this data to your backend
    // For now, we'll just log it and reset the form
    form.reset();
  };

  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-agroshop-brown">Cadastrar Novo Produto</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código do produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Código do produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição do produto</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva o produto" 
                    className="resize-none" 
                    {...field} 
                  />
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
                <FormLabel>Categoria</FormLabel>
                <FormControl>
                  <Input placeholder="Categoria do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="costPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço de custo (R$)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      placeholder="0,00" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sellingPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço de venda (R$)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      placeholder="0,00" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Margem de lucro (%)</FormLabel>
                  <FormControl>
                    <Input 
                      readOnly 
                      placeholder="0,00" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade em estoque</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      step="1" 
                      placeholder="0" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validade</FormLabel>
                  <FormControl>
                    <Input 
                      type="date" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="mr-2">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-agroshop-green hover:bg-agroshop-light-green">
              Cadastrar Produto
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default ProductRegistrationForm;
