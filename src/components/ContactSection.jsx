import {motion} from "framer-motion";
const iconVariants = (duration)=>({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    }
})

const ContactSection = () => {
  return (
    
      <motion.div
      variants={iconVariants(2)}
            initial="initial"
            animate= "animate"
             className="text-center p-8 max-w-lg mx-auto border mt-2 border-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Talk</h2>
        <p className="text-gray-400 mb-6">
          I'd love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.
        </p>
        <button
          onClick={() => window.location.href = 'https://www.linkedin.com/in/abdur-rahman60/'}
          className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-950 transition duration-300 ease-in-out"
        >
          Contact Me
        </button>
      </motion.div>
    
  );
};

export default ContactSection;
