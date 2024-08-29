import { H1 } from '@UI/Typography';
import { Input } from '@UI/Form';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* <!-- Top Navigation --> */}
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* <!-- Logo --> */}
          <div className="text-xl font-bold">Airbnb</div>
          {/* <!-- Navigation Links --> */}
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Place to stay
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Experiences
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Online Experiences
            </a>
          </nav>
          {/* <!-- Account Button --> */}
          <div className="space-x-4 flex items-center">
            <button className="text-gray-700 hover:text-gray-900">
              Sign up
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              Log in
            </button>
            <div className="relative">
              <button className="flex items-center bg-gray-100 p-2 rounded-full border border-gray-300">
                <span className="mr-2">Account</span>
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A7 7 0 1012 21v-4M12 21v-4M12 21v-4m0 0a7 7 0 00-6.879-3.196m0 0A7 7 0 0012 3m0 0a7 7 0 00-6.879 3.196"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Sticky Search Bar --> */}
        <div className="bg-white py-2 shadow-md">
          <div className="container mx-auto">
            <form className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Location"
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-airbnb-red"
              />
              <input
                type="date"
                placeholder="Check-in"
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-airbnb-red"
              />
              <input
                type="date"
                placeholder="Check-out"
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-airbnb-red"
              />
              <input
                type="number"
                placeholder="Guests"
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-airbnb-red"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-airbnb-red text-white rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mt-10">
        {/* <!-- Hero Section --> */}
        <section
          className="text-center bg-cover bg-center h-96"
          style={{ backgroundImage: 'url(https://your-image-url.jpg)' }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-white">
              <h1 className="text-4xl font-bold">
                Not sure where to go? Perfect.
              </h1>
              <button className="mt-4 px-8 py-3 bg-white text-gray-900 rounded-full shadow-lg">
                I'm flexible
              </button>
            </div>
          </div>
        </section>

        {/* <!-- Cards Section --> */}
        <section className="container mx-auto mt-10">
          <h2 className="text-2xl font-semibold mb-6">Explore nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Card 1 --> */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://your-image-url.jpg"
                alt="City Image"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">City Name</h3>
                <p className="text-gray-500">2-hour drive</p>
              </div>
            </div>
            {/* <!-- Repeat for more cards --> */}
          </div>
        </section>

        {/* <!-- Bottom Section --> */}
        <section className="container mx-auto mt-16 mb-10">
          <h2 className="text-2xl font-semibold mb-6">Live Anywhere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Similar card structure as above --> */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <p>&copy; 2024 Airbnb, Inc.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-400">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-400">
                Terms
              </a>
              <a href="#" className="hover:text-gray-400">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
