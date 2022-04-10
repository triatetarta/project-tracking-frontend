import Showcase from "./Showcase";
import Description from "./Description";
import Details from "./Details";
import Workflow from "./Workflow";
import Plans from "./Plans";
import { useSelector } from "react-redux";
import Tickets from "../../Tickets/components/Tickets";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  if (user)
    return (
      <main className='container mx-auto'>
        <Tickets />
      </main>
    );

  return (
    <main className='container mx-auto'>
      <Showcase />
      <Description />
      <Details />
      <Workflow />
      <Plans />
    </main>
  );
};

export default Home;
