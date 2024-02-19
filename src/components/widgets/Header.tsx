import { component$ } from "@builder.io/qwik";
import Logo from "~/components/common/Logo";

export default component$(() => {
  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none mx-auto border-b border-gray-50/0 transition-[opacity] ease-in-out w-2/3`}
    >
      <div class="absolute inset-0"></div>
      <div class="relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <a
          class="flex items-center"
          href={"https://co-w.io/"}
          target="_blank"
          rel="nofollow noopener"
        >
          <Logo />
        </a>
      </div>
    </header>
  );
});
