'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Comfortaa } from 'next/font/google';
import { cn } from '@/lib/utils';
import {
  Code,
  Image,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Video,
} from 'lucide-react';

const logoFont = Comfortaa({
  weight: '600',
  subsets: ['latin'],
});

const routes = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    name: 'Chat',
    icon: MessageSquare,
    href: '/chat',
    color: 'text-violet-500',
  },
  {
    name: 'Image Generation',
    icon: Image,
    href: '/image',
    color: 'text-pink-500',
  },
  {
    name: 'Video Generation',
    icon: Video,
    href: '/video',
    color: 'text-rose-500',
  },
  {
    name: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-yellow-500',
  },
  {
    name: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-lime-500',
  },
  {
    name: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-neutral-500',
  },
];

type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className='space-y-4 py-4 flex-col h-full bg-neutral-900 text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link
          href='/dashboard'
          className={cn(
            'flex items-center pl-3 mb-10 text-2xl font-bold',
            logoFont.className
          )}>
          babli
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'flex items-center flex-1 text-sm font-medium p-3 hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-neutral-400'
              )}>
              <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
