
import './App.css';


let Wednesday = {
  Imageurl:"https://occ-0-3752-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYfKeCbQR0MIA99H7_gWiwHPDelQTklvySQt9vA4_MdtHLJU_ioyzoNJZ1w5UeL4DyGhhIqyGFy72VfrcMTR5ec-2Kg0CoAcVVgyUrURoFoZYT0QGF3dtxIEgyYfnpuiFpnT.jpg?r=082",
  Title:"Wednesday",
  Description:"Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy"
}
let Who_is_Erin_Carter={
  Imageurl:"https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSDcxay1uHqFhiNh9gey54f8lM4Ubha8otrJy7Lrai1O2jKQMMflET055bjJb19jVe5qxyRuKAEowUMYvgW9pNr3NtjoC08tBNr9llHYdasDHl_FJb-qmSZvEMsI6TOulDpT.jpg?r=634",
  Title:"Who is Erin Carter?",
  Description:"A British woman's tranquil life in Barcelona spirals out of control when an armed robbery at a supermarket exposes her secret... and violent past."

}
let Money_Heist = {
  Imageurl:"https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326",
  Title:"Money Heist",
  Description:"Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out Squid_Game"

}
let Squid_Game = {
  Imageurl:"https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZemmrMaRP3BbvSmgKLTfo1M3yb8VgbYQQUgc3pn-Zgr4WoPJRLV4zr4Kyq6nXqGcaFbPaRcamPUw6isYOw-pDhDcnhh4crH5qlVp-eVbnQHxEGpfaH60OKmweG7cYjLz9am.jpg?r=853",
  Title:"Squid Game",
  Description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."

}
let She = {
  Imageurl:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc550ABPrq732UsbDzgbdamX3nf2OhGQ7u1bVySyfiG2E8kjofChLeCB39jateS2-xIFQ1lptQa8DmdF_I38NHemMG0dLWuZ_DSEuoHIrWl-39KjFEYC3vzKnSXAE3RA4A3-.jpg?r=df2",
  Title:"She",
  Description:"An undercover assignment to expose a drug ring becomes a timid Mumbai constable’s road to empowerment as she realizes her dormant sexuality's potential."

}
let Narcos = {
  Imageurl:"https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRXabvZzn6TLqPxrKQycbwVeKqSTL4YB5S-gXUZ2hLQ4KeyhMWLs_o8yuvxDxGlbq1LUiT5dYwyPP_Zk2_a4eOxdJ5cAnxoqgz-d-tbckSK6nZr97o0rI_67bdxXaWnLI0h0.jpg?r=5c6",
  Title:"Narcos",
  Description:"The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series."

}
const App = () => {
  return(
    <container className="contnair">
    <Movie Title={Wednesday.Title} Imageurl={Wednesday.Imageurl} Description={Wednesday.Description}/>
    <Movie Title={Who_is_Erin_Carter.Title} Imageurl={Who_is_Erin_Carter.Imageurl} Description={Who_is_Erin_Carter.Description}/>
    <Movie Title={Money_Heist.Title} Imageurl={Money_Heist.Imageurl} Description={Money_Heist.Description}/>
    <Movie Title={Squid_Game.Title} Imageurl={Squid_Game.Imageurl} Description={Squid_Game.Description}/>
    <Movie Title={She.Title} Imageurl={She.Imageurl} Description={She.Description}/>
    <Movie Title={Narcos.Title} Imageurl={Narcos.Imageurl} Description={Narcos.Description}/>
   </container>

  )
  
}

const Movie = (props) =>{
 return(
  <article className='each'>
  <img src={props.Imageurl} alt='Netflix'/>
  <a href={props.href}><h3>{props.Title}</h3></a>
  <p>{props.Description}</p>
  </article>
 )


};

export default App;
