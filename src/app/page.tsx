"use client"; // This is a client component 👈🏽

import { HomePage } from '@/components/HomePage';
import { LoaderContextProvider } from '@/hooks/useLoader';

export default function Home() {

  return (
    <LoaderContextProvider>
      <HomePage />
    </LoaderContextProvider>
  )
}
