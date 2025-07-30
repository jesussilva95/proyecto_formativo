import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Wifi,
  Zap,
  Droplets,
  Shield,
  Trees,
  Utensils,
  Wind,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar,
  ArrowLeft,
  Camera,
} from "lucide-react";

// Datos completos de propiedades
const propertyData = {
  1: {
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
    description: "Hermosa casa moderna de dos plantas ubicada en el exclusivo residencial Los Pinos. Esta propiedad cuenta con acabados de lujo, ampios espacios y excelente ubicación cerca de centros comerciales, colegios y hospitales. Diseñada para brindar confort y elegancia a toda la familia.",
    features: [
      "Aire acondicionado central", "Cocina integral con isla", "Jardín privado paisajista", "Seguridad 24/7 con cámaras",
      "Piscina comunitaria climatizada", "Área de BBQ techada", "Estacionamiento techado doble", "Cuarto de servicio completo",
      "Walk-in closet principal", "Baño principal con jacuzzi", "Pisos de porcelanato", "Sistema de riego automático",
      "Terraza en segundo piso", "Oficina/estudio", "Lavandería independiente", "Closets empotrados"
    ],
    amenities: [
      { icon: Wifi, label: "Internet fibra óptica" }, { icon: Zap, label: "Paneles solares" }, { icon: Droplets, label: "Sistema de riego" },
      { icon: Shield, label: "Sistema de seguridad" }, { icon: Trees, label: "Áreas verdes" }, { icon: Utensils, label: "Cocina equipada" },
      { icon: Wind, label: "Ventilación natural" }, { icon: Car, label: "Estacionamiento" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "María González", phone: "+1 (555) 123-4567", email: "maria@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  2: {
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
    description: "Elegante apartamento con vista panorámica al mar ubicado en el piso 15 de edificio de lujo. Cuenta con amenidades exclusivas y acabados premium. Perfecto para profesionales o parejas que buscan confort y ubicación privilegiada frente al océano.",
    features: [
      "Vista panorámica al océano", "Balcón amplio con vista", "Gimnasio completamente equipado", "Piscina infinity en azotea",
      "Concierge 24/7", "Sala de eventos privada", "Área de coworking", "Pet friendly con área canina",
      "Cocina moderna con electrodomésticos", "Baño principal con bañera", "Aire acondicionado split", "Closets empotrados",
      "Piso laminado de madera", "Terraza lavandería", "Sistema de intercomunicación", "Ascensor de alta velocidad"
    ],
    amenities: [
      { icon: Wifi, label: "WiFi incluido" }, { icon: Zap, label: "Electricidad incluida" }, { icon: Droplets, label: "Agua incluida" },
      { icon: Shield, label: "Seguridad privada" }, { icon: Trees, label: "Terraza jardín" }, { icon: Utensils, label: "Cocina moderna" },
      { icon: Wind, label: "Aire acondicionado" }, { icon: Car, label: "Parqueadero asignado" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Carlos Rodríguez", phone: "+1 (555) 987-6543", email: "carlos@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  3: {
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
    description: "Amplia casa familiar de dos plantas con jardín privado y piscina, perfecta para familias grandes. Ubicada en el exclusivo conjunto residencial Los Jardines, zona tranquila con excelentes escuelas cercanas y fácil acceso a vías principales.",
    features: [
      "Piscina privada climatizada", "Jardín amplio paisajista", "Cuarto de juegos para niños", "Oficina en casa equipada",
      "Bodega grande de almacenamiento", "Terraza techada BBQ", "Zona de lavandería independiente", "Sistema de alarma inteligente",
      "Cocina tipo isla gourmet", "Baño principal con jacuzzi", "Walk-in closet doble", "Habitación de servicio",
      "Sala familiar adicional", "Comedor formal", "Estudio biblioteca", "Garaje para 3 vehículos"
    ],
    amenities: [
      { icon: Wifi, label: "Red WiFi mesh" }, { icon: Zap, label: "Backup eléctrico" }, { icon: Droplets, label: "Cisterna propia" },
      { icon: Shield, label: "Cámaras de seguridad" }, { icon: Trees, label: "Jardín paisajista" }, { icon: Utensils, label: "Cocina con isla" },
      { icon: Wind, label: "Ventilación cruzada" }, { icon: Car, label: "Garaje para 3 autos" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Ana Martínez", phone: "+1 (555) 456-7890", email: "ana@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  4: {
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
    description: "Lujoso penthouse en el último piso del edificio más exclusivo del centro de la ciudad. Cuenta con vistas panorámicas de 360 grados, terraza privada y acabados premium. Ideal para ejecutivos que buscan lujo, comodidad y ubicación estratégica.",
    features: [
      "Terraza panorámica 360°", "Jacuzzi privado en terraza", "Cocina gourmet con isla", "Walk-in closet doble",
      "Estudio privado con vista", "Lavandería equipada completa", "Sistema smart home", "Servicio de valet parking",
      "Baño principal tipo spa", "Sala con doble altura", "Comedor formal", "Bar privado",
      "Habitación principal suite", "Dos habitaciones adicionales", "Aire acondicionado central", "Pisos de mármol italiano"
    ],
    amenities: [
      { icon: Wifi, label: "Internet empresarial" }, { icon: Zap, label: "Planta eléctrica" }, { icon: Droplets, label: "Agua purificada" },
      { icon: Shield, label: "Seguridad VIP" }, { icon: Trees, label: "Jardín en terraza" }, { icon: Utensils, label: "Electrodomésticos premium" },
      { icon: Wind, label: "Clima centralizado" }, { icon: Car, label: "Valet parking" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Roberto Silva", phone: "+1 (555) 321-0987", email: "roberto@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  5: {
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
    description: "Encantadora casa tradicional completamente renovada con materiales de primera calidad y diseño contemporáneo. Perfecta combinación entre el encanto clásico y las comodidades modernas. Ubicada en barrio residencial consolidado.",
    features: [
      "Pisos de madera restaurados", "Cocina completamente remodelada", "Baños renovados con acabados modernos", "Patio trasero landscaping",
      "Chimenea funcional", "Techos altos originales", "Ventanas nuevas eficientes", "Sistema eléctrico actualizado",
      "Plomería nueva", "Pintura interior y exterior", "Closets empotrados nuevos", "Iluminación LED",
      "Puertas de madera sólida", "Acabados en granito", "Aire acondicionado instalado", "Garage techado"
    ],
    amenities: [
      { icon: Wifi, label: "Cableado para internet" }, { icon: Zap, label: "Sistema eléctrico nuevo" }, { icon: Droplets, label: "Plomería renovada" },
      { icon: Shield, label: "Sistema de seguridad" }, { icon: Trees, label: "Patio ajardinado" }, { icon: Utensils, label: "Cocina remodelada" },
      { icon: Wind, label: "Ventilación mejorada" }, { icon: Car, label: "Garage doble" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Elena Vargas", phone: "+1 (555) 789-0123", email: "elena@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  6: {
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
    description: "Cómodo apartamento tipo estudio completamente amueblado, ideal para profesionales jóvenes. Ubicado en edificio moderno con excelentes amenidades y cerca de centros empresariales. Listo para habitar.",
    features: [
      "Completamente amueblado", "Internet de alta velocidad incluido", "Lavandería en el edificio", "Portero 24 horas",
      "Área social con terraza", "Cocina americana equipada", "Baño moderno", "Aire acondicionado",
      "Closet empotrado", "Balcón privado", "Piso laminado", "Iluminación LED",
      "Ventanas con protectores", "Espacio de trabajo", "TV por cable incluido", "Parqueadero asignado"
    ],
    amenities: [
      { icon: Wifi, label: "Internet incluido" }, { icon: Zap, label: "Servicios incluidos" }, { icon: Droplets, label: "Agua incluida" },
      { icon: Shield, label: "Portero 24h" }, { icon: Trees, label: "Área social" }, { icon: Utensils, label: "Cocina equipada" },
      { icon: Wind, label: "Aire acondicionado" }, { icon: Car, label: "Parking incluido" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "David Ramírez", phone: "+1 (555) 654-3210", email: "david@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  7: {
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
    description: "Exclusiva villa de lujo recién construida con piscina infinita, sala de cine privada, gimnasio y todas las comodidades modernas. Ubicada en el sector más exclusivo de la ciudad con seguridad privada 24/7.",
    features: [
      "Piscina infinita con vista", "Sala de cine privada", "Gimnasio completamente equipado", "Cava de vinos climatizada",
      "Sistema smart home completo", "Jardín paisajista premium", "Cocina gourmet doble isla", "Suite principal con terraza",
      "Oficina ejecutiva", "Sala de juegos", "Habitación de servicio completa", "Lavandería industrial",
      "Garaje para 4 vehículos", "Terraza BBQ techada", "Baños tipo spa", "Sistema de seguridad inteligente"
    ],
    amenities: [
      { icon: Wifi, label: "Red inteligente" }, { icon: Zap, label: "Autonomía energética" }, { icon: Droplets, label: "Sistema hídrico" },
      { icon: Shield, label: "Seguridad premium" }, { icon: Trees, label: "Paisajismo profesional" }, { icon: Utensils, label: "Cocina profesional" },
      { icon: Wind, label: "Climatización central" }, { icon: Car, label: "Garage premium" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Isabella Torres", phone: "+1 (555) 888-9999", email: "isabella@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  8: {
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
    description: "Perfecto para familias con niños, ubicado cerca de colegios y parques. Apartamento espacioso y luminoso con excelente distribución. El edificio cuenta con áreas recreativas para niños y ambiente familiar seguro.",
    features: [
      "Área de juegos para niños", "Cerca de colegios reconocidos", "Parque infantil en el conjunto", "Salón comunal",
      "Zona BBQ familiar", "Cocina amplia", "Sala y comedor integrados", "Habitación principal con closet",
      "Baño principal", "Baño social", "Zona de ropas", "Balcón con vista",
      "Pisos cerámicos", "Ventanas amplias", "Closets empotrados", "Parqueadero doble"
    ],
    amenities: [
      { icon: Wifi, label: "Internet comunitario" }, { icon: Zap, label: "Energía confiable" }, { icon: Droplets, label: "Agua 24/7" },
      { icon: Shield, label: "Vigilancia" }, { icon: Trees, label: "Áreas verdes" }, { icon: Utensils, label: "Cocina funcional" },
      { icon: Wind, label: "Ventilación natural" }, { icon: Car, label: "Parqueadero seguro" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Patricia Morales", phone: "+1 (555) 555-7777", email: "patricia@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  9: {
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
    description: "Diseño minimalista contemporáneo con acabados premium, grandes ventanales y espacios abiertos llenos de luz natural. Arquitectura vanguardista que combina funcionalidad y estética moderna.",
    features: [
      "Diseño minimalista único", "Grandes ventanales piso-techo", "Espacios abiertos integrados", "Sistema domótico",
      "Terraza verde eco-friendly", "Cocina minimalista", "Baños con diseño", "Iluminación arquitectónica",
      "Pisos de concreto pulido", "Escaleras flotantes", "Closets minimalistas", "Jardín zen",
      "Garage minimalista", "Entrada principal dramática", "Ventilación cruzada", "Orientación solar óptima"
    ],
    amenities: [
      { icon: Wifi, label: "Cableado inteligente" }, { icon: Zap, label: "Eficiencia energética" }, { icon: Droplets, label: "Sistema sustentable" },
      { icon: Shield, label: "Seguridad integrada" }, { icon: Trees, label: "Espacios verdes" }, { icon: Utensils, label: "Cocina de diseño" },
      { icon: Wind, label: "Ventilación inteligente" }, { icon: Car, label: "Garage integrado" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Arquitecto Luis Mendoza", phone: "+1 (555) 333-4444", email: "luis@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  10: {
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
    description: "Único loft industrial completamente renovado en la vibrante zona artística. Techos altos, vigas expuestas y diseño urbano moderno. Perfecto para artistas, creativos o profesionales que buscan un espacio único y auténtico.",
    features: [
      "Techos altos 4 metros", "Vigas de acero expuestas", "Diseño industrial auténtico", "Ubicación en zona artística",
      "Estudios de arte cercanos", "Cocina industrial", "Baños con diseño urbano", "Pisos de concreto",
      "Grandes ventanales industriales", "Espacios abiertos", "Mezzanine de dormitorio", "Área de trabajo creativo",
      "Iluminación industrial", "Ladrillo visto original", "Aire acondicionado tipo industrial", "Acceso controlado"
    ],
    amenities: [
      { icon: Wifi, label: "Internet de alta velocidad" }, { icon: Zap, label: "Instalación eléctrica industrial" }, { icon: Droplets, label: "Plomería moderna" },
      { icon: Shield, label: "Seguridad urbana" }, { icon: Trees, label: "Terraza urbana" }, { icon: Utensils, label: "Cocina tipo loft" },
      { icon: Wind, label: "Ventilación industrial" }, { icon: Car, label: "Parking urbano" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Marco Villalobos", phone: "+1 (555) 111-2222", email: "marco@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  11: {
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
    description: "Innovadora casa ecológica con certificación LEED, paneles solares, sistema de recolección de agua lluvia y materiales sostenibles. Perfecta para familias conscientes del medio ambiente que buscan reduir su huella de carbono.",
    features: [
      "Paneles solares completos", "Sistema recolección agua lluvia", "Materiales ecológicos certificados", "Huerto orgánico familiar",
      "Certificación LEED Oro", "Aislamiento térmico superior", "Ventanas eficientes energéticamente", "Sistema de ventilación natural",
      "Pisos de bambú", "Pintura ecológica", "Electrodomésticos eficientes", "Iluminación LED",
      "Compostaje integrado", "Jardín nativo", "Sistema de agua gris", "Monitoreo de consumo energético"
    ],
    amenities: [
      { icon: Wifi, label: "Hogar inteligente" }, { icon: Zap, label: "Autonomía energética" }, { icon: Droplets, label: "Gestión hídrica" },
      { icon: Shield, label: "Seguridad ecológica" }, { icon: Trees, label: "Ecosistema integrado" }, { icon: Utensils, label: "Cocina sostenible" },
      { icon: Wind, label: "Climatización natural" }, { icon: Car, label: "Estación carga eléctrica" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Ing. Ambiental Sofía Restrepo", phone: "+1 (555) 666-8888", email: "sofia@inmobiliaria.com", photo: "/placeholder.svg" }
  },
  12: {
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
    description: "Elegante dúplex en dos niveles con vista panorámica de la ciudad. Diseño moderno y acabados de lujo en ubicación privilegiada. Perfecto para profesionales que valoran el diseño y la ubicación estratégica.",
    features: [
      "Vista panorámica 180°", "Dos niveles independientes", "Acabados de lujo", "Terraza privada con vista",
      "Estudio en segundo piso", "Sala con doble altura", "Cocina gourmet", "Baño principal suite",
      "Habitación principal en nivel superior", "Dos habitaciones adicionales", "Baño social", "Zona de ropas",
      "Balcón corrido", "Pisos de madera", "Ventanales amplios", "Parqueadero doble cubierto"
    ],
    amenities: [
      { icon: Wifi, label: "Internet premium" }, { icon: Zap, label: "Eléctrico estable" }, { icon: Droplets, label: "Presión de agua óptima" },
      { icon: Shield, label: "Seguridad del edificio" }, { icon: Trees, label: "Terraza ajardinada" }, { icon: Utensils, label: "Cocina premium" },
      { icon: Wind, label: "Ventilación cruzada" }, { icon: Car, label: "Parqueadero privado" }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    agent: { name: "Alejandra Castro", phone: "+1 (555) 999-0000", email: "alejandra@inmobiliaria.com", photo: "/placeholder.svg" }
  }
};

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertyData[id as unknown as keyof typeof propertyData];

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Propiedad no encontrada</h1>
          <Link to="/propiedades">
            <Button>Volver a Propiedades</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link to="/propiedades">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Propiedades
          </Button>
        </Link>
      </div>

      {/* Property Images Carousel */}
      <section className="container mx-auto px-4 mb-8">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={image}
                      alt={`${property.title} - Imagen ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-gold-500 text-white">
                      {property.type === "venta" ? "En Venta" : "En Alquiler"}
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-md flex items-center">
                      <Camera className="mr-2 h-4 w-4" />
                      {index + 1} / {property.images.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Property Information */}
      <section className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-navy-800 mb-2">
                    {property.title}
                  </h1>
                  <p className="text-lg text-gray-600 flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    ${property.price.toLocaleString()}
                    {property.type === "alquiler" && (
                      <span className="text-lg text-gray-500">/mes</span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Bed className="h-6 w-6 mx-auto mb-2 text-navy-600" />
                  <div className="font-semibold">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Habitaciones</div>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 mx-auto mb-2 text-navy-600" />
                  <div className="font-semibold">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Baños</div>
                </div>
                <div className="text-center">
                  <Square className="h-6 w-6 mx-auto mb-2 text-navy-600" />
                  <div className="font-semibold">{property.area}</div>
                  <div className="text-sm text-gray-600">m²</div>
                </div>
                <div className="text-center">
                  <Car className="h-6 w-6 mx-auto mb-2 text-navy-600" />
                  <div className="font-semibold">{property.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Descripción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Año de construcción:</span>{" "}
                    {property.yearBuilt}
                  </div>
                  <div>
                    <span className="font-semibold">Tipo:</span>{" "}
                    {property.type === "venta" ? "Venta" : "Alquiler"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Características</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <amenity.icon className="h-5 w-5 text-gold-600 mr-3" />
                      <span className="text-gray-700">{amenity.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-navy-800 mb-3">Información Adicional</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div><span className="font-medium">ID Propiedad:</span> #{property.id.toString().padStart(6, '0')}</div>
                    <div><span className="font-medium">Precio por m²:</span> ${Math.round(property.price / property.area).toLocaleString()}</div>
                    <div><span className="font-medium">Estado:</span> {property.type === 'venta' ? 'Disponible para venta' : 'Disponible para alquiler'}</div>
                    <div><span className="font-medium">Fecha construcción:</span> {property.yearBuilt}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Agent Contact */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Contactar Agente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <img
                    src={property.agent.photo}
                    alt={property.agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-lg text-navy-800">
                    {property.agent.name}
                  </h3>
                  <p className="text-gray-600 text-sm">Agente Inmobiliario</p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600">
                    <Phone className="mr-2 h-4 w-4" />
                    {property.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Email
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Visita
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    ¿Interesado en esta propiedad?
                  </p>
                  <Button className="w-full bg-navy-800 hover:bg-navy-700">
                    Solicitar Información
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
