import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { toggleLanguage } from "../../app/languageSlice/languageSlice";
import styled from "styled-components"
import colors from "../../color";
import { Button } from "../Button/Button";

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

const Menu = styled.header`
display: flex;
justify-content: center;
/* align-items: center; */

/* background-color: ${colors.fourth}; */
position: fixed;
z-index:50;
width: 100vw
`
const LinksContainer = styled.div`
display: flex;
gap: 1rem;
  a {
    color: ${colors.fourth};
    font-weight: 900;
    &:hover{
      color:${colors.third};
    }
  }

`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
width: 40%;
background-color: ${colors.white};
border-radius: 0 0 2rem 2rem;
box-shadow: 0 0 15px rgba(50, 50, 50, 0.4);
`
export function Nav() {
  const language = useSelector((state: RootState) => state.languageSlice.language)
  const dispatch = useDispatch()

  const HandlerToogleLanguage = () => {
    dispatch(toggleLanguage())
  }
 
  return (
    <Menu>
      <NavBar>
        <LinksContainer>
          <Link to="/">{traduction.home[language]}</Link>
          <Link to="/projects">{traduction.projects[language]}</Link>
          <Link to="/about">{traduction.about[language]}</Link>
        </LinksContainer>
        <Button onClick={HandlerToogleLanguage} type="small">{(language === "EN")? "EN" : "FR"}</Button>
      </NavBar>
    </Menu>
  )
}
