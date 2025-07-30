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
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Calendar,
  Building,
  Users,
  Car,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="bg-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Proyectos Inmobiliarios
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Descubre nuestros desarrollos inmobiliarios de vanguardia. Desde
              pre-venta hasta entrega, invierte en el futuro de la ciudad.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-gold-500 hover:bg-gold-600">
              Todos los Proyectos
            </Button>
            <Button variant="outline">En Construcción</Button>
            <Button variant="outline">Pre-venta</Button>
            <Button variant="outline">Completados</Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Cards - Placeholder Content */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg"
                      alt="Proyecto"
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${
                        index % 3 === 0
                          ? "bg-orange-500"
                          : index % 3 === 1
                            ? "bg-blue-500"
                            : "bg-green-500"
                      }`}
                    >
                      {index % 3 === 0
                        ? "En Construcción"
                        : index % 3 === 1
                          ? "Pre-venta"
                          : "Completado"}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-semibold text-navy-800">
                        Proyecto{" "}
                        {
                          [
                            "Residencial Verde",
                            "Torres del Sol",
                            "Complejo Familiar",
                            "Vista Marina",
                            "Centro Urbano",
                            "Parque Central",
                          ][index]
                        }
                      </CardTitle>
                      <CardDescription className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        Zona{" "}
                        {
                          ["Norte", "Sur", "Este", "Oeste", "Centro", "Marina"][
                            index
                          ]
                        }
                        , Ciudad
                      </CardDescription>
                    </CardHeader>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progreso:</span>
                        <span className="font-medium">
                          {[25, 60, 100, 45, 80, 35][index]}%
                        </span>
                      </div>
                      <Progress
                        value={[25, 60, 100, 45, 80, 35][index]}
                        className="h-2"
                      />

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-gold-500" />
                          <span>
                            {[120, 80, 200, 150, 90, 180][index]} unidades
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gold-500" />
                          <span>
                            {
                              [
                                "2025",
                                "2024",
                                "Entregado",
                                "2026",
                                "2024",
                                "2025",
                              ][index]
                            }
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gold-500" />
                          <span>2-4 hab</span>
                        </div>
                        <div className="flex items-center">
                          <Car className="h-4 w-4 mr-2 text-gold-500" />
                          <span>Estacionamiento</span>
                        </div>
                      </div>

                      <div className="text-lg font-bold text-gold-600">
                        Desde ${[180, 220, 150, 280, 200, 160][index]},000
                      </div>
                    </div>

                    <Button className="w-full bg-navy-800 hover:bg-navy-700">
                      Ver Proyecto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Beneficios de Invertir en Nuestros Proyectos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Invierte con confianza en desarrollos inmobiliarios de alta
              calidad con garantías y beneficios exclusivos para inversionistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Garantía de Entrega
              </h3>
              <p className="text-gray-600">
                Todos nuestros proyectos cuentan con garantía de entrega en la
                fecha acordada y con las especificaciones prometidas.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Building className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Calidad Premium
              </h3>
              <p className="text-gray-600">
                Materiales de primera calidad y diseños arquitectónicos modernos
                que garantizan durabilidad y elegancia.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Planes de Pago Flexibles
              </h3>
              <p className="text-gray-600">
                Múltiples opciones de financiamiento y planes de pago adaptados
                a tu capacidad de inversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Interesado en Invertir?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Agenda una cita con nuestros especialistas en inversión inmobiliaria
            y descubre las mejores oportunidades de negocio.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600">
            Agendar Consulta Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;