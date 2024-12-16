import { aboutIcon, aboutTopImg } from "@/assets";

const AboutInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      {/* about left */}
      <div>
        <div className="mb-10 lg:mb-20">
          <h2 className="font-medium text-xl lg:text-[36px] lg:leading-[48px] text-infiniteNight mb-4">
            Light, Fast & Powerful
          </h2>
          <p className="font-normal text-sm text-marvellous lg:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="flex gap-[30px] flex-col sml:flex-row">
          <div className="flex flex-col items-center sml:items-start">
            <img src={aboutIcon} alt="icon" className="mb-[14px]" />
            <h5 className="font-medium text-sm text-infiniteNight lg:text-base lg:leading-[26px]">
              Title Goes Here
            </h5>
            <p className="font-normal text-creekFals text-xs text-center leading-[18px] sml:text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center sml:items-start">
            <img src={aboutIcon} alt="icon" className="mb-[14px]" />
            <h5 className="font-medium text-sm text-infiniteNight lg:text-base lg:leading-[26px]">
              Title Goes Here
            </h5>
            <p className="font-normal text-creekFals text-xs text-center leading-[18px] sml:text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* about right */}
      <div>
        <img src={aboutTopImg} alt="about" />
      </div>
    </div>
  );
};

export default AboutInfo;
