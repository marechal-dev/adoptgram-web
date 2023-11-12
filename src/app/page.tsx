import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-screen">
      <header className="flex flex-row justify-between p-6 border-b border-b-orange-300">
        <span>AdoptGram</span>
        <nav>
          <ul className="flex flex-row gap-x-6">
            <li>
              <a href="#">
                O que é AdoptGram?
              </a>
            </li>
            <li>
              <a href="#">
                Por quê AdoptGram?
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <article className="h-full px-10 flex flex-col justify-center">
        <div id="hero" className="grid grid-cols-2 justify-items-center">
          <div className="text-center flex flex-col justify-center gap-y-10">
            <h1 className="font-bold text-5xl">Encontre seu novo pet no AdoptGram</h1>
            <p className="text-xl italic">Seu novo melhor amigo à um clique de distância!</p>
          </div>

          <Image
            src="https://source.unsplash.com/random/300x300"
            alt="Arte estilizada de um Cachorro"
            height={300}
            width={300}
          />
        </div>
        <div id="what-is-adoptgram">

        </div>
        <div id="why-adoptgram">

        </div>
      </article>
    </main>
  )
}
