import "./intro.css";
import logo from "../../assets/am.png";
const Intro = () => {
  return (
    <div className="intro">
      <img src={logo} alt="" className="logo_png" />
      <p className="intro_p">
        Welcome to our wedding website! We’re so excited to celebrate this next
        chapter with you. Here you’ll find all the details for our big day, and
        we can’t wait to share these moments with you!
      </p>
    </div>
  );
};

export default Intro;
