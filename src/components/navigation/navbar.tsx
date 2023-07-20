import { UserButton } from '@clerk/nextjs';

import MobileSidebar from '@/components/navigation/mobile-sidebar';

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Navbar;
