import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets, reset } from "../../Tickets/ticketSlice";
import { useNavigate } from "react-router-dom";
import AccountTicket from "./AccountTicket";

const AccountMain = ({ ticketClickHandle }) => {
  const { tickets, isLoading, isSuccess, updateSuccess } = useSelector(
    (state) => state.tickets
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (tickets.length > 0) return;
    dispatch(getAllTickets());
  }, [dispatch, updateSuccess]);

  return (
    <div className='flex flex-col space-y-4 w-full h-full'>
      <div className='flex flex-col'>
        <h5 className='font-semibold'>Worked on</h5>
        <p className='text-gray-text text-xs'>
          See every ticket you have created
        </p>
      </div>

      <div className='border rounded-lg p-5'>
        {tickets
          ?.filter((ticket) => ticket.user === user._id)
          ?.map((ticket) => {
            return (
              <AccountTicket
                key={ticket._id}
                {...ticket}
                ticketClickHandle={ticketClickHandle}
              />
            );
          })}

        <button
          onClick={() => navigate("/")}
          className='text-xs text-gray-text hover:underline ml-3 mt-6'
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default AccountMain;
