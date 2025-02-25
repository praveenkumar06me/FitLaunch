import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUsers, FaAppleAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaDumbbell className="text-4xl text-purple-600" />,
    title: "Custom Workouts",
    description: "Get personalized workout plans tailored to your goals and fitness level"
  },
  {
    icon: <FaHeartbeat className="text-4xl text-purple-600" />,
    title: "Health Tracking",
    description: "Monitor your progress with detailed health and fitness metrics"
  },
  {
    icon: <FaUsers className="text-4xl text-purple-600" />,
    title: "Community Support",
    description: "Join a community of fitness enthusiasts and share your journey"
  },
  {
    icon: <FaAppleAlt className="text-4xl text-purple-600" />,
    title: "Nutrition Guide",
    description: "Access meal plans and nutrition tips customized for your goals"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 text-lg">
            Powerful features to help you achieve your fitness goals
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;