import { motion } from 'framer-motion';

function About() {
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
            Notre Histoire
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Experts en réparation électronique depuis plus de 10 ans, nous avons étendu notre passion
            pour la technologie à la location de photobooths pour vos événements.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Photobooth en action"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900">Notre Expertise</h3>
              <p className="mt-4 text-gray-500">
                Notre expertise technique nous permet d'offrir des photobooths de haute qualité,
                parfaitement maintenus et constamment mis à jour avec les dernières innovations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Ce que disent nos clients
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <p className="mt-4 font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    text: "Le photobooth a été le point fort de notre mariage ! Les invités en parlent encore.",
    author: "Marie & Thomas",
    event: "Mariage"
  },
  {
    text: "Service impeccable et photos de grande qualité. Je recommande vivement !",
    author: "Sophie L.",
    event: "Soirée d'entreprise"
  },
  {
    text: "Une équipe professionnelle et un matériel au top. Merci pour tout !",
    author: "Pierre M.",
    event: "Anniversaire"
  }
];

export default About;