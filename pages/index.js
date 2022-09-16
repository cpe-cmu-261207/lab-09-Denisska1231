import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Mainlayout from "../layout/Mainlayout";

export default function Home() {
  return (
    <div>
      <Mainlayout>
        <Profile />
        <Skill />
      </Mainlayout>
    </div>
  );
}
