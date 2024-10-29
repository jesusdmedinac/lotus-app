"use client";

import Image from "next/image";
import Form from "next/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredTeachers(
      value === "" ? [] : 
      teachers.filter(teacher => 
        teacher.channelName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleOptionClick = (teacher) => {
    setInputValue(teacher.channelName);
    setFilteredTeachers([]);
  };

  const onTeacherClick = (teacher) => {
    router.push(`/teacher?name=${teacher.channelName}`);
  };

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
      <main className="max-w-screen-lg flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-3xl font-semibold">Encuentra a tu profe ideal</h1>
        <h2 className="text-xl font-semibold">¿Quién es tu profe favorito?</h2>
        <Form className="w-full" action="/teacher">
          <div className="relative w-full">
            <input 
              className="w-full outline-none bg-transparent rounded-md border-primary border-2 p-2" 
              name="name" 
              placeholder="Mi profe favorito es..." 
              value={inputValue} 
              onChange={handleInputChange}
              autoComplete="off"
            />
            {filteredTeachers.length > 0 && (
              <div className="absolute bg-background border border-outline-variant rounded-md mt-1 w-full z-10">
                {filteredTeachers.map((teacher) => (
                  <div 
                    key={teacher.channelName} 
                    className="flex flex-row p-2 cursor-pointer hover:bg-gray-500 rounded-md items-center" 
                    onClick={() => handleOptionClick(teacher)}
                  >
                    <Image
                      src={`/${teacher.avatar}`}
                      alt={teacher.channelName}
                      width={112}
                      height={112}
                      className="size-16 p-2"
                    />
                    <div className="flex flex-col overflow-hidden" onClick={() => {
                      onTeacherClick(teacher);
                    }}>
                      <p className="truncate">@{teacher.channelName} • {teacher.suscriptors}</p>
                      <p className="truncate">{teacher.authorName}</p>
                      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{teacher.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
