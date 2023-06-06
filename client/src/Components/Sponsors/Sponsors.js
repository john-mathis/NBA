import "../Sponsors/Sponsors.css";
import Statefarm from "../../assets/statefarm.png";
import Coinbase from "../../assets/coinbase.png";
import Gatorade from "../../assets/gatorade.png";
import Microsoft from "../../assets/microsoft.png";
import Rakuten from "../../assets/rakuten.png";
import Beats from "../../assets/beats.png";
import Kia from "../../assets/kia.png";
import Twok from "../../assets/2k.png";
import ATT from "../../assets/at&t.png";
import Amex from "../../assets/amex.png";
import YouTube from "../../assets/youtube.png";
import PepsiCo from "../../assets/pepsico.png";
import Clorox from "../../assets/clorox.png";
import Ticketmaster from "../../assets/ticketmaster.png";
import Oculus from "../../assets/oculus.png";
import Tacobell from "../../assets/tacobell.png";

const Sponsors = () => {
  return (
    <>
      <h2 className="center-align page-header">Proud Sponsors</h2>
      <div className="sponsor-container">
        <img className="sponsor-logo" src={Statefarm} alt="nike logo" />
        <img className="sponsor-logo" src={Coinbase} alt="coinbase logo" />
        <img className="sponsor-logo" src={Beats} alt="beats logo" />
        <img className="sponsor-logo" src={Microsoft} alt="microsoft logo" />
        <img className="sponsor-logo" src={Rakuten} alt="sony logo" />
        <img className="sponsor-logo" src={Gatorade} alt="gatorade logo" />
        <img className="sponsor-logo" src={Kia} alt="kia logo" />
        <img className="sponsor-logo" src={Twok} alt="2k logo" />
        <img className="sponsor-logo" src={ATT} alt="at&t logo" />
        <img className="sponsor-logo" src={Amex} alt="amex logo" />
        <img className="sponsor-logo" src={YouTube} alt="youtube logo" />
        <img className="sponsor-logo" src={PepsiCo} alt="pepsico logo" />
        <img className="sponsor-logo" src={Clorox} alt="kumho logo" />
        <img className="sponsor-logo" src={Oculus} alt="oculus logo" />
        <img className="sponsor-logo" src={Tacobell} alt="taco bell logo" />
        <img
          className="sponsor-logo"
          src={Ticketmaster}
          alt="ticketmaster logo"
        />
      </div>
    </>
  );
};

export default Sponsors;
