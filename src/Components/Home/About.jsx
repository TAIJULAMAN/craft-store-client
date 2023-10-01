import { Link } from "react-router-dom";
import ab1 from "../../assets/about/11.jpg";
import ab2 from "../../assets/about/12.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-cyan-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={ab1} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={ab2}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            Handicraft and artistic creations allow you to innovate, create and
            find solutions to problems. Thanks to creativity and imagination,
            you will make better decisions and find more answers to everyday
            situations or problems.
          </p>
          <p className="py-6">
            Research has shown that crafting, regardless of the medium you use,
            can bolster mood, improve self-confidence, and reduce stress
            overall. In addition, crafting has also shown to improve mental
            agility, improves both gross and fine motor movements, and also
            decrease cognitive decline.
          </p>
          <Link
                to="https://en.wikipedia.org/wiki/Handicraft#:~:text=Usually
                %2C%20the%20term%20is%20applied,their%20locality%20without%20using%20machines."
              >
                {" "}
                <button className="btn btn-outline btn-primary">
                  See More
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
