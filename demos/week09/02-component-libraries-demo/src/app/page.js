// Importing Radix components:
import RadixPopover from "./components/RadixPopover";
import RadixSlider from "./components/RadixSlider";
// Importing some icons from react-icons:
import {
  MdAirlineSeatLegroomExtra,
  MdOutlineAirlineSeatLegroomNormal,
} from "react-icons/md";

export default function Home() {
  return (
    <div>
      <h1>This is my component library testing ground</h1>
      {/* My components */}
      <RadixPopover />

      <RadixSlider />
      {/* My icons */}
      <MdAirlineSeatLegroomExtra />
      <MdOutlineAirlineSeatLegroomNormal />
    </div>
  );
}
