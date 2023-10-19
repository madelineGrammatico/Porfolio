import { useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../app/store";



const traduction = {
    pageTitle: {
        EN: "About",
        FR: "À propos"
    }
}
export function About() {
  const language = useSelector((state: RootState) => state.languageSlice.language)
  return (
    <main>
      <Nav/>
        <h1>{traduction.pageTitle[language]}</h1>
    </main>
  )
}
