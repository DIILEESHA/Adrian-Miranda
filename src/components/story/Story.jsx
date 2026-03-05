import "./st.css";
import envs from "../../assets/env.png";
import halos from "../../assets/rectangle.jpg";
const Story = () => {
  return (
    <div className="story">
      <div className="story_rectangle">




        <div className="envas">
            <img src={envs} alt="" className="ena_img" />
        </div>
        <div className="couple_name aha">
          <h2 className="couple_solo hnb">
            <span className="first_charcter hnbx">O</span>ur
          </h2>
          <h2 className="yosa"></h2>
          <h2 className="couple_solo hnb">
            <span className="first_charcter hnbx">S</span>tory
          </h2>
        </div>

        <p className="story_para">
          Miranda and Adrian's story began like many modern love stories
          do—online. But theirs wasn’t sparked by a dating app; it started
          during a job interview. Adrian was interviewing Miranda for a role at
          Tableau. Fate clearly had plans, because not only did Miranda get the
          offer, but she soon discovered that she'd be training directly with
          Adrian and, as luck would have it, they both lived in Baltimore, a
          rare coincidence given where the rest of their team was based.
          <br />
          <br />
          They finally met face-to-face on May 5, 2021. Though they were mindful
          of the challenges that come with a workplace romance, something deeper
          was already taking root.
          <br />
          <br />
          Miranda had an extra ticket for a Baltimore Orioles game and
          hesitantly, asked Adrian if he wanted to join. She had no idea that an
          Orioles game, his favorite team, was Adrian’s dream first date. And
          that was it. Baseball, Baltimore, and a little bit of boldness turned
          a work connection into a love story.
          <br />
          <br />
          Now you're here, reading this on their wedding website. The job
          interview may have started it all, but clearly they both got the best
          offer ❤️
        </p>
      </div>
    </div>
  );
};

export default Story;
