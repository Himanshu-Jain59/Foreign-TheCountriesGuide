import Navbar from "./navbar";
import Options from "./options";
import Countries from "./countries";

function Home() {
  return (
    <>
      <div className="bg-[#fafafa]">
        <Navbar />
        <Options />
        <Countries />
      </div>
    </>
  );
}

export default Home;
