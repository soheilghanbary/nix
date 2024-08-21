'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { api } from '@/lib/api';
import { useEffect, useState } from 'react';

const sayHello = async () => {
  const response = await api.hello.$get();
  return response.json();
};

type HelloResponse = Awaited<ReturnType<typeof sayHello>>

export default () => {
  const [data, setData] = useState<HelloResponse>();

  useEffect(() => {
    sayHello().then(setData);
  }, []);

  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-center font-extrabold text-2xl text-foreground">
        Nix Already to 🔥
      </h1>
      {data ? <pre>{JSON.stringify(data)}</pre> : <p>Loading Data ...</p>}
      <ModeToggle />
    </section>
  );
};
