import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { toggleLanguage } from "../../app/languageSlice/languageSlice";
import styled from "styled-components"

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

const Menu = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
`
const LinksContainer = styled.nav`
display: flex;
gap: 1rem;
`
export function Nav() {
  const language = useSelector((state: RootState) => state.languageSlice.language)
  const dispatch = useDispatch()

  const HandlerToogleLanguage = () => {
    dispatch(toggleLanguage())
  }
 
  return (
    <Menu>
      <LinksContainer>
        <Link to="/">{traduction.home[language]}</Link>
        <Link to="/projects">{traduction.projects[language]}</Link>
        <Link to="/about">{traduction.about[language]}</Link>
      </LinksContainer>
        
        <button onClick={HandlerToogleLanguage}>{(language === "EN")? "EN" : "FR"}</button>
    </Menu>
  )
}
