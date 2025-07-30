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
  Car,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

// Datos de propiedades más detallados
const propertiesData = [
  {
    id: 1,
    title: "Casa Moderna Residencial Los Pinos",
    price: 285000,
    type: "venta",
    location: "Zona Norte, Ciudad",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    parking: 2,
    yearBuilt: 2020,
    image: "/placeholder.svg",
    featured: true,
    description: "Hermosa casa moderna de dos plantas con acabados de lujo, jardín privado y excelente ubicación cerca de centros comerciales y colegios.",
    amenities: ["Aire acondicionado", "Cocina integral", "Jardín privado", "Seguridad 24/7", "Piscina comunitaria"],
    pricePerSqm: Math.round(285000 / 180),
    condition: "Excelente",
    propertyType: "Casa",
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    title: "Apartamento Moderno Vista al Mar",
    price: 1800,
    type: "alquiler",
    location: "Zona Costa, Ciudad",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    parking: 1,
    yearBuilt: 2019,
    image: "/placeholder.svg",
    featured: false,
    description: "Elegante apartamento con vista panorámica al océano, ubicado en edificio de lujo con amenidades exclusivas.",
    amenities: ["Vista al océano", "Gimnasio", "Piscina infinity", "Concierge 24/7", "Balcón amplio"],
    pricePerSqm: Math.round(1800 / 95),
    condition: "Como nuevo",
    propertyType: "Apartamento",
    lastUpdated: "2024-01-14"
  },
  {
    id: 3,
    title: "Casa Familiar Los Jardines",
    price: 320000,
    type: "venta",
    location: "Zona Este, Ciudad",
    bedrooms: 5,
    bathrooms: 4,
    area: 220,
    parking: 3,
    yearBuilt: 2021,
    image: "/placeholder.svg",
    featured: true,
    description: "Amplia casa familiar con jardín privado y piscina, perfecta para familias grandes. Zona residencial tranquila.",
    amenities: ["Piscina privada", "Jardín amplio", "Cuarto de juegos", "Oficina en casa", "Terraza techada"],
    pricePerSqm: Math.round(320000 / 220),
    condition: "Nuevo",
    propertyType: "Casa",
    lastUpdated: "2024-01-13"
  },
  {
    id: 4,
    title: "Penthouse Ejecutivo Premium",
    price: 2500,
    type: "alquiler",
    location: "Zona Centro, Ciudad",
    bedrooms: 3,
    bathrooms: 3,
    area: 150,
    parking: 2,
    yearBuilt: 2022,
    image: "/placeholder.svg",
    featured: false,
    description: "Lujoso penthouse en el corazón de la ciudad con vistas panorámicas de 360 grados y amenidades premium.",
    amenities: ["Terraza panorámica", "Jacuzzi privado", "Smart home", "Cocina gourmet", "Valet parking"],
    pricePerSqm: Math.round(2500 / 150),
    condition: "Nuevo",
    propertyType: "Penthouse",
    lastUpdated: "2024-01-12"
  },
  {
    id: 5,
    title: "Casa Tradicional Renovada",
    price: 195000,
    type: "venta",
    location: "Zona Oeste, Ciudad",
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    parking: 2,
    yearBuilt: 2018,
    image: "/placeholder.svg",
    featured: false,
    description: "Casa tradicional completamente renovada con materiales de primera calidad y diseño contemporáneo.",
    amenities: ["Pisos de madera", "Cocina remodelada", "Baños renovados", "Patio trasero", "Chimenea"],
    pricePerSqm: Math.round(195000 / 140),
    condition: "Renovado",
    propertyType: "Casa",
    lastUpdated: "2024-01-11"
  },
  {
    id: 6,
    title: "Apartamento Ejecutivo Moderno",
    price: 1200,
    type: "alquiler",
    location: "Zona Sur, Ciudad",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    parking: 1,
    yearBuilt: 2020,
    image: "/placeholder.svg",
    featured: false,
    description: "Cómodo apartamento ideal para profesionales, completamente amueblado y listo para habitar.",
    amenities: ["Completamente amueblado", "Internet incluido", "Lavandería", "Portero", "Área social"],
    pricePerSqm: Math.round(1200 / 65),
    condition: "Excelente",
    propertyType: "Apartamento",
    lastUpdated: "2024-01-10"
  },
  {
    id: 7,
    title: "Villa de Lujo con Piscina Infinita",
    price: 450000,
    type: "venta",
    location: "Zona Norte, Ciudad",
    bedrooms: 6,
    bathrooms: 5,
    area: 350,
    parking: 4,
    yearBuilt: 2023,
    image: "/placeholder.svg",
    featured: true,
    description: "Exclusiva villa de lujo con piscina infinita, sala de cine, gimnasio privado y todas las comodidades modernas.",
    amenities: ["Piscina infinita", "Sala de cine", "Gimnasio privado", "Wine cellar", "Smart home", "Jardín paisajista"],
    pricePerSqm: Math.round(450000 / 350),
    condition: "Nuevo",
    propertyType: "Villa",
    lastUpdated: "2024-01-09"
  },
  {
    id: 8,
    title: "Apartamento Familiar Espacioso",
    price: 1600,
    type: "alquiler",
    location: "Zona Este, Ciudad",
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    parking: 2,
    yearBuilt: 2019,
    image: "/placeholder.svg",
    featured: false,
    description: "Perfecto para familias con niños, cerca de colegios y parques. Amplio y luminoso con excelente distribución.",
    amenities: ["Área de juegos", "Cerca de colegios", "Parque infantil", "Salón comunal", "Zona BBQ"],
    pricePerSqm: Math.round(1600 / 110),
    condition: "Muy bueno",
    propertyType: "Apartamento",
    lastUpdated: "2024-01-08"
  },
  {
    id: 9,
    title: "Casa Minimalista Arquitectónica",
    price: 275000,
    type: "venta",
    location: "Zona Centro, Ciudad",
    bedrooms: 3,
    bathrooms: 3,
    area: 160,
    parking: 2,
    yearBuilt: 2021,
    image: "/placeholder.svg",
    featured: false,
    description: "Diseño minimalista contemporáneo con acabados premium, grandes ventanales y espacios abiertos llenos de luz natural.",
    amenities: ["Diseño minimalista", "Grandes ventanales", "Espacios abiertos", "Domótica", "Terraza verde"],
    pricePerSqm: Math.round(275000 / 160),
    condition: "Como nuevo",
    propertyType: "Casa",
    lastUpdated: "2024-01-07"
  },
  {
    id: 10,
    title: "Loft Industrial Convertido",
    price: 2200,
    type: "alquiler",
    location: "Zona Artística, Ciudad",
    bedrooms: 2,
    bathrooms: 2,
    area: 130,
    parking: 1,
    yearBuilt: 2020,
    image: "/placeholder.svg",
    featured: false,
    description: "Único loft industrial completamente renovado en zona artística. Techos altos, vigas expuestas y diseño urbano moderno.",
    amenities: ["Techos altos", "Vigas expuestas", "Diseño industrial", "Zona artística", "Estudios cercanos"],
    pricePerSqm: Math.round(2200 / 130),
    condition: "Renovado",
    propertyType: "Loft",
    lastUpdated: "2024-01-06"
  },
  {
    id: 11,
    title: "Casa Ecológica Sostenible",
    price: 385000,
    type: "venta",
    location: "Zona Verde, Ciudad",
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    parking: 2,
    yearBuilt: 2022,
    image: "/placeholder.svg",
    featured: true,
    description: "Casa ecológica con paneles solares, sistema de recolección de agua lluvia y materiales sostenibles.",
    amenities: ["Paneles solares", "Recolección agua lluvia", "Materiales ecológicos", "Huerto orgánico", "Certificación LEED"],
    pricePerSqm: Math.round(385000 / 200),
    condition: "Nuevo",
    propertyType: "Casa Ecológica",
    lastUpdated: "2024-01-05"
  },
  {
    id: 12,
    title: "Dúplex Moderno Vista Ciudad",
    price: 1950,
    type: "alquiler",
    location: "Zona Alta, Ciudad",
    bedrooms: 3,
    bathrooms: 2,
    area: 125,
    parking: 2,
    yearBuilt: 2021,
    image: "/placeholder.svg",
    featured: false,
    description: "Elegante dúplex en dos niveles con vista panorámica de la ciudad. Diseño moderno y acabados de lujo.",
    amenities: ["Vista panorámica", "Dos niveles", "Acabados de lujo", "Terraza privada", "Estudio en segundo piso"],
    pricePerSqm: Math.round(1950 / 125),
    condition: "Como nuevo",
    propertyType: "Dúplex",
    lastUpdated: "2024-01-04"
  }
];

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
                Mostrando {propertiesData.length} propiedades
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
            {propertiesData.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${
                    property.type === "venta" ? "bg-green-500" : "bg-blue-500"
                  }`}>
                    {property.type === "venta" ? "En Venta" : "En Alquiler"}
                  </Badge>
                  {property.featured && (
                    <Badge className="absolute top-4 left-20 bg-gold-500">
                      Destacada
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/80 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-navy-800 line-clamp-2">
                      {property.title}
                    </CardTitle>
                    <div className="text-xl font-bold text-gold-600 ml-2">
                      ${property.price.toLocaleString()}
                      {property.type === "alquiler" && (
                        <span className="text-sm text-gray-500">/mes</span>
                      )}
                    </div>
                  </div>
                  <CardDescription className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {property.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms} hab
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms} baños
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.area} m²
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      {property.parking} parking
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-3 grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {property.yearBuilt}
                    </div>
                    <div className="text-right">
                      ${property.pricePerSqm}/m²
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs font-medium text-navy-600 mb-2">Estado: {property.condition}</div>
                    <div className="text-xs font-medium text-navy-600 mb-2">Tipo: {property.propertyType}</div>
                    <div className="flex flex-wrap gap-1">
                      {property.amenities.slice(0, 2).map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{property.amenities.length - 2} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">
                    Última actualización: {property.lastUpdated}
                  </div>
                  <Link to={`/propiedad/${property.id}`}>
                    <Button className="w-full bg-navy-800 hover:bg-navy-700">
                      Ver Detalles Completos
                    </Button>
                  </Link>
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