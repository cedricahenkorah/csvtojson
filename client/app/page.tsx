"use client";

import { ArrowRight, Download, Upload, Zap } from "lucide-react";
import { Navbar } from "./_components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Convert CSV to JSON
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Simple, fast, and secure CSV to JSON conversion. No data
                  stored, processed entirely in your browser.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/csvtojson">
                  <Button size="lg" className="h-12 px-8">
                    Upload CSV <Upload className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8"
                  onClick={() => {
                    document
                      .getElementById("examples")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Examples <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Process your CSV files instantly with our optimized conversion
                  engine.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Upload className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Browser-Based</h3>
                <p className="text-muted-foreground">
                  No server uploads needed. All processing happens right in your
                  browser.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Download className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Easy Export</h3>
                <p className="text-muted-foreground">
                  Download your JSON file immediately after conversion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-600 dark:text-blue-400">
                See It in Action
              </h2>
              <p className="max-w-[85%] leading-normal text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-7">
                Explore various CSV formats and their JSON equivalents.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 border-t border-blue-200 dark:border-blue-800 pt-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6">
                  <h3 className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">
                    Simple CSV
                  </h3>
                  <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto">
                    <code className="text-sm">{`name,age,city
John,30,New York
Jane,25,San Francisco
Bob,35,Chicago`}</code>
                  </pre>
                </div>
                <div className="rounded-lg border border-teal-200 dark:border-teal-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6">
                  <h3 className="mb-4 text-xl font-bold text-teal-600 dark:text-teal-400">
                    Simple JSON
                  </h3>
                  <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto">
                    <code className="text-sm">{`[
  {
    "name": "John",
    "age": "30",
    "city": "New York"
  },
  {
    "name": "Jane",
    "age": "25",
    "city": "San Francisco"
  },
  {
    "name": "Bob",
    "age": "35",
    "city": "Chicago"
  }
]`}</code>
                  </pre>
                </div>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6">
                  <h3 className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">
                    CSV with Headers
                  </h3>
                  <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto">
                    <code className="text-sm">{`"Product ID","Product Name","Price","Quantity"
1,"Widget A",19.99,100
2,"Gadget B",24.95,75
3,"Gizmo C",14.50,200`}</code>
                  </pre>
                </div>
                <div className="rounded-lg border border-teal-200 dark:border-teal-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6">
                  <h3 className="mb-4 text-xl font-bold text-teal-600 dark:text-teal-400">
                    JSON with Headers
                  </h3>
                  <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto">
                    <code className="text-sm">{`[
  {
    "Product ID": "1",
    "Product Name": "Widget A",
    "Price": "19.99",
    "Quantity": "100"
  },
  {
    "Product ID": "2",
    "Product Name": "Gadget B",
    "Price": "24.95",
    "Quantity": "75"
  },
  {
    "Product ID": "3",
    "Product Name": "Gizmo C",
    "Price": "14.50",
    "Quantity": "200"
  }
]`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ by the csvtojson team.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/cedricahenkorah/csvtojson"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/cedricahenkorah/csvtojson"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
