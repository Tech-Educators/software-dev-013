import Painting from "./Painting"

export default function Gallery() {
    return (
        <div>
            <Painting img_url='https://upload.wikimedia.org/wikipedia/commons/3/33/The_Roses_of_Heliogabalus.jpg'/>
            <Painting img_url='https://miro.medium.com/v2/resize:fit:584/1*58vziXRx1l8pQBSQVeHABg.jpeg' toCool={true}/>
            <Painting img_url='https://cdn.britannica.com/45/1245-004-676A6721/Kanagawa-Wave-woodblock-colour-print-series-part.jpg'/>
            <Painting img_url='https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5b87fa9a-112a-4c4d-a7c9-d368266319d4_1426x1445.webp'/>
        </div>
    )
}