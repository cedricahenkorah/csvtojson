"use client";

import ClipboardJS from "clipboard";
import { Navbar } from "../_components/navbar";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpFromLine, Download } from "lucide-react";
import { uploadCSV } from "@/lib/csv";
import toast, { Toaster } from "react-hot-toast";

export default function Csvtojson() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [csv, setCsv] = useState<File | null>(null);
  const [json, setJson] = useState<string | null>(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(".btn");

    clipboard.on("success", handleTootlip);

    return () => {
      clipboard.destroy();
    };
  }, []);

  const handleTootlip = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setCsv(files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (csv) {
      try {
        const response = await toast.promise(uploadCSV(csv), {
          loading: "Parsing CSV to JSON",
          success: <b>CSV parsed to JSON successfully</b>,
          error: <b>An error occurred. Try again!</b>,
        });

        if (response) {
          setJson(JSON.stringify(response, null, 2));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const downloadJson = () => {
    const blob = new Blob([json as string], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = csv?.name.replace(".csv", ".json") as string;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <section className="min-h-screen">
        <Navbar />
        <Toaster />

        <div className="relative isolate pt-5 lg:pt-14 pb-5 lg:pb-10 px-5 lg:px-5 xl:px-0">
          <div className="mx-auto lg:max-w-7xl max-w-3xl">
            <h1 className="font-bold text-lg lg:text-2xl">CSV - JSON</h1>
            <p className="font-semibold text-gray-500 text-sm lg:text-base">
              Upload a CSV file and parse it to JSON
            </p>

            <div className="mt-5 lg:mt-10 flex flex-col gap-y-2 lg:gap-y-3">
              <h1 className="font-semibold text-sm lg:text-base">
                Upload a CSV file
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-x-2">
                  <Input
                    type="file"
                    className="max-w-3xl"
                    onChange={handleFileChange}
                    required
                    accept=".csv"
                  />
                  <Button variant="outline" size="icon">
                    <ArrowUpFromLine />
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-5 lg:mt-10 relative">
              {showTooltip && (
                <div className="absolute bg-black text-white text-xs rounded shadow p-2 top-0 right-0 -mt-8">
                  Copied!
                </div>
              )}

              <div className="relative bg-black text-white text-sm rounded shadow p-6">
                <div className="flex justify-between absolute top-0 right-10">
                  <button
                    data-clipboard-target="#copyjson"
                    className="btn mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-copy"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                      />
                    </svg>
                  </button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadJson}
                    className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50 mt-2"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>

                <pre id="copyjson">
                  {json ? (
                    <code className="text-xs lg:text-sm">{json}</code>
                  ) : (
                    <code className="text-sm">Upload a csv file :(</code>
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
