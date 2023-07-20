'use client';

import React from 'react';
import { NextPage } from 'next';
import {
  ArrowRight,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const tools = [
  {
    name: 'Chat',
    icon: MessageSquare,
    href: '/chat',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    name: 'Image Generation',
    icon: Image,
    href: '/image',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Video Generation',
    icon: Video,
    href: '/video',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    name: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-lime-500',
    bgColor: 'bg-lime-500/10',
  },
];

const Dashboard: NextPage = ({}) => {
  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore the power of AI
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Chat with your own AI assistant.
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'>
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn(tool.color, 'w-6 h-6')} />
              </div>
              <div className='font-semibold'>{tool.name}</div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
