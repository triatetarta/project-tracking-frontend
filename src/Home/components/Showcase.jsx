import tasksBackground from "../../../public/assets/images/tasks.svg";

const Showcase = () => {
  return (
    <section className='flex justify-between mt-10'>
      <div className='self-center'>
        <p className='font-semibold text-5xl text-header-main leading-[3.5rem]'>
          The #1 project <br />
          management <br />
          tool used by agile teams
        </p>
        <button className='mt-6 font-semibold bg-deep-blue text-white px-4 py-2 rounded-md hover:bg-light-blue transition duration-75 flex items-center'>
          Get it free
        </button>
      </div>
      <div className=''>
        <img src={tasksBackground} alt='task background' />
      </div>
    </section>
  );
};

export default Showcase;
