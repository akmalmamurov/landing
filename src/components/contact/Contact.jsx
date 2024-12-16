import { Container } from "../container";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-[237px] pb-[172px] bg-contact-bg bg-no-repeat bg-cover bg-center mt-[100px]"
    >
      <Container>
        <div className="flex flex-col items-center">
          <h3 className="font-medium text-infiniteNight text-xl lg:text-[36px] lg:leading-[48px] mb-4">
            A Price To Suit Everyone
          </h3>
          <p className="font-normal text-sm lg:text-base text-center text-marvellous sml:w-1/2 mb-[35px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <h4 className="font-medium text-[32px] lg:text-[50px] text-[#222F65] lg:leading-[66px]">
            $40
          </h4>
          <p className="font-normal text-sm lg:text-base text-titleColor ">UI Design Kit</p>
          <div className="mt-[60px]">
            <p className="font-normal text-sm text-creekFals mb-[9px] text-center">See, One price. Simple.</p>
            <button className="Btn">Purchase Now</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
