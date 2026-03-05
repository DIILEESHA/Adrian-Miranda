import "./p.css";
import ams from "../../assets/am.png";
const brides = [
  {
    img: ams,
    role: "Matron of Honor",
    name: "Putri Kowl (Childhood)",
  },
  {
    img: ams,

    role: "Maid of Honor",
    name: "Angeline Valencia (College)",
  },
  { img: ams, role: "Bridesmaid", name: "Jessica Zheng (Sorority) " },
  {
    img: ams,

    role: "Bridesmaid",
    name: "Elizabeth Ung (High School) ",
  },
  {
    img: ams,

    role: "Bridesmaid",
    name: "Virginta Rumedi (Cousin) ",
  },
  {
    img: ams,

    role: "Bridesmaid",
    name: "Natasya Rumedi (Cousin) ",
  },
  {
    img: ams,

    role: "Bridesmaid",
    name: "Margreen Brown (Cousin) ",
  },
];

const Party = () => {
  return (
    <div className="wedding">
      <div className="couple_name jaha">
        <h2 className="couple_solo jfc">
          <span className="first_charcter jfcc"> T</span>he
        </h2>
        <h2 className="yo"></h2>
        <h2 className="couple_solo jfc">
          <span className="first_charcter jfcc">R</span>oyal
        </h2>
        <h2 className="yo"></h2>
        <h2 className="couple_solo jfc">
          <span className="first_charcter jfcc">C</span>ourt
        </h2>
      </div>

      <p className="intro_p iio">
        Our wedding party is made up of the people who have shaped our lives
        with love, loyalty, and unwavering support. Meet the incredible
        individuals standing with us on our special day.
      </p>

      <div className="party_rectangle">
        <div className="party_grid">
          {brides.map((i, index) => (
            <div className="party_sub">
              <div key={index}>
                <div className="mavan">
                  <img src={i.img} alt="" className="party_img" />
                </div>
                <h1 className="role">{i.role}</h1>
                <h2 className="role_name">{i.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Party;
