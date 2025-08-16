import { FaMusic, FaPlay, FaSpotify, FaPlayCircle } from "react-icons/fa";

const MonthlyPicks = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw] mb-8">
          <span className="text-purple">Current</span> Picks
        </h2>
        <p className="text-white-200 mb-12 text-center max-w-2xl">
          Here&apos;s what I&apos;ve been enjoying this month - from anime to
          music
        </p>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Anime Pick */}
          <div className="bg-black-200/50 backdrop-blur-lg rounded-2xl p-6 border border-black-300 hover:border-purple/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <FaPlay className="text-purple text-xl" />
              <h3 className="text-xl font-semibold text-white">Anime Pick</h3>
            </div>
            <h4 className="text-lg font-medium text-white mb-4">
              Cowboy Bebop
            </h4>
            <button
              onClick={() =>
                window.open(
                  "https://www.crunchyroll.com/series/GYVNXMVP6/cowboy-bebop",
                  "_blank"
                )
              }
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors cursor-pointer"
            >
              <FaPlayCircle className="text-lg" />
              <span className="text-sm font-medium">Watch on Crunchyroll</span>
            </button>
          </div>

          {/* Music Pick */}
          <div className="bg-black-200/50 backdrop-blur-lg rounded-2xl p-6 border border-black-300 hover:border-purple/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <FaMusic className="text-purple text-xl" />
              <h3 className="text-xl font-semibold text-white">Album Pick</h3>
            </div>
            <h4 className="text-lg font-medium text-white mb-4">
              Dangerous Summer - Yeat
            </h4>
            <button
              onClick={() =>
                window.open(
                  "https://open.spotify.com/album/61PCQeDaTD2gwfpHFikpbh",
                  "_blank"
                )
              }
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors cursor-pointer"
            >
              <FaSpotify className="text-lg" />
              <span className="text-sm font-medium">Listen on Spotify</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyPicks;
