import Premium from "./premium";
import Topics from "./topics";
import Search from "./search";

export default function RightBar() {
  return (
    <div>
      {" "}
      <Search />
      <Premium />
      <Topics />
    </div>
  );
}
