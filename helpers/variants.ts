import { Variants } from 'framer-motion'

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    y: 0,
    transition: { duration: 0.9, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 40,
    transition: { duration: 0.1, type: 'easeOut' },
  },
}

export default variants
