"use client"; // This is a client component 👈🏽
import Image from 'next/image'

import { poppins } from '@/app/fonts';
import { handleClickWhatsApp } from '@/services';
import { useLoader } from '@/hooks/useLoader';
import { Header } from './Header';
import { Footer } from './Footer';
import { HowIsPossible } from './HowIsPossible';
import { ClaroBox } from './ClaroBox';
import { ButtonWhatsapp } from './ButtonWhatsapp';


interface IHomePageProps {
    cidade?: string
}

export function HomePage({ cidade }: IHomePageProps) {

    const city = cidade || 'default';
    const URL_STORAGE_AWS = 'https://claro-bucket01.s3.sa-east-1.amazonaws.com';

    const loader = useLoader();

    const planoHeaderUrlImg = `${URL_STORAGE_AWS}/plano-header-${city}.png`;

    const cityNameFormated = formatCityName(cidade);

    function formatCityName(cidade?: string) {

      const newCidade = cidade || 'PIRAQUARA';

      const citysArray = newCidade.split('-');
      const citysCamelCase = citysArray.map(city => city.toUpperCase());

      return citysCamelCase.join(' ');
    }

    async function handlePressWhatsapp(message: string) {
        loader.show();
        await handleClickWhatsApp(message);
        loader.hide();
    }

    async function logRegister() {
      
    }

    return (
        <main className={`${poppins.variable} flex min-h-screen flex-col items-center bg-white`}>
          <Header
            planoHeaderUrlImg={planoHeaderUrlImg}
            cityName={cityNameFormated}
          />

          <HowIsPossible 
            handlePressWhatsapp={handlePressWhatsapp}
          />

          <ClaroBox handlePressWhatsapp={handlePressWhatsapp} />

          <Footer />

          <ButtonWhatsapp 
            handlePressWhatsapp={handlePressWhatsapp}
          />
        </main> 
    )
}