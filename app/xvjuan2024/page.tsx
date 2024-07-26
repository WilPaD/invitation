"use client";
import { useState, FC } from "react";
import BackgroundMusic from "@/app/components/BackgroundMusic";
import Location from "@/app/components/Location";
import { Button } from "keep-react";
import { Play, Pause } from "phosphor-react";
import { MapPinIcon, BookmarkIcon, UserIcon } from "@heroicons/react/20/solid";

export default function Roberto() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };

  type Tab = {
    name: string;
    href: string;
    icon: FC<React.SVGProps<SVGSVGElement>>;
    current: boolean;
  };

  const tabs: Tab[] = [
    { name: "Mis XV", href: "#", icon: UserIcon, current: true },
    { name: "Ubicacion", href: "#", icon: MapPinIcon, current: false },
    {
      name: "Asistir",
      href: "#",
      icon: BookmarkIcon,
      current: false,
    },
  ];

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 w-full justify-center border-b border-gray-300 from-zinc-200 pb-5 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="flex justify-center items-center mb-2">
            <Button
              shape="circle"
              color="primary"
              variant="outline"
              onClick={toggleMusic}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="border-b border-gray-200">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    aria-current={tab.current ? "page" : undefined}
                    className={classNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium"
                    )}
                  >
                    <tab.icon
                      aria-hidden="true"
                      className={classNames(
                        tab.current
                          ? "text-indigo-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "-ml-0.5 mr-2 h-5 w-5"
                      )}
                    />
                    <span>{tab.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <BackgroundMusic src="OutofSight.mp3" isPlaying={isPlaying} />
      <div className="w-full flex justify-center space-x-14">
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-center">Lugar de Santa Misa</p>
          <Location location="https://maps.app.goo.gl/GBn2XjaqejV58VJu5" />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-center">Lugar de Recepción</p>
          <Location location="https://maps.app.goo.gl/AZYtiPSzDxr4PSSa9" />
        </div>
      </div>
    </main>
  );
}
