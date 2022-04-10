import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../ticketSlice";
import { XIcon } from "@heroicons/react/solid";
import moment from "moment";
import toast from "react-hot-toast";

const TicketDetails = ({ closeTicketDetails, ticketId }) => {
  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (ticketId === undefined) return;
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // dispatch(getNotes(ticketId));
    // eslint-disable-next-line
  }, [isError, message, ticketId]);

  const closeHandle = (e) => {
    if (e.target.classList.contains("ticketBackdrop")) {
      closeTicketDetails();
    }
  };

  return (
    <div
      onClick={closeHandle}
      className='p-4 bg-black/20 backdrop-blur-sm fixed top-0 w-full h-full z-50 flex justify-center items-start ticketBackdrop text-header-main'
    >
      <div className='bg-white p-6 mt-24 w-[350px] rounded-md shadow-sm'>
        <div className='flex items-center justify-between mb-10'>
          <h3>Ticket Details</h3>
          <div
            onClick={closeTicketDetails}
            className='h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-lg'
          >
            <XIcon className='h-6 w-6' />
          </div>
        </div>
        <div>
          <div>
            <p className='text-xs text-gray-text'>Project</p>
            <h4 className='text-xl font-medium'>{ticket.project}</h4>
          </div>

          <div className='flex flex-col justify-center mt-4'>
            <p className='text-sm font-medium'>Description</p>
            <p className='text-sm'>{ticket.description}</p>
          </div>

          <div className='flex flex-col justify-center mt-12'>
            <p className='text-xs text-gray-text mb-1'>Reporter</p>

            <div className='flex items-center'>
              <span className='h-5 w-5 rounded-full flex items-center justify-center bg-nice-orange font-semibold text-sm'>
                {ticket.name?.charAt(0)}
              </span>
              <p className='ml-1 text-xs'>{ticket.name}</p>
            </div>
          </div>
          <div className='flex flex-col justify-center mt-4'>
            <p className='text-xs text-gray-text'>Created</p>
            <p className='text-xs'>{moment(ticket.createdAt).format("lll")}</p>
          </div>
          {ticket.createdAt !== ticket.updatedAt ? (
            <div className='flex flex-col justify-center mt-2'>
              <p className='text-xs text-gray-text'>Updated</p>
              <p className='text-xs'>
                {moment(ticket.updatedAt).format("lll")}
              </p>
            </div>
          ) : null}
        </div>

        <div className='mt-10'>
          <p className='text-sm font-medium'>Comments</p>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
