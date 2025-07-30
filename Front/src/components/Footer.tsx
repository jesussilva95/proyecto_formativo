import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-navy-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Mantente Informado sobre el Mercado Inmobiliario
            </h3>
            <p className="text-gray-300 mb-6">
              Recibe las últimas ofertas, tendencias del mercado y consejos de
              inversión directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-white px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">InmoEstado</h2>
                  <p className="text-xs text-gray-400">Bienes Raíces</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tu socio de confianza en bienes raíces. Más de 15 años de
                experiencia ayudando a familias e inversionistas a encontrar la
                propiedad perfecta.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gold-400"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gold-400"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gold-400"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gold-400"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gold-400">
                Enlaces Rápidos
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Inicio
                </Link>
                <Link
                  to="/propiedades"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Propiedades en Venta
                </Link>
                <Link
                  to="/propiedades?tipo=alquiler"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Propiedades en Alquiler
                </Link>
                <Link
                  to="/proyectos"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Proyectos
                </Link>
                <Link
                  to="/nosotros"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Acerca de Nosotros
                </Link>
                <Link
                  to="/contacto"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gold-400">Servicios</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/servicios/compra"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Asesoría en Compra
                </Link>
                <Link
                  to="/servicios/venta"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Asesoría en Venta
                </Link>
                <Link
                  to="/servicios/inversion"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Inversión Inmobiliaria
                </Link>
                <Link
                  to="/servicios/valuacion"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Valuación de Propiedades
                </Link>
                <Link
                  to="/servicios/financiamiento"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Financiamiento
                </Link>
                <Link
                  to="/servicios/administracion"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Administración de Propiedades
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gold-400">
                Información de Contacto
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Av. Principal 123, Centro</p>
                    <p>Ciudad, País 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 123-4568</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>info@inmobiliaria.com</p>
                    <p>ventas@inmobiliaria.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Lun - Vie: 9:00 - 18:00</p>
                    <p>Sáb: 10:00 - 14:00</p>
                    <p>Dom: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 InmoEstado. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                to="/privacidad"
                className="hover:text-gold-400 transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/terminos"
                className="hover:text-gold-400 transition-colors"
              >
                Términos de Uso
              </Link>
              <Link
                to="/cookies"
                className="hover:text-gold-400 transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};