import { FileText } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6" />
          <span className="font-bold">csvtojson</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#examples"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Examples
          </Link>
          <Link
            href="https://github.com/cedricahenkorah/csvtojson"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
};
