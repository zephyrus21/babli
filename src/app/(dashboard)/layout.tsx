import Navbar from '@/components/navigation/navbar';
import Sidebar from '@/components/navigation/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-4 relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-50 bg-gray-900'>
        <Sidebar />
      </div>
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
