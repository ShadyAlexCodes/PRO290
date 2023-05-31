import Head from "next/head";

import { Header } from '@/components/Header'
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Order Management System</title>
        <meta
          name="description"
          content="A simple order-management-system built for class"
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
