import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type LandingPageProps = {};

const LandingPage: NextPage<LandingPageProps> = ({}) => {
  return (
    <div>
      <Link href='/auth/signin'>
        <Button>Login</Button>
      </Link>
      <Link href='/auth/signup'>
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
