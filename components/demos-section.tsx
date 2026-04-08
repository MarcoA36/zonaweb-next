"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
const demos = [
  {
    title: "Portal para Inmobiliarias",
    description: "Propiedades con fotos, precios y contacto directo.",
    href: "https://inmobiliaria-demo-2.vercel.app/",
    image: "/demo_inmo.webp",
  },
  {
    title: "Web para Hoteles",
    description: "Mostrá habitaciones y recibí reservas o consultas.",
    href: "https://hotel-demo-rho.vercel.app/",
    image: "/demo_hotel.webp",
  },
  {
    title: "Web para Restaurantess",
    description: "Mostra tu carta online y toma pedidos por WhatsApp.",
    href: "https://resto-demo-nine.vercel.app/",
    image: "/demo_resto.webp",
  },
  {
    title: "Agencias de viajes",
    description: "Mostra oda la información de tus destinos.",
    href: "https://turismo-demo-eta.vercel.app/",
    image: "/demo_turismo.webp",
  },
];

export default function DemoSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // autoplay refs (tipado correcto)
  const autoplayRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isVisibleRef = useRef(false);

  // actualizar index
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // autoplay control
  const startAutoplay = () => {
    if (!emblaApi || autoplayRef.current !== null || !isVisibleRef.current)
      return;

    autoplayRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // visibilidad (clave performance)
  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.5 },
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      observerRef.current?.disconnect();
      stopAutoplay();
    };
  }, [emblaApi]);

  // pausa al interactuar
  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => stopAutoplay();
    const onSelect = () => {
      if (isVisibleRef.current) startAutoplay();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 bg-primary overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Tu negocio listo para recibir consultas
          </h2>

          <p className="text-white/80 max-w-xl mx-auto">
            Mostrá tus productos o servicios de forma clara y permití que te
            contacten en segundos.
          </p>
        </div>

        {/* CAROUSEL */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {demos.map((demo, i) => {
              const isActive = i === activeIndex;

              return (
                <div key={i} className="min-w-full">
                  <Link href={demo.href} className="block">
                    <div className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl md:min-h-[420px] lg:min-h-[460px]">
                      {/* IMAGE */}
                      <div
                        className="relative flex items-center justify-center overflow-hidden
                          h-[min(72vw,320px)] min-h-[260px] sm:min-h-[300px] sm:h-[min(68vw,360px)]
                          md:h-auto md:min-h-[420px] lg:min-h-[460px]
                          bg-gradient-to-br from-neutral-100 to-neutral-50"
                      >
                        <div className="relative h-full w-full md:mx-auto md:max-w-[720px] md:px-8 md:py-10 lg:px-10">
                          <Image
                            src={demo.image}
                            alt={demo.title}
                            fill
                            className={`object-cover md:object-contain transition-all duration-700 ease-out ${
                              isActive
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-[0.98]"
                            }`}
                            sizes="(max-width: 768px) 100vw, 45vw"
                            priority={isActive}
                          />
                        </div>

                        {/* Desktop: difumina el paso imagen → textos */}
                        <div
                          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-white via-white/75 to-transparent md:block lg:w-8"
                          aria-hidden
                        />

                        {/* Overlay SOLO mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent md:hidden" />

                        {/* Texto sobre imagen SOLO mobile */}
                        <div className="absolute bottom-0 left-0 z-20 w-full p-5 md:hidden">
                          <h3 className="text-xl font-semibold text-white mb-1 leading-tight">
                            {demo.title}
                          </h3>
                          <p className="text-white/90 text-sm leading-snug">
                            {demo.description}
                          </p>
                        </div>
                      </div>

                      {/* TEXTO DESKTOP */}
                      <div
                        className={`relative hidden md:flex flex-col justify-center p-10 lg:p-14 bg-gradient-to-br from-white to-neutral-50 transition-all duration-700 ease-out ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        {/* Suaviza el borde izquierdo del panel de texto (encaja con el degradé de la imagen) */}
                        <div
                          className="pointer-events-none absolute inset-y-0 left-0 z-0 w-10 bg-gradient-to-r from-white/40 to-transparent lg:w-12"
                          aria-hidden
                        />
                        <div className="relative z-10">
                          <h3 className="text-3xl lg:text-4xl font-semibold mb-5 leading-tight text-gray-900">
                            {demo.title}
                          </h3>

                          <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                            {demo.description}
                          </p>

                          <ul className="space-y-3 mb-10 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-black rounded-full" />
                              Adaptado a tu negocio
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-black rounded-full" />
                              Optimizado para celular
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-black rounded-full" />
                              Contacto directo por WhatsApp
                            </li>
                          </ul>

                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-900">
                              Ver cómo funciona
                            </span>

                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition">
                              →
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {demos.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">
            ¿Querés algo así para tu negocio?
          </h3>

          <p className="text-white/80 mb-6">
            Lo adaptamos a tu marca y lo dejamos listo para empezar a recibir
            consultas.
          </p>

          <a
            href="https://wa.me/5492284XXXXXX?text=Hola,%20quiero%20una%20web"
            target="_blank"
            className="inline-block bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Pedir mi web
          </a>
        </div>
      </div>
    </section>
  );
}
