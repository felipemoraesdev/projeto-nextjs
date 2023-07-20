import Image from "next/image";

interface IClaroBoxProps {
    handlePressWhatsapp: (message: string) => void;
}


export function ClaroBox({ handlePressWhatsapp }: IClaroBoxProps) {

    return (
        <section 
            className='w-full flex flex-col'
            style={{
            backgroundImage: 'url(/assets/background-body.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}
        >
            <div className='w-full max-w-[1600px] mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 py-6 md:py-14 px-4'>
            <Image 
                src={"/assets/claro-box-new.png"} 
                alt="claro-box" 
                width={600}
                height={600}
                className='mx-auto md:ml-auto md:mr-0'
            />

            <div className='w-full max-w-[430px] flex flex-col justify-center gap-4 mx-auto md:mr-auto md:ml-0'>
                <div className="flex mx-auto md:ml-0 md:mr-0">
                    <Image 
                        src={"/assets/claro-box-text.png"} 
                        alt="claro-box" 
                        width={250}
                        height={45}
                        className=""
                    />
                    <p className="text-white text-3xl font-semibold">+</p>
                </div>
                <p className=' text-[#e2cb30] font-semibold text-xl max-w-[300px] mb-2 mx-auto md:ml-0 md:mr-0 text-center md:text-left'>
                    O MELHOR DA TV E DO STREAMING JUNTOS.
                </p>
                <p className='text-white font-semibold text-lg max-w-[430px] text-center md:text-left'>
                    Para você levar onde quiser com + de 100 canais ao vivo, 50 mil conteúdos On Demand, 
                    até 2 dispositivos simultâneos, Replay TV e muito mais.
                </p>

                <p className='text-white font-semibold text-lg max-w-[430px] text-center md:text-left mt-4'>
                    Confira as funcionalidades exclusivas da sua Box Claro tv+:
                </p>
            </div>
            </div>

            <div className='w-full max-w-[1296px] mx-auto grid md:grid-cols-2 md:grid-rows-3 pb-14 gap-4'>
                <div className='bg-[#6d0f00] px-10 py-8'>
                    <h2 className='text-white font-semibold text-xl'>APPS</h2>
                    <p 
                        className='text-white font-normal text-lg leading-5 mt-4'
                    >
                        Seus Apps de streaming favoritos já estão integrados a sua Box Claro tv+, 
                        sem necessida de download.
                    </p>
                </div>

                <div className='bg-[#e06725] px-10 py-8'>
                    <h2 className='text-white font-semibold text-xl'>CONTROLE COM COMANDO DE VOZ</h2>
                    <p 
                        className='text-white font-normal text-lg leading-5 mt-4'
                    >
                        Encontre facilmente seus conteúdos utilizando apenas o 
                        comando de voz no seu controle remoto.
                    </p>
                </div>

                <div className='bg-[#e84040] px-10 py-8'>
                    <h2 className='text-white font-semibold text-xl'>COMANDO DE VOZ ALEXA</h2>
                    <p 
                        className='text-white font-normal text-lg leading-5 mt-4'
                    >
                        Com a Alexa, é possível mudar de canal, buscar títulos (gênero, ator, diretor, entre outros), 
                        acessar a Minha Claro, abrir Apps e muito mais.
                    </p>
                </div>

                <div className='bg-[#6d0f00] px-10 py-8'>
                    <h2 className='text-white font-semibold text-xl'>PAUSE A PROGRAMAÇÃO AO VIVO</h2>
                    <p 
                        className='text-white font-normal text-lg leading-5 mt-4'
                    >
                        Não perca nada, ainda que precise dar uma saidinha durante a programação. 
                        Pause e assista quando voltar.
                    </p>
                </div>

                <div className='bg-[#e06725] px-10 py-8'>
                    <h2 className='text-white font-semibold text-xl'>GRAVAÇÃO DE CONTEÚDO</h2>
                    <p 
                        className='text-white font-normal text-lg leading-5 mt-4'
                    >
                        Grave seus conteúdos favoritos e assista novamente quantas vezes quiser.
                    </p>
                </div>

                <div className='bg-[#e84040] px-10 py-8'>
                    <h2 className='text-white font-semibold text-xl'>REPLAY TV</h2>
                    <p 
                        className='text-white font-normal text-lg leading-5 mt-4'
                    >
                        Recomece a programação ao vivo ou volte até 7 dias.
                    </p>
                </div>
            
            </div>

            <Image 
                src={'/assets/plano-footer-default.png'} 
                alt="claro-box" 
                width={500}
                height={150}
                className='mx-auto mb-14 px-4'
            />

            <button 
                type='button'
                className='flex px-12 py-3 bg-[#e2cb30] hover:bg-[#c4af2a] rounded-full font-medium text-xl mx-auto mb-8'
                onClick={() => handlePressWhatsapp('QUERO 500MB DE INTERNET + BOX CLARO TV+!')}
            >
                QUERO 500MB DE INTERNET + BOX CLARO TV+
            </button>
        </section>
    )
}