import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h2>Sam Louloudis</h2>
      <p>best web dev ever</p>
      see some of my projects

      <div className="bg-slate-300 p-5 w-[790px] flex">
        <iframe src="https://good-website-9000-pphf.vercel.app/" height={600} width={750}></iframe>
      </div>
      <div>
        checkout out this cool vid from my work-place
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VxuaYYxURVE?si=QoAhNbtuAFOGi_BS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10867.33885370514!2d-1.5971981466447793!3d53.095712276872874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48798a43e409d499%3A0x6fb74efd1a60271f!2sNational%20Stone%20Centre!5e1!3m2!1sen!2suk!4v1729513558458!5m2!1sen!2suk" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

// POSSIBLE THINGS THAT CAN GO WRONG.
// Need to go to config and set you 
// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy


// don't allow https://medium.com/@kesen.somar.99/securing-your-website-how-to-disable-iframes-to-prevent-click-hijacking-attacks-98cd2004720f#:~:text=Add%20a%20Content%20Security%20Policy,not%20break%20any%20legitimate%20functionality.
// if you dont want people to use your website as a website. 
