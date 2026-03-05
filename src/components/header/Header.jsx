import "./header.css";
import img1 from "../../assets/us.JPG";
import img2 from "../../assets/us2.JPG";
import img3 from "../../assets/us3.JPG";
import img4 from "../../assets/us4.jpg";
import img5 from "../../assets/us5.jpg";
import Nav from "../nav/Nav";

const images = [img1, img2, img3, img4, img5];

const Header = ({title}) => {
  const totalSlides = images.length;

  return (
    <div className="header" style={{ "--total-slides": totalSlides }}>
      <Nav/>
      <div className="slider">
        {images.map((img, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${img})`,
              "--slide-index": index,
            }}
          ></div>
        ))}
      </div>

      <div className="content">
        <h2 className="header_date">THE WEDDING OF</h2>

        <div className="couple_name">
          <h2 className="couple_solo jfc">
            <span className="first_charcter jfcc">A</span>drian
          </h2>
          <h2 className="and">&</h2>
          <h2 className="couple_solo jfc">
            <span className="first_charcter jfcc">M</span>iranda
          </h2>
        </div>

        {title &&
        <h2 className="header_date">{title}</h2>
        }
      </div>

      <div className="overlay"></div>
    </div>
  );
};

export default Header;