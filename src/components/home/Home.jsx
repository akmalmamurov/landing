import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

export const Home = () => {
  return (
    <section id="home" className=" pt-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        {/* home left */}
        <HomeLeft />
        {/* home right */}
        <HomeRight />
      </div>
    </section>
  );
};

export default Home;
