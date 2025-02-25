import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Your personal fitness journey starts here. Get personalized workouts, nutrition plans, and expert guidance - all in one app.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                <FaApple className="mr-2 text-xl" />
                App Store
              </button>
              <button className="flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                <FaGooglePlay className="mr-2 text-xl" />
                Google Play
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Fitness App Demo"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;