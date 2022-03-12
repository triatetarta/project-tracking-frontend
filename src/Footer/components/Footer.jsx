const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 text-header-main'>
      <div className='container mx-auto py-6 flex items-start justify-between'>
        <div className='flex items-start space-x-1'>
          <div className='h-8 w-8'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 239 220'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M56.8508 160.849C12.7014 184.697 108 5.99995 109.824 14.976C111.648 23.952 113.206 119.267 113.206 119.267C113.206 119.267 190.751 142.747 213.376 160.874C236 179 101 137 56.8508 160.849Z'
                fill='url(#paint0_linear_502_3)'
              />
              <path
                d='M200.804 57.0484C247.608 42.0965 119.037 238.548 129.274 194.774C139.51 151 139.51 90.932 139.51 90.932C139.51 90.932 30.2338 44.2533 45.6171 36.6268C61.0003 29.0002 154 72.0003 200.804 57.0484Z'
                fill='url(#paint1_linear_502_3)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_502_3'
                  x1='1.93124'
                  y1='172.199'
                  x2='101.849'
                  y2='109.068'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0254CF' />
                  <stop offset='1' stopColor='#2684FF' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_502_3'
                  x1='256.733'
                  y1='52.9517'
                  x2='149.44'
                  y2='102.524'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0254CF' />
                  <stop offset='1' stopColor='#2684FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 className='uppercase font-bold text-xl'>ProTrack</h3>
        </div>

        <div className='flex flex-col space-y-4'>
          <h3 className='uppercase font-bold text-sm'>Products</h3>
          <ul className='text-sm flex flex-col space-y-1'>
            <li>ProTrack Software</li>
            <li>ProTrack Music</li>
            <li>ProTrack Marketing</li>
            <li>ProTrack Ai</li>
            <li>ProTrack Solutions</li>
          </ul>
        </div>
        <div className='flex flex-col space-y-4'>
          <h3 className='uppercase font-bold text-sm'>Resources</h3>
          <ul className='text-sm flex flex-col space-y-1'>
            <li>Tech Support</li>
            <li>Licensing & purchasing</li>
            <li>ProTrack Community</li>
            <li>Marketplace</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className='flex flex-col space-y-4'>
          <h3 className='uppercase font-bold text-sm'>Training</h3>
          <ul className='text-sm flex flex-col space-y-1'>
            <li>Instructors</li>
            <li>Tutorials</li>
            <li>Examples</li>
            <li>Dev Resources</li>
            <li>Other Services</li>
          </ul>
        </div>
        <div className='flex flex-col space-y-4'>
          <h3 className='uppercase font-bold text-sm'>About</h3>
          <ul className='text-sm flex flex-col space-y-1'>
            <li>Company</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
