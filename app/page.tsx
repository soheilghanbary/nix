'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sayHello = async () => {
  const response = await api.hello.$get();
  return response.json();
};

type HelloResponse = Awaited<ReturnType<typeof sayHello>>;

export default () => {
  const [data, setData] = useState<HelloResponse>();

  useEffect(() => {
    sayHello().then(setData);
  }, []);

  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text font-black text-3xl text-transparent lg:text-5xl dark:from-gray-300 dark:to-gray-500">
        Welcome to Nix Starter
      </h1>
      <p>The Modern Next.js Stack</p>
      <Button asChild className="rounded-full">
        <Link target="_blank" href={'https://github.com/soheilghanbary/nix'}>
          Get Started 🚀
        </Link>
      </Button>
      <ModeToggle />
      {data ? <pre>{JSON.stringify(data)}</pre> : <p>Loading Data ...</p>}
    </section>
  );
};
