import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import BitcoinParadise from "~/components/img/bitcoin-paradise.webp";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 w-2/3">
        <div class="pt-0 pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              <span class="sm:whitespace-nowrap text-[#f7931a]">Bitcoin </span>{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">pulse</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <div
                class="w-4/2 rounded-xl border font-semibold font-mono"
                style="background-color: #4158D0;background-image: linear-gradient(45deg, #039de1 0%, #C850C0 36%, #4158D0 100%);"
              >
                <crypto-converter-widget
                  shadow
                  symbol
                  live
                  background-color="transparent"
                  fiat="united-states-dollar"
                  crypto="bitcoin"
                  amount="1"
                  decimal-places="2"
                ></crypto-converter-widget>
                <script
                  async
                  src="https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget@1.5.2/dist/latest.min.js"
                ></script>
              </div>
              <div class="py-4">
                <a href="https://btc.currencyrate.today/usd" target="_blank" rel="noopener">
                  <span class="sm:whitespace-nowrap text-[#6366f1] font-semibold">
                  CurrencyRate
                </span>
                <span class="sm:whitespace-nowrap text-[#4f46e5] font-semibold">
                  .Today
                </span>
                </a>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={BitcoinParadise}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-xl"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
