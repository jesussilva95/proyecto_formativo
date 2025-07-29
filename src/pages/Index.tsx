import { useState } from "react";
import { Link } from "react-router-dom";
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
  MapPin,
  Bed,
  Bath,
  Square,
  TrendingUp,
  Shield,
  Users,
  Star,
  ArrowRight,
  Building,
  Home,
  Car,
  Award,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [searchType, setSearchType] = useState("venta");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  // Mock data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: "Casa Moderna Residencial Los Pinos",
      location: "Zona Norte, Ciudad",
      price: "$450,000",
      type: "Casa",
      beds: 4,
      baths: 3,
      sqm: 280,
      parking: 2,
      yearBuilt: 2020,
      image: "/placeholder.svg",
      featured: true,
      status: "Venta",
      description: "Hermosa casa moderna de dos plantas con acabados de lujo, jardín privado y excelente ubicación.",
      amenities: ["Aire acondicionado", "Cocina integral", "Jardín privado", "Seguridad 24/7", "Piscina comunitaria"],
      pricePerSqm: Math.round(450000 / 280),
    },
    {
      id: 2,
      title: "Apartamento Moderno Vista al Mar",
      location: "Zona Costa, Ciudad",
      price: "$2,500/mes",
      type: "Apartamento",
      beds: 2,
      baths: 2,
      sqm: 120,
      parking: 1,
      yearBuilt: 2019,
      image: "/placeholder.svg",
      featured: true,
      status: "Alquiler",
      description: "Elegante apartamento con vista panorámica al mar y amenidades de lujo en edificio exclusivo.",
      amenities: ["Vista al océano", "Gimnasio", "Piscina infinity", "Concierge 24/7", "Balcón amplio"],
      pricePerSqm: Math.round(2500 / 120),
    },
    {
      id: 3,
      title: "Penthouse Ejecutivo Premium",
      location: "Zona Comercial, Ciudad",
      price: "$850,000",
      type: "Penthouse",
      beds: 3,
      baths: 4,
      sqm: 450,
      parking: 3,
      yearBuilt: 2022,
      image: "/placeholder.svg",
      featured: true,
      status: "Venta",
      description: "Exclusivo penthouse con terraza panorámica, jacuzzi privado y acabados premium en el corazón de la ciudad.",
      amenities: ["Terraza panorámica", "Jacuzzi privado", "Smart home", "Cocina gourmet", "Valet parking"],
      pricePerSqm: Math.round(850000 / 450),
    },
  ];

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Residencial Verde",
      location: "Zona Este, Ciudad",
      units: 120,
      completion: "2025",
      priceFrom: "$180,000",
      image: "/placeholder.svg",
      status: "En Construcción",
    },
    {
      id: 2,
      title: "Torres del Sol",
      location: "Centro, Ciudad",
      units: 80,
      completion: "2024",
      priceFrom: "$220,000",
      image: "/placeholder.svg",
      status: "Pre-venta",
    },
    {
      id: 3,
      title: "Complejo Familiar",
      location: "Zona Sur, Ciudad",
      units: 200,
      completion: "2026",
      priceFrom: "$150,000",
      image: "/placeholder.svg",
      status: "Planeación",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Encuentra tu <span className="text-gradient">Hogar Perfecto</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 animate-slide-in">
              Más de 15 años conectando familias con la propiedad de sus sueños.
              Experiencia, confianza y resultados garantizados.
            </p>

            {/* Search Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex rounded-lg bg-gray-100 p-1">
                  <Button
                    variant={searchType === "venta" ? "default" : "ghost"}
                    onClick={() => setSearchType("venta")}
                    className={
                      searchType === "venta"
                        ? "bg-navy-800 text-white"
                        : "text-gray-600"
                    }
                  >
                    Comprar
                  </Button>
                  <Button
                    variant={searchType === "alquiler" ? "default" : "ghost"}
                    onClick={() => setSearchType("alquiler")}
                    className={
                      searchType === "alquiler"
                        ? "bg-navy-800 text-white"
                        : "text-gray-600"
                    }
                  >
                    Alquilar
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Ubicación, barrio o ciudad..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-12 text-gray-800"
                  />
                </div>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12 text-gray-800">
                    <SelectValue placeholder="Tipo de propiedad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  size="lg"
                  className="h-12 bg-gold-500 hover:bg-gold-600 text-white"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-navy-800">
                500+
              </div>
              <div className="text-gray-600">Propiedades Vendidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-navy-800">
                15+
              </div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-navy-800">
                98%
              </div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-navy-800">
                24/7
              </div>
              <div className="text-gray-600">Atención al Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de propiedades premium, cuidadosamente
              seleccionadas por su ubicación, calidad y potencial de inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      property.status === "Venta"
                        ? "bg-gold-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {property.status}
                  </Badge>
                  {property.featured && (
                    <Badge className="absolute top-4 right-4 bg-red-500">
                      Destacada
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-navy-800">
                      {property.title}
                    </CardTitle>
                    <div className="text-xl font-bold text-gold-600">
                      {property.price}
                    </div>
                  </div>
                  <CardDescription className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds} hab
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths} baños
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqm} m²
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      {property.parking} parking
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    <div className="flex justify-between">
                      <span>Construído: {property.yearBuilt}</span>
                      <span>${property.pricePerSqm}/m²</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs font-medium text-navy-600 mb-2">Amenidades destacadas:</div>
                    <div className="flex flex-wrap gap-1">
                      {property.amenities.slice(0, 3).map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{property.amenities.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Link to={`/propiedad/${property.id}`}>
                    <Button className="w-full bg-navy-800 hover:bg-navy-700">
                      Ver Detalles Completos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
            >
              <Link to="/propiedades">
                Ver Todas las Propiedades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Proyectos en Desarrollo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Invierte en el futuro con nuestros proyectos inmobiliarios. Desde
              pre-venta hasta entrega, te acompañamos en cada paso de tu
              inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      project.status === "En Construcción"
                        ? "bg-orange-500"
                        : project.status === "Pre-venta"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-navy-800">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Unidades:</span>
                      <span className="font-medium">{project.units}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Entrega:</span>
                      <span className="font-medium">{project.completion}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Desde:</span>
                      <span className="font-bold text-gold-600">
                        {project.priceFrom}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-gold-500 hover:bg-gold-600">
                    Más Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white"
            >
              <Link to="/proyectos">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              ¿Por Qué Elegir InmoEstado?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos más que una inmobiliaria. Somos tu socio estratégico en cada
              decisión inmobiliaria, brindando experiencia, confianza y
              resultados excepcionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                15+ Años de Experiencia
              </h3>
              <p className="text-gray-600">
                Más de una década construyendo confianza y entregando resultados
                excepcionales en el mercado inmobiliario.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Transacciones Seguras
              </h3>
              <p className="text-gray-600">
                Garantizamos procesos transparentes y seguros con asesoría legal
                completa en cada transacción.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Equipo Experto
              </h3>
              <p className="text-gray-600">
                Profesionales certificados con amplio conocimiento del mercado
                local y tendencias inmobiliarias.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Asesoría en Inversión
              </h3>
              <p className="text-gray-600">
                Análisis de mercado y consejos especializados para maximizar el
                retorno de tu inversión inmobiliaria.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Home className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Amplio Portafolio
              </h3>
              <p className="text-gray-600">
                Desde casas familiares hasta inversiones comerciales, tenemos la
                propiedad perfecta para cada necesidad.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Servicio dedicado 24/7 con seguimiento personalizado desde el
                primer contacto hasta después de la entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mayor logro. Aquí
              tienes algunas de sus experiencias con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excepcional servicio y profesionalismo. El equipo de
                  InmoEstado nos ayudó a encontrar nuestra casa ideal en tiempo
                  récord. Altamente recomendados."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-navy-800">
                      María González
                    </div>
                    <div className="text-sm text-gray-500">
                      Cliente Satisfecha
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Encontrar tu Próxima Propiedad?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarte a encontrar la
            propiedad perfecta o vender tu inmueble al mejor precio del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-800"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
