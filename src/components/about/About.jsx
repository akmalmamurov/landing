import AboutBottom from "./AboutBottom";
import AboutInfo from "./AboutInfo";
import AboutMid from "./AboutMid";
import AboutTop from "./AboutTop";

export const About = () => {
  return (
    <section id="about" className="py-[160px]">
      <div className="flex flex-col gap-20 lg:gap-[122px]">
        <AboutInfo />
        <AboutTop />
        <AboutMid />
        <AboutBottom />
      </div>
    </section>
  );
};

export default About;
