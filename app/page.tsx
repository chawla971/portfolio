import dynamic from "next/dynamic";

// Make the entire page content client-only to avoid SSR issues
const HomeContent = dynamic(() => import("@/components/HomeContent"), {
  ssr: false,
  loading: () => (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="h-screen bg-black-100" />
      </div>
    </main>
  ),
});

const Home = () => {
  return <HomeContent />;
};

export default Home;
