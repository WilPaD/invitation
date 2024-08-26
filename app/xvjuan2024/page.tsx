"use client";
import { useState, FC, JSX, SVGProps } from "react";
import BackgroundMusic from "@/app/components/BackgroundMusic";
import Location from "@/app/components/Location";
import { Button } from "keep-react";
import { Play, Pause } from "phosphor-react";
import { BookmarkIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import ConfirmationButton from "@/app/components/ConfirmationButton";

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
    { name: "Mis XV", href: "#home", icon: UserIcon, current: true },
    { name: "Ubicacion", href: "#ubicacion", icon: MapPinIcon, current: false },
    {
      name: "Asistir",
      href: "#asistir",
      icon: BookmarkIcon,
      current: false,
    },
  ];

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <main className="flex relative min-h-screen flex-col items-center justify-between py-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed left-0 top-0 w-full justify-center border-b border-gray-300 from-zinc-200 pb-5 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <div className="flex justify-center items-center mb-2">
              <Button shape="circle" color="secondary" onClick={toggleMusic}>
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
                          ? "border-black text-black"
                          : "border-transparent text-gray-200 hover:border-gray-300 hover:text-white",
                        "group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium"
                      )}
                    >
                      <tab.icon
                        aria-hidden="true"
                        className={classNames(
                          tab.current
                            ? "text-black"
                            : "text-gray-200 group-hover:text-white",
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
        <div id="home" className="flex min-h-[100dvh] flex-col">
          <div className="flex-1 py-10 sm:py-16">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="rounded-xl bg-background/80">
                <div
                  className="relative bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/xv1.png')" }}
                >
                  <Image
                    src="/img/xv1.jpg"
                    width={800}
                    height={500}
                    alt="Fiesta de XV Años"
                    className="mx-auto"
                  />
                </div>
                <div className="mt-4 text-center p-6 sm:p-8">
                  <p className="text-lg font-medium text-primary">
                    ¡Un momento tan especial!
                  </p>
                  <p className="text-muted-foreground font-italic">
                    Hoy, hace 15 años, mis padres daban gracias a Dios por mí.
                    Hoy doy gracias a Dios por ellos, por cuidarme, tenerme
                    paciencia y aconsejarme. También doy gracias a Dios y a mi
                    familia por hacer ese día más especial. De igual manera, a
                    mis amigos por enseñarme el valor de una verdadera amistad.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-background/80 p-6 sm:p-8">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      Detalles
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-lg font-medium">Fecha</p>
                        <p className="text-muted-foreground">
                          14 de Septiembre del 2024
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-lg font-medium">Hora</p>
                        <p className="text-muted-foreground">
                          La ceremonia religiosa dará inicio a las 4:00 p.m.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2" id="location">
                      <MapPinIcon className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-lg font-medium">Lugar</p>
                        <p className="text-muted-foreground">
                          Para facilitar su ubicación, hemos colocado botones en
                          la parte inferior que los guiarán a través de Google
                          Maps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-background/80">
                <div
                  className="relative bg-cover bg-center rounded-t-2xl"
                  style={{ backgroundImage: "url('/img/xv2.jpg')" }}
                >
                  <Image
                    src="/wave2.svg"
                    width={800}
                    height={500}
                    alt="Fiesta de XV Años"
                    className="mx-auto rounded-xl"
                  />
                </div>
                <div className="mt-4 text-center p-6 sm:p-8">
                  <p className="text-lg font-medium text-primary">
                    ¡Celebremos juntos este momento tan especial!
                  </p>
                  <p className="text-muted-foreground font-italic">
                    Únete a Victoria García Gómez y Juan Carlos Tique Suárez,
                    los padres de Juan Roberto, en esta celebración llena de
                    alegría, amor y recuerdos imborrables.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-background/80">
                <Image
                  src="/img/xv4.jpg"
                  width={800}
                  height={500}
                  alt="Fiesta de XV Años"
                  className="mx-auto"
                />
                <div className="mt-4 text-center p-6 sm:p-8">
                  <p className="text-lg font-medium text-primary">
                    ¡Celebremos juntos este momento tan especial!
                  </p>
                  <p className="text-muted-foreground font-italic">
                    Acompaña a Gabriela Tique Pérez a honrar como madrina a Juan
                    Roberto en esta fiesta llena de alegría, amor y recuerdos
                    que perdurarán para siempre.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-background/80">
                <div
                  className="relative bg-cover bg-center rounded-t-2xl"
                  style={{ backgroundImage: "url('/img/iglesia.jpeg')" }}
                >
                  <Image
                    src="/wave2.svg"
                    width={800}
                    height={500}
                    alt="Ceremonia Religiosa"
                    className="mx-auto rounded-xl"
                  />
                </div>
                <div className="mt-4 text-center p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-primary">
                    Ceremonia Religiosa
                  </h2>
                  <p className="text-muted-foreground">
                    Antes de la fiesta de XV Años, se llevará a cabo una
                    ceremonia religiosa en la Iglesia La Divina Providencia.
                  </p>
                  <p className="text-muted-foreground">
                    La misa dará inicio a las 4:00 p.m.
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/GBn2XjaqejV58VJu5"
                    className="inline-flex items-center mt-4 gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    <MapIcon className="h-5 w-5" />
                    Ver en Google Maps
                  </Link>
                </div>
              </div>
              <div id="ubicacion" className="rounded-xl bg-background/80">
                <div
                  className="relative bg-cover bg-center rounded-b-2xl"
                  style={{ backgroundImage: "url('/img/xv7.jpg')" }}
                >
                  <Image
                    src="/wave.svg"
                    width={800}
                    height={500}
                    alt="Fiesta de XV Años"
                    className="mx-auto rounded-xl"
                  />
                </div>
                <div className="mt-4 text-center p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-primary">
                    Ubicación de la fiesta
                  </h2>
                  <p className="text-muted-foreground">
                    La fiesta de XV Años de Juan Roberto se llevará a cabo en el
                    Casino Social de La Piedra 2da.
                  </p>
                  <p className="text-muted-foreground">
                    La fiesta iniciará alrededor de las 6:00 p.m.
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/AZYtiPSzDxr4PSSa9"
                    className="inline-flex items-center mt-4 gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    <MapIcon className="h-5 w-5" />
                    Ver en Google Maps
                  </Link>
                </div>
              </div>
              <div id="asistir" className="rounded-xl bg-background/80">
                <div
                  className="relative bg-cover bg-center rounded-t-2xl"
                  style={{ backgroundImage: "url('/img/xv9.jpg')" }}
                >
                  <Image
                    src="/wave2.svg"
                    width={800}
                    height={500}
                    alt="Confirmación de Asistencia"
                    className="mx-auto rounded-xl"
                  />
                </div>
                <div className="mt-4 text-center p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-primary">
                    Confirma tu Asistencia
                  </h2>
                  <p className="text-muted-foreground">
                    Al hacer clic en el siguiente botón, por favor escribe tu
                    nombre para que puedas ser agregado a la lista de invitados.
                    Nos encantaría que pudieras acompañarnos.
                  </p>

                  <ConfirmationButton
                    phone="9931269013"
                    message={`¡Confirmo mi Asistencia! \n\nSoy: `}
                  />
                </div>
              </div>
              <div className="rounded-xl bg-background/80">
                <Image
                  src="/img/xv10.jpg"
                  width={800}
                  height={500}
                  alt="Fiesta de XV Años"
                  className="mx-auto"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-3xl font-bold text-primary">
                    ¡No Faltes!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <footer className="absolute flex flex-col justify-center bottom-0 bg-primary-foreground/80 py-4 px-4 text-center text-sm text-primary sm:px-8">
            <p>
              &copy; 2024 Fiesta de XV Años de Juan Roberto. Todos los derechos
              reservados.
            </p>
            <div>
              <p>Song: </p>
              <p>The Feels - Twice</p>
            </div>
          </footer>
        </div>
        <BackgroundMusic src="mp3/The_Feels.mp3" isPlaying={isPlaying} />
        {/* <div className="w-full flex justify-center space-x-14">
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-center">Lugar de Santa Misa</p>
          <Location location="https://maps.app.goo.gl/GBn2XjaqejV58VJu5" />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-center">Lugar de Recepción</p>
          <Location location="https://maps.app.goo.gl/AZYtiPSzDxr4PSSa9" />
        </div>
      </div> */}
      </main>
    </>
  );
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
