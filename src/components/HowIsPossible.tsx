import Image from "next/image";
import { useState } from "react";
import { ItemList } from "./ItemList";

interface IHowIsPossibleProps {
    handlePressWhatsapp: (message: string) => void;
}

export function HowIsPossible({ handlePressWhatsapp }: IHowIsPossibleProps) {

    const [isOpenDescription, setIsOpenDescription] = useState({
      filmes: false,
      assistir4k: false,
      jogueOnline: false,
      lives: false,
      homeoffice: false,
      videochamadas: false,
    });

    function handlePressArrow(action: string) {

      const newDescriptions = {
        filmes: false,
        assistir4k: false,
        jogueOnline: false,
        lives: false,
        homeoffice: false,
        videochamadas: false,
      }

      setIsOpenDescription({
        ...newDescriptions,
        [action]: !isOpenDescription[action]
      });
    }

    return (
        <section className='w-full max-w-[1600px] p-8'>
            <div className='mx-auto'>
              <h1 className='text-[#DB292E] max-w-[750px] mx-auto text-center text-4xl font-medium'>
                PREPARE-SE PARA EXPLORAR UM MUNDO DE OPORTUNIDADES!
              </h1>

              <p className='mx-auto text-center text-xl font-semibold mt-8'>
                Com a CLARO FIBRA 500 Mega é possível usar mais de 10 dispositivos simultaneamente.
              </p>
              <p className='mx-auto text-center text-xl font-semibold'>
                Descubra as opções de entretenimento disponíveis para você aproveitar:
              </p>

              <div className="flex md:gap-4 items-center justify-center mb-4 flex-col md:flex-row">

                <div>
                  <ul className='w-full max-w-[450px] mx-auto my-8 flex flex-col gap-2'>
                    <ItemList
                      text="Assistir a conteúdos online"
                      description="Mergulhe em uma experiência imersiva de entretenimento e assista a filmes, séries e vídeos online."
                      isOpenDescription={isOpenDescription.filmes}
                      onClick={() => handlePressArrow('filmes')}
                    />
                    <ItemList
                      text="Assistir vídeos em 4k"
                      description="Experimente uma qualidade de imagem excepcional com conteúdos em resolução 4k."
                      isOpenDescription={isOpenDescription.assistir4k}
                      onClick={() => handlePressArrow('assistir4k')}
                    />
                    <ItemList
                      text="Jogue online"
                      description="Conecte-se com jogadores de todo o mundo e experimente a emoção de competir em partidas online."
                      isOpenDescription={isOpenDescription.jogueOnline}
                      onClick={() => handlePressArrow('jogueOnline')}
                    />
                    <ItemList
                      text="Acessar e participar de lives"
                      description="Tenha uma experiência emocionante e interativa, participando de transmissões ao vivo."
                      isOpenDescription={isOpenDescription.lives}
                      onClick={() => handlePressArrow('lives')}
                    />
                    <ItemList
                      text="Trabalhe em casa"
                      description="Desfrute da praticidade de trabalhar em casa, com a confiança e estabilidade que precisa."
                      isOpenDescription={isOpenDescription.homeoffice}
                      onClick={() => handlePressArrow('homeoffice')}
                    />
                    <ItemList
                      text="Realizar videochamadas"
                      description="Compartilhe momentos especiais por meio de videochamadas."
                      isOpenDescription={isOpenDescription.videochamadas}
                      onClick={() => handlePressArrow('videochamadas')}
                    />
                  </ul>
                </div>

                <Image
                    src={"/assets/homem-celular.png"} 
                    alt="logo-site" 
                    width={450}
                    height={450}
                    className='border-b-orange-600 border-b-[1px] border-b-'
                />

              </div>

              <button 
                type='button'
                className='flex px-12 py-3 bg-[#e2cb30] hover:bg-[#c4af2a] rounded-full font-medium text-xl mx-auto'
                onClick={() => handlePressWhatsapp('QUERO 500MB DE INTERNET!')}
              >
                QUERO 500MB DE INTERNET!
              </button>
            </div>
        </section>
    )
}