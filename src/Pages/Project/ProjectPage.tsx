import { useParams } from "react-router";

export default function ProjectPage() {
    const {id} = useParams()
     
  return (
        <div>{`Project Page ${id}`}</div>
  )
}
