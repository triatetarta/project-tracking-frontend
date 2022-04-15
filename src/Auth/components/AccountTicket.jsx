import {
  BadgeCheckIcon,
  DocumentTextIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import { useCallback } from "react";
import moment from "moment";

const AccountTicket = ({
  _id,
  project,
  status,
  ticketClickHandle,
  createdAt,
  updatedAt,
}) => {
  const getIcons = useCallback(() => {
    if (status === "to do") {
      return <DocumentTextIcon className='w-8 h-8 text-deep-blue mr-1' />;
    } else if (status === "in progress") {
      return <ClockIcon className='w-8 h-8 text-flow-yellow-deep mr-1' />;
    } else if (status === "closed") {
      return <BadgeCheckIcon className='w-8 h-8 text-flow-green-deep mr-1' />;
    }
  }, []);

  return (
    <article
      onClick={() => ticketClickHandle(_id)}
      className='flex items-center hover:bg-gray-100 transition-all duration-200 p-2 rounded-lg cursor-pointer'
    >
      <div className='mr-2'>{getIcons()}</div>
      <div className='flex flex-col'>
        <p className='text-sm'>
          {project} <span>•</span>
          <span className='ml-1'>{status}</span> <span>ticket</span>
        </p>
        <p className='text-xs text-gray-text'>
          <span className='mr-1'>You created this</span>
          {moment(moment(createdAt).local().format()).fromNow()}
        </p>
      </div>
    </article>
  );
};

export default AccountTicket;
