import Header from "./Header";
import Datasheet from "./Datasheet";

const Dialogbox = () => {
  return (
    <div className="dialogbox container max-w-[90vw] mx-auto max-h-[90vh] mt-5 pb-10 rounded-lg shadow-md bg-slate">
      <Header /> {/* This included the title and action btns */}
      <Datasheet /> {/* Main data imported in the table */}
      <footer></footer> {/* custom paginator with a row selector */}
    </div>
  );
};

export default Dialogbox;
