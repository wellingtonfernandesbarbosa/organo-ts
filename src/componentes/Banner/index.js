import { Interface } from "readline";
import "./Banner.css";

Interface BannerProps

const Banner = () => {
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo"
      ></img>
    </header>
  );
};

export default Banner;
