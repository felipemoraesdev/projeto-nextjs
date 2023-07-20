import Image from "next/image";

interface IHeaderProps {
    cityName?: string,
    planoHeaderUrlImg: string
}

export function Header({ planoHeaderUrlImg, cityName }: IHeaderProps) {
    return (
        <>
            <header
                className='bg-[#db292e] h-auto w-full p-2 flex items-center justify-center'
            >
                <Image
                    src={"/assets/logo-site.png"} 
                    alt="logo-site" 
                    width={109}
                    height={100}
                />
            </header>

            <section
                className='header-background w-full p-4 flex'
                style={{
                    backgroundImage: 'url(/assets/background-header.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div
                    className='w-full max-w-[1600px] mx-auto mt-2 md:mt-10 md:mb-10 flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center'
                >

                <img 
                    src={"/assets/img-header.png"} 
                    alt="img-header" 
                    className="w-[250px] md:w-full max-w-[500px] md:min-w-[410px] justify-self-end"
                />

                    <div className='max-w-[270px] first-letter flex flex-col items-center gap-4 md:gap-10'>
                        <p
                            className='max-w-[270px] text-2xl font-normal text-white'
                        >
                            Chegou em <span className='text-[#E2CB30] font-medium'>{cityName}</span> CLARO FIBRA, a internet banda larga da Claro!
                        </p>

                        <img 
                            src={planoHeaderUrlImg} 
                            alt="plano-pessoas-header" 
                            className="w-[250px] md:w-full max-w-[270px] md:min-w-[240px]"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}