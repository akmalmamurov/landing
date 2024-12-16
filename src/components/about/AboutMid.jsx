import { aboutMidImg } from "@/assets";

const AboutMid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center">
      {/* about left */}
      <div>
        <img src={aboutMidImg} alt="about" />
      </div>

      {/* about right */}
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
      </div>
    </div>
  );
};

export default AboutMid;
