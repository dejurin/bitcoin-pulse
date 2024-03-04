import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    public: true,
    staleWhileRevalidate: 600,
    maxAge: 15,
    sMaxAge: 30,
  });
};

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
