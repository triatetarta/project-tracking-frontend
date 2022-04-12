import { PlusIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets, reset } from "../ticketSlice";
import { AnimatePresence } from "framer-motion";
import NewTicket from "./NewTicket";
import Ticket from "./Ticket";
import TicketDetails from "./TicketDetails";

const Tickets = () => {
  const [createNew, setCreateNew] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [openTicket, setOpenTicket] = useState(false);
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(reset());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getAllTickets());
  }, [dispatch]);

  const ticketClickHandle = (id) => {
    setSelectedId(id);
    setOpenTicket(true);
  };

  const closeTicketDetails = () => {
    setSelectedId("");
    setOpenTicket(false);
  };

  return (
    <section className='min-h-[calc(100vh-17.9rem)] flex items-center justify-between flex-col text-header-main relative'>
      <AnimatePresence>
        {openTicket && (
          <TicketDetails
            ticketId={selectedId}
            closeTicketDetails={closeTicketDetails}
          />
        )}
      </AnimatePresence>

      <div className='mt-10 flex flex-col bg-gray-100 py-4 px-6 rounded-lg'>
        <h1 className='text-xl font-semibold mb-4'>Ticket Board</h1>

        <div className='flex flex-col space-y-2'>
          {tickets?.map((ticket) => {
            return (
              <Ticket
                key={ticket._id}
                {...ticket}
                ticketClickHandle={ticketClickHandle}
              />
            );
          })}
        </div>

        <button
          onClick={() => setCreateNew(true)}
          className='flex items-center mt-3 hover:bg-gray-200 px-2 py-3 rounded-lg'
        >
          <PlusIcon className='w-3 h-3 text-gray-text' />
          <span className='text-xs font-semibold'>Create Ticket</span>
        </button>
      </div>

      <AnimatePresence>
        {createNew && <NewTicket setCreateNew={setCreateNew} />}
      </AnimatePresence>

      <div className='container fixed bottom-60'>
        <div className='relative'>
          <button
            onClick={() => setCreateNew(true)}
            className='bg-deep-blue text-white self-end mb-4 px-4 py-4 absolute bottom-0 right-0  rounded-full hover:bg-light-blue hover:scale-105 active:scale-95 transition-all duration-150'
          >
            <PlusIcon className='w-8 h-8' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
