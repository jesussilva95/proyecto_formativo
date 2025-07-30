import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
} from "lucide-react";



  
const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a encontrar la propiedad perfecta o
              resolver cualquier duda sobre nuestros servicios inmobiliarios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  Nuestra Oficina
                </h3>
                <p className="text-gray-600 text-sm">
                  Av. Principal 123, Centro
                  <br />
                  Ciudad, País 12345
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  Teléfonos
                </h3>
                <p className="text-gray-600 text-sm">
                  +1 (555) 123-4567
                  <br />
                  +1 (555) 123-4568
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  Email
                </h3>
                <p className="text-gray-600 text-sm">
                  info@inmobiliaria.com
                  <br />
                  ventas@inmobiliaria.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  Horarios
                </h3>
                <p className="text-gray-600 text-sm">
                  Lun - Vie: 9:00 - 18:00
                  <br />
                  Sáb: 10:00 - 14:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Envíanos un Mensaje
              </h2>
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo
                      </label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <Input placeholder="Tu número de teléfono" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Consulta
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compra">Quiero Comprar</SelectItem>
                        <SelectItem value="venta">Quiero Vender</SelectItem>
                        <SelectItem value="alquiler">
                          Busco en Alquiler
                        </SelectItem>
                        <SelectItem value="inversion">
                          Inversión Inmobiliaria
                        </SelectItem>
                        <SelectItem value="proyecto">
                          Proyectos en Desarrollo
                        </SelectItem>
                        <SelectItem value="otros">Otros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      rows={4}
                    />
                  </div>

                  <Button
                    className="w-full bg-gold-500 hover:bg-gold-600"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </div>

            {/* Services & Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-800 mb-6">
                  ¿Cómo Podemos Ayudarte?
                </h2>
                <div className="grid gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800">
                          Consulta General
                        </h3>
                        <p className="text-sm text-gray-600">
                          Preguntas sobre servicios y propiedades
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800">
                          Agendar Cita
                        </h3>
                        <p className="text-sm text-gray-600">
                          Reunión presencial con nuestros asesores
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                        <Users className="h-5 w-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800">
                          Asesoría Especializada
                        </h3>
                        <p className="text-sm text-gray-600">
                          Consulta con expertos en inversión
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-navy-800 mb-4">
                  Nuestra Ubicación
                </h3>
                <Card className="h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Mapa Interactivo</p>
                    <p className="text-sm">Av. Principal 123, Centro</p>
                  </div>
                </Card>
              </div>

              {/* Emergency Contact */}
              <Card className="p-6 bg-navy-50 border-navy-200">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">
                  Atención de Emergencia
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Para asuntos urgentes fuera del horario de oficina,
                  contáctanos a través de:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-gold-500" />
                    <span>WhatsApp: +1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-gold-500" />
                    <span>emergencias@inmobiliaria.com</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas rápidas a las consultas más comunes sobre
              nuestros servicios inmobiliarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg text-navy-800">
                  ¿Cuánto tiempo toma vender una propiedad?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-sm">
                  El tiempo promedio de venta varía entre 60-90 días,
                  dependiendo del tipo de propiedad, ubicación y condiciones del
                  mercado. Nuestro equipo trabaja para optimizar este proceso.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg text-navy-800">
                  ¿Ofrecen servicios de financiamiento?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-sm">
                  Sí, trabajamos con los principales bancos y instituciones
                  financieras para ofrecer las mejores opciones de crédito
                  hipotecario a nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg text-navy-800">
                  ¿Qué incluye la asesoría en inversión?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-sm">
                  Incluye análisis de mercado, evaluación de rentabilidad,
                  asesoría legal, y seguimiento post-inversión para maximizar el
                  retorno de su capital.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg text-navy-800">
                  ¿Manejan propiedades comerciales?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-sm">
                  Sí, tenemos un departamento especializado en bienes raíces
                  comerciales incluyendo oficinas, locales, bodegas y terrenos
                  para desarrollo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
