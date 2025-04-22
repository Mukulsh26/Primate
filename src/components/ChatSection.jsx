import { motion } from 'framer-motion';

const ChatSection = () => {
  return (
    <motion.section
      id="chat"
      style={{ backgroundColor: '#1a1a1a', padding: '50px 0' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={{ textAlign: 'center' }}>
        <motion.h2
          style={{ color: 'orange' }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Chat
        </motion.h2>
        <motion.p
          style={{ color: 'white' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have questions? Let’s discuss how we can work together.
        </motion.p>
        <motion.a
          href="mailto:youremail@example.com"
          style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block',
            marginTop: '20px',
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Schedule a Call
        </motion.a>
      </div>
    </motion.section>
  );
};

export default ChatSection;
