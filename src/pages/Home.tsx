import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page container-fluid bg-light">
      <div className="row hero justify-content-center align-items-center text-center text-light p-md-5 py-3">
        <div className="col-lg-8 py-5 my-xl-5">
          <h1 className="py-1">Whispers</h1>
          <h6 className="py-1">Anonymous thought, no strings</h6>
          <p className="d-none d-md-block py-xl-3 small">
            Feeling weighed down or just need to get something off your chest? Whisper it here—no names, no pressure, just a safe spot to let it all out. Whether it’s a silly thought, a secret you’ve been holding, or something you can’t say anywhere else, you’re not alone. Scroll down to see what others are sharing, or drop your own whisper—this is your space, and we’re here to listen.
          </p>
          <p className="d-block d-md-none small">
            Need to vent or share a secret? Whisper it here—no names, no pressure. You’re not alone.
          </p>
        </div>
      </div>

      <div className="container px-lg-5 text-center">
        <div className="row gap-4 p-md-5 p-4">
          <div className="col-md bg-white p-4 rounded-5 shadow-lg text-dark">
            <p className="fs-1 mb-2">🔒</p>
            <h6 className="">100% Anonymous</h6>
            <p className="small mb-0">
              No sign up, no email, no name — your identity stays completely
              hidden.
            </p>
          </div>
          <div className="col-md bg-white p-4 rounded-5 shadow-lg text-dark">
            <p className="fs-1 mb-2">📢</p>
            <h6 className="">Free Expression</h6>
            <p className="small mb-0">
              No sign up, no email, no name — your identity stays completely
              hidden.
            </p>
          </div>
          <div className="col-md  bg-white p-4 rounded-5 shadow-lg text-dark">
            <p className="fs-1 mb-2">💬</p>
            <h6 className="">Community Wall</h6>
            <p className="small mb-0">
              No sign up, no email, no name — your identity stays completely
              hidden.
            </p>
          </div>
        </div>

        <section className="p-md-5 py-5">
          <div className="container text-center">
            <h4 className="mb-2">Start Whispering Now</h4>
            <p className="mb-3">
              Click below to share your thoughts or see what others have said.
            </p>
            <div className="text-nowrap">
              {" "}
              <Link to="/submit" className="btn btn-success btn-sm me-3">
                🪂 Drop a Whisper
              </Link>
              <Link to="/wall" className="btn btn-outline-dark btn-sm">
                🧱 View the Wall
              </Link>
            </div>
          </div>
        </section>

        <section className="p-md-5">
          <div className="container bg-white rounded-5 p-4">
            <h5 className="text-start">Recent Whispers:</h5>
            <div className="row row-cols-md-2 row-cols-1 text-start g-2 ">
              {[
                "I feel like everyone expects me to have it all together, but most days I’m just trying to get through without breaking down. The pressure to always look strong is exhausting, and sometimes I wish I could just let someone see how much I’m struggling inside.",

                "I’m constantly worried about what others think of me. I put on a brave face, but inside I’m terrified of being judged or rejected. It’s like I’m always walking on eggshells, trying to keep everyone happy while feeling like I’m losing myself in the process.",

                "My family relies on me for everything, and the pressure to not let them down keeps me up at night. I’m scared of making mistakes, but I can’t show it. I just want someone to tell me it’s okay to not be perfect.",

                "I’m terrified of failing at my new job, but I can’t tell anyone because they all think I’m confident. Every day feels like I’m pretending, and I worry that one mistake will make everyone see I’m not as capable as they think.",

                "Sometimes I wish I could just disappear for a while and not have to explain myself to anyone. The constant questions and expectations are overwhelming, and I just want a break from pretending everything is fine."
              ].map((text, idx) => (
                <div
                  key={idx}
                  className={`col m-0 p-2 ${idx % 2 === 0 ? " border-end" : ""} ${idx % 2 === 1 ? " border-start" : ""}`}
                >
                  <p
                    className="small"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <footer className="py-5">
          <p style={{ fontVariant: "small-caps" }}>
            Built with empathy 🤫 by {" "}
            <a
              href="https://github.com/josh-priv/whisper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline"
            >
              Josh
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
