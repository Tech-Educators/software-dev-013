import Image from "next/image"
// do have to do an annoying import
import large from '@/../public/large.jpeg'

import { gluten, barcode} from "./layout"

export default function Home() {
  console.log(gluten)
  return (
    <div className="flex-col w-4/6 justify-between items-center min-h-screen p-24">
      <Image src={`https://purepng.com/public/uploads/large/purepng.com-beetle-bugnature-macro-danger-insect-beetle-bug-pest-bite-smallanimals-8215239939988kkag.png`} alt='A beetle although no know what exactly he is' width={100} height={50}/>

      {/* // dont have to set height and width on imported images */}
      {/* <Image src={large} /> */}
      <p>
        <span className={gluten.className}>One morning,</span> when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to <span className={barcode.className}>slide off any moment.</span> His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
      </p>
      <p>
        “What&apos;s happened to me?” he thought. It wasn&apos;t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table—Samsa was a travelling salesman—and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, <span>gilded </span>frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
      </p>
    </div>
  )
}