import Countries from "./Countries";
import Navbar from "./Navbar";
import Options from "./Options";

function Home() {
  return (
    <>
      <div className="bg-[#fafafa] dark:bg-dark-bg ">
        <Options />
        <Countries />
      </div>
    </>
  );
}

export default Home;
