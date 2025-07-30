import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Award,
  Users,
  Building,
  TrendingUp,
  Heart,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Acerca de <span className="text-gold-400">InmoEstado</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Más de 15 años construyendo confianza en el mercado inmobiliario.
              Somos una empresa familiar comprometida con encontrar el hogar
              perfecto para cada cliente y brindar el mejor servicio de
              inversión inmobiliaria.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-navy-800">
                500+
              </div>
              <div className="text-gray-600">Propiedades Vendidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-navy-800">
                15+
              </div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-navy-800">
                98%
              </div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-navy-800">
                50+
              </div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  InmoEstado nació en 2009 con la visión de transformar la
                  experiencia de compra y venta de propiedades. Comenzamos como
                  una pequeña empresa familiar con el compromiso de brindar un
                  servicio personalizado y transparente.
                </p>
                <p>
                  A lo largo de los años, hemos crecido hasta convertirnos en
                  una de las inmobiliarias más confiables de la región,
                  manteniendo siempre nuestros valores fundamentales:
                  honestidad, profesionalismo y compromiso con el cliente.
                </p>
                <p>
                  Hoy, con más de 500 propiedades vendidas y un equipo de
                  especialistas altamente capacitados, seguimos ayudando a
                  familias e inversionistas a alcanzar sus metas inmobiliarias.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg"
                alt="Oficina"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/placeholder.svg"
                alt="Equipo"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="/placeholder.svg"
                alt="Clientes"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="/placeholder.svg"
                alt="Propiedades"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-gold-200">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Facilitar el proceso de compra, venta y alquiler de
                  propiedades mediante un servicio personalizado, transparente y
                  profesional. Buscamos crear relaciones duraderas con nuestros
                  clientes, superando sus expectativas en cada transacción.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-navy-200">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser la inmobiliaria líder en la región, reconocida por nuestra
                  excelencia en el servicio, innovación tecnológica y compromiso
                  con el desarrollo sostenible de las comunidades donde
                  operamos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y
              decisiones en el día a día de nuestra empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Transparencia
              </h3>
              <p className="text-gray-600">
                Comunicación clara y honesta en todas nuestras transacciones.
                Sin sorpresas, sin letra pequeña.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Compromiso
              </h3>
              <p className="text-gray-600">
                Dedicación completa a los objetivos de nuestros clientes. Su
                éxito es nuestro éxito.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Excelencia
              </h3>
              <p className="text-gray-600">
                Mejora continua en todos nuestros procesos para brindar el mejor
                servicio del mercado.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Integridad
              </h3>
              <p className="text-gray-600">
                Actuamos con ética y responsabilidad en cada decisión que
                tomamos como empresa.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Building className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">
                Innovación
              </h3>
              <p className="text-gray-600">
                Adoptamos las últimas tecnologías para mejorar la experiencia de
                nuestros clientes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">Pasión</h3>
              <p className="text-gray-600">
                Amamos lo que hacemos y esa pasión se refleja en cada proyecto
                que emprendemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales altamente capacitados y comprometidos con brindar el
              mejor servicio inmobiliario de la región.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Directora General",
                experience: "15+ años",
              },
              {
                name: "Carlos Rodríguez",
                role: "Gerente de Ventas",
                experience: "12+ años",
              },
              {
                name: "Ana López",
                role: "Especialista en Inversiones",
                experience: "10+ años",
              },
              {
                name: "Juan Martínez",
                role: "Asesor Senior",
                experience: "8+ años",
              },
              {
                name: "Laura Fernández",
                role: "Coordinadora de Proyectos",
                experience: "7+ años",
              },
              {
                name: "Diego Torres",
                role: "Asesor Comercial",
                experience: "5+ años",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {member.experience} de experiencia
                  </p>
                  <div className="flex justify-center mt-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Trabajar con Nosotros?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Únete a las cientos de familias que han confiado en nosotros para
            encontrar su hogar ideal o realizar la mejor inversión inmobiliaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600">
              Conocer al Equipo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-800"
            >
              Agendar Reunión
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
