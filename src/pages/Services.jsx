import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Services() {
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
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Découvrez nos différentes options de photobooths pour votre événement
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900">{pkg.title}</h3>
                  <p className="mt-4 text-gray-500">{pkg.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">{pkg.price}</span>
                    <span className="text-base font-medium text-gray-500">/événement</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl mt-auto">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Options */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Options supplémentaires
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-3xl mb-4">{option.icon}</div>
                <h4 className="font-semibold text-gray-900">{option.title}</h4>
                <p className="mt-2 text-sm text-gray-500">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const packages = [
  {
    title: "Pack Essentiel",
    description: "Parfait pour les petits événements",
    price: "499€",
    features: [
      "2 heures de location",
      "Photos illimitées",
      "Impressions instantanées",
      "Accessoires de base",
      "Assistant sur place"
    ]
  },
  {
    title: "Pack Premium",
    description: "Notre option la plus populaire",
    price: "799€",
    features: [
      "4 heures de location",
      "Photos illimitées",
      "Impressions illimitées",
      "Accessoires premium",
      "Personnalisation des cadres",
      "Galerie en ligne",
      "Assistant dédié"
    ]
  },
  {
    title: "Pack Luxe",
    description: "Pour les grands événements",
    price: "1299€",
    features: [
      "6 heures de location",
      "Photos illimitées",
      "Impressions illimitées",
      "Accessoires deluxe",
      "Personnalisation complète",
      "Album photo numérique",
      "2 assistants dédiés",
      "Fond personnalisé"
    ]
  }
];

const additionalOptions = [
  {
    icon: "🎨",
    title: "Personnalisation",
    description: "Cadres et filtres sur mesure"
  },
  {
    icon: "🎭",
    title: "Accessoires",
    description: "Kit d'accessoires supplémentaires"
  },
  {
    icon: "⏰",
    title: "Heures sup",
    description: "Prolongez votre location"
  },
  {
    icon: "📸",
    title: "Album photo",
    description: "Album imprimé personnalisé"
  }
];

export default Services;