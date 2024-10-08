'use client'
import { motion } from "framer-motion"
import AnimateIn from "@/components/AnimateIn"

export default function Page() {
    return (
        <div>
            <p>It was love at first sight.</p>
            {/* replace whatever your html tag was with this motin version of it */}
            <motion.p 
                initial={{opacity: 0, scale: 0.5}}
                animate = {{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                whileHover={{rotateX: 200}}>
                    The first time Yossarian saw the chaplain he fell madly in love with him.
            </motion.p>
            <p>Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice. The doctors were puzzled by the fact that it wasn&apos;t quite jaundice. If it became jaundice they could treat it. If it didn&apos;t become jaundice and went away they could discharge him. But this just being short of jaundice all the time confused them.</p>
            <p>Each morning they came around, three brisk and serious men with efficient mouths and inefficient eyes, accompanied by brisk and serious Nurse Duckett, one of the ward nurses who didn&apos;t like Yossarian. They read the chart at the foot of the bed and asked impatiently about the pain. They seemed irritated when he told them it was exactly the same.</p>
            <p>“Still no movement?” the full colonel demanded.</p>
            <p>The doctors exchanged a look when he shook his head.</p>
            <p>“Give him another pill.”</p>
            <AnimateIn direction="left">
                <p>Nurse Duckett made a note to give Yossarian another pill, and the four of them moved along to the next bed.</p>
            </AnimateIn>
        </div>
    )
}