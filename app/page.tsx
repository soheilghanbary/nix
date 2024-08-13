'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { api } from '@/lib/api';
import { useEffect, useState } from 'react';

const sayHello = async () => {
  const response = await api.hello.$get();
  return response.json();
};

export default () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    sayHello().then(setData);
  }, []);

  return (
    <section className="p-8 text-center">
      <h1 className="mb-4 text-center font-extrabold text-2xl text-foreground">
        I'm Ready to Create!
      </h1>
      {data ? <pre>{JSON.stringify(data)}</pre> : <p>Loading Data ...</p>}
      <br />
      <ModeToggle />
    </section>
  );
};
