import "./dr.css";

const img = [
  {
    img: "https://media-api.xogrp.com/images/d43dcab5-26b8-4db0-b142-263b1a67068e~rs_1536.h",
  },
  {
    img: "https://media-api.xogrp.com/images/b85a8442-ac2d-4bb7-90fc-afd842e8d0c9~rs_1536.h-cr_0.0.1486.1981",
  },
  {img:"https://media-api.xogrp.com/images/5c5895e7-7894-4236-80e1-11f49efb8f7e~rs_1536.h"},
  {img:"https://media-api.xogrp.com/images/247aa3fb-2744-448c-b616-9cf1d0a29639~rs_1536.h-cr_0.242.1450.2175"}
];

const Dresscode = () => {
  return (
    <div className="intro">
      <div className="couple_name">
        <h2 className="couple_solo">
          <span className="first_charcter">D</span>ress
        </h2>
        <h2 className="yo"></h2>
        <h2 className="couple_solo">
          <span className="first_charcter">C</span>ode
        </h2>
      </div>

      <p className="intro_p">
        We are aiming for formal attire while keeping comfort in mind for a
        tropical setting. Think elegant, lightweight fabrics rather than heavy
        or restrictive clothing. While we love the idea of black-tie, it’s
        perfectly acceptable to opt for formal cocktail or dressy attire that’s
        breathable and suited to Bali’s warm climate.
      </p>

      <div className="dress_card">
        {img.map((i, index) => (
          <>
            <div key={index} className="img_sub">
              <img src={i.img} className="card_img" alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Dresscode;
