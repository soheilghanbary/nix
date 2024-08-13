import { ModeToggle } from '@/components/mode-toggle';

export default () => {
  return (
    <section className="p-8 text-center">
      <h1 className="text-center mb-4 font-extrabold text-2xl text-foreground">
        I'm Ready to Create!
      </h1>
      <ModeToggle />
    </section>
  );
};
