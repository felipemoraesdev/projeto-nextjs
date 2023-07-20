"use client"; // This is a client component 👈🏽

import { useParams } from 'next/navigation'
import { LoaderContextProvider } from '@/hooks/useLoader';
import { HomePage } from '@/components/HomePage';

export default function Cidade() {
  const { cidade } = useParams();

  return (
    <LoaderContextProvider>
      <HomePage cidade={cidade} />
    </LoaderContextProvider>
  )
}
