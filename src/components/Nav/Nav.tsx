import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { toggleLanguage } from "../../app/languageSlice/languageSlice";

const traduction = {
  home: {
    EN: "Home",
    FR: "Accueil"
  },
  projects: {
    EN: "Projects",
    FR: "Projets"
  },
  about: {
    EN: "About",
    FR: "A propos"
  }
}

export function Nav() {
  const language = useSelector((state: RootState) => state.languageSlice.language)
  const dispatch = useDispatch()

  const HandlerToogleLanguage = () => {
    dispatch(toggleLanguage())
  }
  return (
    <nav>
        <Link to="/">{traduction.home[language]}</Link>
        <Link to="/projects">{traduction.projects[language]}</Link>
        <Link to="/about">{traduction.about[language]}</Link>
        <button onClick={HandlerToogleLanguage}>{(language === "EN")? "FR" : "EN"}</button>
    </nav>
  )
}
