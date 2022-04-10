const Ticket = ({ _id, project, status, description, ticketClickHandle }) => {
  return (
    <article
      onClick={() => ticketClickHandle(_id)}
      className='bg-ticket-bg hover:bg-ticket-bg-hover transition-all duration-200 cursor-pointer p-4 rounded-lg shadow-sm relative w-[300px]'
    >
      <p className='text-xs mb-6 truncate'>{description}</p>
      <div className='text-gray-text text-sm'>{project}</div>

      {status === "new" && (
        <div className='bg-deep-blue text-[10px] inline-flex text-white uppercase px-1.5 py-0.5 rounded-md absolute bottom-2 right-2.5'>
          {status}
        </div>
      )}
    </article>
  );
};

export default Ticket;
