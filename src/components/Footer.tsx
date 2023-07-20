import Image from "next/image";

export function Footer() {
    return (
        <section className='w-full max-w-[1600px] py-6 md:py-14 flex flex-col px-4'>
            <div className='mx-auto flex flex-col md:flex-row items-center gap-4'>
              <Image 
                src={"/assets/logo-claro.png"} 
                alt="claro-box" 
                width={100}
                height={100}
                className=''
              />
              <span className=''>
                <p className='text-xs'>2022 Claro. Todos os direitos reservados.</p>
                <p className='text-xs'>Claro Piraquara, Agente Revendedor Autorizado Integra Telecom</p>
                <p className='text-xs'>CNPJ: 34.324.935/0006-50</p>
                <p className='text-xs'>Av. Getúlio Vargas, 1114 - Centro, Piraquara - PR, 83301-010</p>
                <p className='text-xs'>(41) 98877-7587</p>
              </span>
            </div>

            <p className='mx-auto text-center text-xs mt-10'>
              *A velocidade anunciada de acesso e tráfego da internet é a nominal máxima, podendo sofrer variações decorrentes do equipamento do cliente e de fatores externos.
            </p>
        </section>
    )
}