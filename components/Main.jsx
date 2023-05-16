import Posts from "./Posts";
import Paginations from "./Paginations";
import Subscripe from "./Subscripe";
import Topics from "./Topics";

const Main = () => {
  return (
    <main className="lg:flex">
      <div className="w-full lg:w-2/3">
        <Posts />
        <Paginations />
      </div>
      <div className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
        <Topics />
        <Subscripe />
      </div>
    </main>
  );
};

export default Main;
