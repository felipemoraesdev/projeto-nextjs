import { Inter, Poppins, Roboto } from 'next/font/google'
 
export const poppins = Poppins({
    weight: ['400', '500', '700', '900'],
    style: ['normal'],
    variable: '--font-poppins',
    subsets: ["latin"]
});

export const inter = Inter({ subsets: ['latin'] });

export const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    style: ['normal'],
    variable: '--font-roboto',
    subsets: ["latin"]
});
 