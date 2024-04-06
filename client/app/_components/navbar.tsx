import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="w-full border-b border-b-gray-200">
        <div className="m-auto lg:max-w-7xl max-w-3xl px-5 lg:px-0 py-3 lg:py-5 flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-bold text-lg">csvtojson</h1>
            </Link>
          </div>

          {/* <div className="flex items-center">
            <div
              className="inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              Book Now
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
