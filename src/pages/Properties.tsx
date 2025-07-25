import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
} from "lucide-react";

const Properties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="bg-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Propiedades Disponibles
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explora nuestra amplia selección de propiedades en venta y
              alquiler. Encuentra el hogar perfecto que se adapte a tu estilo de
              vida y presupuesto.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <Input placeholder="Buscar por ubicación..." className="h-12" />
              </div>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                  <SelectItem value="100k-300k">$100,000 - $300,000</SelectItem>
                  <SelectItem value="300k-500k">$300,000 - $500,000</SelectItem>
                  <SelectItem value="500k+">$500,000+</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 bg-gold-500 hover:bg-gold-600">
                <Search className="mr-2 h-5 w-5" />
                Buscar
              </Button>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-sm text-gray-600">
                Mostrando 24 de 156 propiedades
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Más Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Cards - Placeholder Content */}
            {Array.from({ length: 9 }).map((_, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Propiedad"
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500">
                    {index % 2 === 0 ? "Venta" : "Alquiler"}
                  </Badge>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-navy-800">
                      Casa Moderna {index + 1}
                    </CardTitle>
                    <div className="text-xl font-bold text-gold-600">
                      ${(200 + index * 50).toLocaleString()}
                      {index % 2 === 1 && "/mes"}
                    </div>
                  </div>
                  <CardDescription className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    Zona{" "}
                    {["Norte", "Sur", "Este", "Oeste", "Centro"][index % 5]},
                    Ciudad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {3 + (index % 3)} hab
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {2 + (index % 2)} baños
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {120 + index * 20} m²
                    </div>
                  </div>
                  <Button className="w-full bg-navy-800 hover:bg-navy-700">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button className="bg-navy-800">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">...</Button>
              <Button variant="outline">8</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
