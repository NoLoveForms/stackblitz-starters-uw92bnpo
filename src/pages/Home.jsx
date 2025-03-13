import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-secondary h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Photobooth event"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Créez des souvenirs inoubliables
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Louez un photobooth pour vos événements et offrez une expérience unique à vos invités.
              Photos instantanées, animations personnalisées et moments de partage garantis !
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Réserver votre photobooth
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              Pourquoi choisir nos photobooths ?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-secondary">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: 'Photos instantanées',
    description: 'Imprimez vos photos en quelques secondes et repartez avec vos souvenirs.',
    icon: '📸',
  },
  {
    title: 'Personnalisation complète',
    description: 'Choisissez vos filtres, cadres et animations selon votre thème.',
    icon: '🎨',
  },
  {
    title: 'Partage facile',
    description: 'Partagez directement vos photos sur les réseaux sociaux.',
    icon: '📱',
  },
];

export default Home;