import Image from "next/image";
import { Navbar } from "./_components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen">
        <Navbar />

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="mb-4 lg:mb-8 flex justify-center">
              <Link href="/csvtojson">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-green-700 ring-1 ring-gray-900/10 hover:ring-green-900/20 font-semibold">
                  Click to upload your csv file and get the json
                </div>
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                csvtojson
              </h1>

              <p className="mt-2 lg:mt-4 text-sm lg:text-lg lg:leading-8 text-gray-500 font-semibold">
                convert csv files to json format
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
