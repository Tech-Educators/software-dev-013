'use client'

import {motion} from "framer-motion"

export default function AnimateIn({children, direction}) {
    const scaleX = direction === 'left' ? '-25%' : '25%'
    return (
        <motion.div
            initial={{opacity: 0, x: scaleX, scale: 0.7}}
            whileInView={{opacity: 1, x: '0%', scale: 1}}
            viewport={{once: false}}
            transition={{duration: 'ssa'}}
        >
            {children}
        </motion.div>
    )
}