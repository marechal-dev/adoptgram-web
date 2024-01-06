import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <header className="flex flex-row justify-between p-6 border-b bg-adoptgram-brand-blue-800 border-b-orange-300">
        <span className="text-white">AdoptGram</span>
        <nav>
          <ul className="flex flex-row gap-x-6">
            <li>
              <a href="#what-is-adoptgram" className="text-white">
                O que é AdoptGram?
              </a>
            </li>
            <li>
              <a href="#why-adoptgram" className="text-white">
                Por quê AdoptGram?
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <article className="h-full flex flex-col px-10 justify-start bg-adoptgram-brand-orange-100">
        <div id="hero" className="grid justify-items-center grid-cols-hero">
          <div className="text-center flex flex-col justify-center gap-y-10">
            <h1 className="font-bold text-5xl text-adoptgram-text-main">Encontre seu novo pet no AdoptGram</h1>
            <p className="text-xl italic text-adoptgram-text-main">Seu novo melhor amigo à um clique de distância!</p>
          </div>

          <Image
            src="/icon.png"
            alt="Símbolo AdoptGram"
            height={300}
            width={300}
          />
        </div>
        <div id="what-is-adoptgram" className=" px-4">
          <h3 className="text-adoptgram-text-main text-center text-2xl mb-4">O que é AdoptGram?</h3>
          <p className="text-adoptgram-text-main text-justify text-xl">O AdoptGram surge como uma forma de conectar a sociedade com ONGs que desejam aumentar seu alcance e, consequentemente, aprimorar seu trabalho e ajudar mais pets a serem adotados!</p>
        </div>
        <div id="why-adoptgram" className="mt-4 px-4">
          <h3 className="text-adoptgram-text-main text-center text-2xl mb-4">Por quê AdoptGram?</h3>
          <p className="text-adoptgram-text-main text-justify text-xl">Para ajudar as ONGs, o AdoptGram fornece um aplicativo simples e fácil de utilizar, onde as ONGs podem criar publicações para impulsionar seu trabalho, cadastrar Pets e agilizar o processo de adoção.</p>
        </div>

        <Image
          src="/dog-and-cat-cover.jpg"
          alt="Cão e Gato, lado a lado"
          className="rounded-lg self-center mt-4"
          height={500}
          width={500}
        />
      </article>
    </main>
  )
}
