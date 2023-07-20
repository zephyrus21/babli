import { Loader2 } from 'lucide-react';

export const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className='animate-spin'>
        <Loader2 />
      </div>
      <p className='text-sm text-muted-foreground'>Babli is thinking...</p>
    </div>
  );
};
