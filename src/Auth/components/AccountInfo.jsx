import {
  BriefcaseIcon,
  GlobeAltIcon,
  PuzzleIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <p className='text-sm text-gray-text'>Welcome back,</p>
        <h3 className='text-xl font-semibold mb-10'>{user?.name}</h3>
      </div>

      <div className='border rounded-lg p-6 shadow-md'>
        <h4 className='text-gray-text text-sm mb-5'>ABOUT</h4>

        <ul className='flex flex-col space-y-6 text-sm'>
          <li className='flex items-center space-x-4'>
            <span>
              <BriefcaseIcon className='h-6 w-6 text-gray-text' />
            </span>
            <span>Software Engineer</span>
          </li>
          <li className='flex items-center space-x-4'>
            <span>
              <PuzzleIcon className='h-6 w-6 text-gray-text' />
            </span>
            <span>Development Dept.</span>
          </li>
          <li className='flex items-center space-x-4'>
            <span>
              <GlobeAltIcon className='h-6 w-6 text-gray-text' />
            </span>
            <span>W.F.H.</span>
          </li>
          <li className='flex items-center space-x-4'>
            <span>
              <LocationMarkerIcon className='h-6 w-6 text-gray-text' />
            </span>
            <span>London, UK</span>
          </li>
        </ul>

        <h4 className='text-gray-text text-sm mt-10 mb-5'>CONTACT</h4>
        <div className='flex items-center space-x-4'>
          <span>
            <MailIcon className='h-6 w-6 text-gray-text' />
          </span>
          <span className='text-sm'>{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
