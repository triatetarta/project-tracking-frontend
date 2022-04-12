import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../ticketSlice";
import { XIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { TicketIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Comment } from "../../Comments/";
import moment from "moment";
import toast from "react-hot-toast";
import { createComment, getComments } from "../../Comments/commentSlice";

const TicketDetails = ({ closeTicketDetails, ticketId }) => {
  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );
  const { comments, isLoading: commentsIsLoading } = useSelector(
    (state) => state.comment
  );
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [commentText, setCommentText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (ticketId === undefined) return;
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getComments(ticketId));
  }, [isError, message, ticketId]);

  const closeHandle = (e) => {
    if (e.target.classList.contains("ticketBackdrop")) {
      closeTicketDetails();
    }
  };

  const onCommentSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment({ commentText, ticketId }));
    setCommentText("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      onClick={closeHandle}
      className='bg-black/20 backdrop-blur-sm fixed top-0 w-full h-full z-50 flex justify-center items-start ticketBackdrop text-header-main'
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className='bg-white py-6 px-4 mt-28 w-[350px] rounded-md shadow-sm'
      >
        <div className='flex items-center justify-between mb-10'>
          <div className='flex items-center justify-center'>
            <span>
              <TicketIcon className='h-6 w-6 text-header-main' />
            </span>
            <h3 className='ml-1 font-medium'>Ticket Details</h3>
          </div>

          <div
            onClick={closeTicketDetails}
            className='h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-lg'
          >
            <XIcon className='h-6 w-6' />
          </div>
        </div>
        <div>
          <div className='pl-3'>
            <p className='text-xs text-gray-text'>Project</p>
            <h4 className='text-xl font-medium'>{ticket.project}</h4>
          </div>

          <div className='flex flex-col justify-center mt-4 pl-3'>
            <p className='text-sm font-medium'>Description</p>
            <p className='text-sm'>{ticket.description}</p>
          </div>

          <div
            onClick={() => setDetailsOpen(!detailsOpen)}
            className={`mt-12 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 py-3 border ${
              detailsOpen ? "rounded-t-lg border-b-0" : "rounded-lg"
            }`}
          >
            <p className='text-sm font-medium pl-3'>Details</p>
            <div className='text-xs text-gray-text ml-1.5'>
              {!detailsOpen ? "Reporter, Date" : ""}
            </div>
            <div className='mr-3 ml-auto'>
              {!detailsOpen ? (
                <ChevronDownIcon className='w-5 h-5' />
              ) : (
                <ChevronUpIcon className='w-5 h-5' />
              )}
            </div>
          </div>

          {detailsOpen && (
            <div className='border rounded-b-lg pb-4'>
              <div className='flex flex-col justify-center pl-5 mt-5'>
                <p className='text-xs text-gray-text mb-1'>Reporter</p>

                <div className='flex items-center'>
                  <span className='h-5 w-5 rounded-full flex items-center justify-center bg-nice-orange font-semibold text-sm'>
                    {ticket.name?.charAt(0)}
                  </span>
                  <p className='ml-1 text-xs'>{ticket.name}</p>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-5 pl-5'>
                <p className='text-xs text-gray-text'>Created</p>
                <p className='text-xs'>
                  {moment(ticket.createdAt).startOf("hour").fromNow()}
                </p>
              </div>
              {ticket.createdAt !== ticket.updatedAt ? (
                <div className='flex flex-col justify-center mt-2'>
                  <p className='text-xs text-gray-text'>Updated</p>
                  <p className='text-xs'>
                    {moment(ticket.updatedAt).startOf("hour").fromNow()}
                  </p>
                </div>
              ) : null}
            </div>
          )}
        </div>

        <div className='mt-10 pl-3'>
          <p className='text-sm font-medium mb-3'>Comments</p>
          <div className='flex items-center space-x-2 w-full'>
            <div className='h-9 w-9 mb-1'>
              <span className='h-9 w-9 rounded-full flex items-center justify-center bg-nice-orange font-semibold text-base'>
                {ticket.name?.charAt(0)}
              </span>
            </div>

            <form className='w-full'>
              <textarea
                className='rounded-lg border w-full py-2 px-3 focus:outline-1 outline-deep-blue text-sm'
                rows={2}
                style={{ resize: "none" }}
                name='commentText'
                id='commentText'
                placeholder='Add a comment...'
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </form>
          </div>
          {commentText.length > 1 && (
            <div className='flex mt-1'>
              <button
                className='bg-deep-blue text-white py-1 px-2 rounded-md hover:bg-light-blue transition-all duration-100 text-sm ml-11 font-semibold'
                onClick={onCommentSubmit}
              >
                Add
              </button>
            </div>
          )}

          <div className='mt-10 flex flex-col space-y-5'>
            {comments?.map((comment) => {
              return <Comment key={comment._id} {...comment} />;
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TicketDetails;
