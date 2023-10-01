import { Link } from "react-router-dom";
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full  h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#67e8f9] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Reliable Price For Crafts.</h2>
            <p>
              Crafts is used to describe artistic practices within the family of
              decorative arts that traditionally are defined by.
            </p>
            <div>
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
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Reliable Price For Crafts.</h2>
            <p>
              Crafts is used to describe artistic practices within the family of
              decorative arts that traditionally are defined by.
            </p>
            <div>
              <button className="btn btn-primary mr-5">See More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Crafts
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Reliable Price For Crafts.</h2>
            <p>
              Crafts is used to describe artistic practices within the family of
              decorative arts that traditionally are defined by.
            </p>
            <div>
              <button className="btn btn-primary mr-5">See More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Crafts
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Reliable Price For Crafts.</h2>
            <p>
              Crafts is used to describe artistic practices within the family of
              decorative arts that traditionally are defined by.
            </p>
            <div>
              <button className="btn btn-primary mr-5">See More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Crafts
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
