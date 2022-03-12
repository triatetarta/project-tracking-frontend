import Showcase from "./Showcase";
import Description from "./Description";
import Details from "./Details";
import Workflow from "./Workflow";
import Plans from "./Plans";

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Showcase />
      <Description />
      <Details />
      <Workflow />
      <Plans />
    </div>
  );
};

export default Home;
