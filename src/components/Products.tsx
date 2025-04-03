
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productCategories = [
  {
    id: "food",
    name: "Alimentação",
    products: [
      {
        id: 1,
        name: "Ração Premium",
        price: "R$ 89,90",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Bestseller"
      },
      {
        id: 2,
        name: "Ração Especial",
        price: "R$ 119,90",
        image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
        tag: ""
      },
      {
        id: 3,
        name: "Petiscos Naturais",
        price: "R$ 29,90",
        image: "https://plus.unsplash.com/premium_photo-1661870180325-d8549e8fbf1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
        tag: "Novo"
      },
      {
        id: 4,
        name: "Sachê Premium",
        price: "R$ 7,90",
        image: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Promoção"
      }
    ]
  },
  {
    id: "toys",
    name: "Brinquedos",
    products: [
      {
        id: 5,
        name: "Bolinha Interativa",
        price: "R$ 39,90",
        image: "https://plus.unsplash.com/premium_photo-1675839574046-0d352f4d149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Novo"
      },
      {
        id: 6,
        name: "Pelúcia para Cães",
        price: "R$ 49,90",
        image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        tag: ""
      },
      {
        id: 7,
        name: "Arranhador para Gatos",
        price: "R$ 79,90",
        image: "https://plus.unsplash.com/premium_photo-1661715234450-5c36f3a1057c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Bestseller"
      },
      {
        id: 8,
        name: "Brinquedo Mastigável",
        price: "R$ 32,90",
        image: "https://plus.unsplash.com/premium_photo-1673529324522-62fc89cc97d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Promoção"
      }
    ]
  },
  {
    id: "accessories",
    name: "Acessórios",
    products: [
      {
        id: 9,
        name: "Coleira Ajustável",
        price: "R$ 59,90",
        image: "https://images.unsplash.com/photo-1595401890591-a932ca3c5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        tag: "Bestseller"
      },
      {
        id: 10,
        name: "Caminha Confortável",
        price: "R$ 149,90",
        image: "https://images.unsplash.com/photo-1644368548426-c3ae608e0b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: ""
      },
      {
        id: 11,
        name: "Bebedouro Automático",
        price: "R$ 89,90",
        image: "https://images.unsplash.com/photo-1616668983570-a971956d8928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Novo"
      },
      {
        id: 12,
        name: "Caixa de Transporte",
        price: "R$ 129,90",
        image: "https://plus.unsplash.com/premium_photo-1673529324665-ae776aa82efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        tag: "Promoção"
      }
    ]
  }
];

const Products = () => {
  return (
    <section className="section paw-pattern" id="products">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-agroshop-brown mb-4">
            Produtos <span className="text-agroshop-green">selecionados</span> para seu pet
          </h2>
          <p className="text-muted-foreground">
            Temos uma grande variedade de produtos de qualidade para todas as necessidades do seu animal de estimação.
          </p>
        </div>
        
        <Tabs defaultValue="food" className="w-full">
          <TabsList className="flex justify-center mb-8 bg-transparent">
            {productCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-agroshop-brown data-[state=active]:bg-agroshop-green data-[state=active]:text-white px-6 py-2 rounded-full"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {productCategories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map(product => (
                  <Card key={product.id} className="card-hover overflow-hidden bg-white border-none shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      {product.tag && (
                        <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          product.tag === 'Novo' ? 'bg-agroshop-green text-white' :
                          product.tag === 'Bestseller' ? 'bg-agroshop-brown text-white' :
                          'bg-red-500 text-white'
                        }`}>
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1 text-agroshop-brown">{product.name}</h3>
                      <p className="text-agroshop-green font-bold">{product.price}</p>
                      <Button variant="outline" className="w-full mt-3 border-agroshop-brown text-agroshop-brown hover:bg-agroshop-brown hover:text-white">
                        Ver detalhes
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
