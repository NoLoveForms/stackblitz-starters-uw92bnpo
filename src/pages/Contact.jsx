import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Contact() {
  // Coordonnées de Speed Solution à Dijon
  const position = [47.31814, 5.03671]; // 48 rue d'Auxonne, Dijon

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-900">Informations de contact</h3>
              <div className="mt-6 space-y-4">
                <p className="flex items-center text-gray-500">
                  <span className="mr-2">📍</span>
                  48 rue d'Auxonne, 21000 Dijon
                </p>
                <p className="flex items-center text-gray-500">
                  <span className="mr-2">📞</span>
                  03 80 XX XX XX
                </p>
                <p className="flex items-center text-gray-500">
                  <span className="mr-2">📧</span>
                  contact@speed-solution.fr
                </p>
                <div className="mt-6">
                  <h4 className="text-md font-medium text-gray-900">Horaires d'ouverture :</h4>
                  <div className="mt-2 space-y-2 text-gray-500">
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>Samedi : 9h00 - 12h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Speed Solution
                  <br />
                  48 rue d'Auxonne, 21000 Dijon
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;