import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page d-flex flex-column justify-content-center align-items-center min-vh-100 text-center p-md-5 p-4">
      <div className="bg-light p-3 rounded-5 shadow-lg text-dark mx-lg-5">
        <section className="bg-light text-dark py-3 px-md-5">
          <div className="container text-center">
            <h1 className="">Whispers</h1>
            <p>Anonymous thoughts, No strings</p>

            <p>
              Whispers is a platform for you to share your thoughts, Got
              something to say but no one to tell?{" "}
              <br className="d-none d-lg-block" /> Whisper it here. We don't
              know who you are - and that's the point
            </p>
          </div>
        </section>

        <section className="px-4 py-3">
          <div className="container px-lg-5">
            <div className="row text-center px-md-5">
              <div className="col-md-4 border border-start-0 p-3">
                <h6 className="">100% Anonymous</h6>
                <p className="small mb-0">
                  No sign up, no email, no name — your identity stays completely
                  hidden.
                </p>
              </div>

              <div className="col-md-4 border p-3">
                <h6 className="">Free Expression</h6>
                <p className="small mb-0">
                  Say what you really feel — positive or negative — in a safe,
                  unfiltered space.
                </p>
              </div>

              <div className="col-md-4 border border-end-0 p-3">
                <h6 className="">Community Wall</h6>
                <p className="small mb-0">
                  Read whispers from others and find comfort knowing you're not
                  alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3 bg-light">
          <div className="container text-center">
            <h4 className="mb-2">Start Whispering Now</h4>
            <p className="mb-3">
              Click below to share your thoughts or see what others have said.
            </p>
            <div className="text-nowrap">
              {" "}
              <Link to="/submit" className="btn btn-success me-3">
                Drop a Whisper
              </Link>
              <Link to="/wall" className="btn btn-outline-dark">
                View the Wall
              </Link>
            </div>
          </div>
        </section>

        <section className="py-3 bg-light px-md-5">
          <div className="container text-center px-lg-5">
            <h5 className="mb-3">Why Whispers?</h5>
            <p className="mb-0">
              In a world where everyone is connected, sometimes we feel more
              alone than ever. Whispers gives you a voice without the fear of
              judgment or exposure. It's a place to vent, share, and connect
              with others who understand.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
