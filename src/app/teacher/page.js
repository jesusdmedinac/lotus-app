"use client";

import Image from "next/image";
import Form from "next/form";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const teachers = [
  {
    channelName: "midudev",
    authorName: "midudev",
    description: "DESARROLLO con JAVASCRIPT. Programación web y FULL STACK con React, Node.js, HTML, CSS, Tailwind ...",
    suscriptors: "338 k suscriptores",
    avatar: "midudev.png"
  },
  {
    channelName: "mouredev",
    authorName: "MoureDev by Brais Moure",
    description: "Tutoriales de programación y desarrollo de software. Aprende a crear aplicaciones Web, Android e iOS ...",
    suscriptors: "582 k suscriptores",
    avatar: "mouredev.png"
  }
];

function LoadTeacher() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const teacher = teachers.filter(teacher => teacher.channelName === name)[0];

  return (
    <div
      key={teacher.channelName} 
      className="flex flex-row p-2 cursor-pointer hover:bg-gray-500 rounded-md items-center" 
    >
      <Image
        src={`/${teacher.avatar}`}
        alt={teacher.channelName}
        width={112}
        height={112}
        className="size-16 p-2"
      />
      <div className="flex flex-col overflow-hidden">
        <p className="truncate">@{teacher.channelName} • {teacher.suscriptors}</p>
        <p className="truncate">{teacher.authorName}</p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{teacher.description}</p>
      </div>
    </div>
  )
}

export default function FavoriteTeacher() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex max-w-screen-lg">
        <Image 
          src="/lotus.svg"
          alt="Logo Lotus"
          width={32}
          height={32}
        />
        <h1 className="flex-none p-4 text-lg">Lotus</h1>
        <div className="grow"> </div>
        <button className="flex-none bg-primary rounded-full h-10 pl-4 pr-4 text-on-primary font-semibold">Acceder</button>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Cargando...</div>}>
          <LoadTeacher />
        </Suspense>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
