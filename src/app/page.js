import DermatologyCard from "@/components/DermatologyCard";
import { Footer } from "@/components/Footer";
import HeroCarousal from "@/components/HeroCarousal";
import { Nanomedicine } from "@/components/NanoMedicine";
import NewsCard from "@/components/NewsCard";
import StatsSection from "@/components/StatsStection";
import Image from "next/image";
const dermatologyCards = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cedc83ebe652f3df7a015ff7d82ed61cc86e6082d8dce03050db5a8c0399f9f?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9",
    title: "Onychomycosis",
    subtitle: "(Fungal Nail)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3eb7b9eb18ee56c72aa9ef37f2192f26eb0e1b1a0472bedd8beeffecff1b7a8?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9",
    title: "Tinea Pedis",
    subtitle: "(Athlete's Foot)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f545abab661017130638603334b80c232dfa74587f890a7d2fe79c56e28dc5cd?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9",
    title: "Atopic Dermatitis",
    subtitle: "(Eczema)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9423824b844e3f35c6a9cf31bb76522612f609cc4f782c95423804e0de13728e?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9",
    title: "Other Conditions",
  },
];

const newsItems = [
  {
    date: "November 13th, 2023",
    title:
      "Blueberry Therapeutics Meets Primary and Secondary Endpoints in Phase 2b Trial in Onychomycosis",
    content:
      "Primary endpoint (negative culture and/or clear nail growth) met with 83.3% response rate Secondary endpoints met at Week 52 after 9-months off treatment Limited Sanoderm, a pharmaceutical company focused on developing innovative, topical nanomedicines ...",
  },
  {
    date: "October 17th, 2023",
    title: "A warm welcome to Megan!",
    content:
      "We'd like to extend a warm welcome to our new Laboratory Technician, Megan Dawson. Megan joins us with a Masters in Medical Microbiology from the University of Manchester, and after gaining lots of relevant skills in an associate practitioner ...",
  },
  {
    date: "July 4th, 2023",
    title: "Phase 2b Trial in Fungal Nail Infection Completed",
    content:
      "Blueberry Therapeutics is pleased to announce the completion of our European Phase 2b trial of BB2603 (BBTAF202). This trial is assessing the efficacy and safety of different doses of BB2603, a new topical anti-fungal ...",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center  ">
        <HeroCarousal />
        {/* Dermatology Section */}
        <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-zinc-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 max-w-full w-[823px] max-md:mb-2.5">
            <div className="flex flex-col self-end px-5 w-full text-center rounded-none">
              <div className="self-center text-4xl font-semibold text-green-800">
                Dermatology
              </div>
              <div className="mt-4 text-xl font-light leading-6 text-stone-500 max-md:max-w-full">
                Blueberry Therapeutics are committed to the development of
                innovative new therapies for the treatment of common
                dermatological disorders.
              </div>
            </div>
            <div className="flex justify-between items-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex sm:flex-row flex-col gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full max-sm:mx-auto">
                {dermatologyCards.map((card, index) => (
                  <DermatologyCard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Nanomedicine></Nanomedicine>
        <StatsSection></StatsSection>
        {/* News Section */}
        <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1040px] max-md:max-w-full">
            <div className="self-start text-4xl font-semibold text-center text-green-800 max-md:max-w-full">
              News
            </div>
            <div className="flex flex-wrap gap-10 justify-between items-center mt-10 w-full max-md:max-w-full">
              {newsItems.map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
