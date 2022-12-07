import ProjectFitness from "./ProjectFitness";
import ProjectSpy from "./ProjectSpy";
import ProjectCharlesCantin from "./ProjectCharlesCantin";
import ProjectFirst from "./ProjectFirst";
import ProjectApi from "./ProjectBeer";

export default function SeeProject() {
  return (
    <div>
      <ProjectFitness />
      <ProjectSpy />
      <ProjectCharlesCantin />
      <ProjectApi />
      <ProjectFirst />
    </div>
  );
}
