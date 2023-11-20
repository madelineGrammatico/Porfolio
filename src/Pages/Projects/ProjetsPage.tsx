import { Nav } from "../../components/Nav/Nav";
import { Filters } from "../../components/Filters/Filters"
import { ProjectsSection } from "../../components/ProjectsSection/ProjectsSection";
import { ScrollRestoration } from "react-router-dom";

export function ProjectsPage() {

    return (
        <main>
            <Nav/>
            <Filters/>
            <ProjectsSection/>
            <ScrollRestoration/>
        </main>
    )
}
  