import Countries from "./Countries";
import Navbar from "./Navbar";
import Options from "./Options";

function Home() {
  return (
    <>
      <div className="bg-[#fafafa]  ">
        <Options />
        <Countries />
      </div>
    </>
  );
}

export default Home;
