import "./Banner.css";

interface BannerProps {
  imageURL: string;
  textAlt?: string;
}

const Banner = ({ imageURL, textAlt }: BannerProps) => {
  return (
    <header className="banner">
      <img src={imageURL} alt={textAlt}></img>
    </header>
  );
};

export default Banner;
