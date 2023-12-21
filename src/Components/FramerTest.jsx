import { motion } from 'framer-motion';

export default function FramerTest() {
  return (
    <div>
        <motion.div 
        className=' bg-deep-orange-600 '
        initial={{ opacity:0, scale: 0.5 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration: 0.5 }}
        />

        <h2> Framer thing </h2>
    </div>

  )
}
