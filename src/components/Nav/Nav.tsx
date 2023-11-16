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
  position: fixed;
  z-index:50;
  width: 100vw;
  bottom:0;
  @media screen and (min-width: 700px) {
    bottom: inherit;
  }
`
const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
    a {
      color: ${colors.white};
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
  padding: 0.5rem 1.2rem;
  width: 100vw;
  background-color: ${colors.fourth};
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.4);

  @media screen and (min-width: 500px) {
    padding: 1rem 1.5rem;
    border-radius: 2rem 2rem 0 0;
    width: 70%;
  }
  @media screen and (min-width: 700px) {
    width: 60%;
    border-radius: 0 0 2rem 2rem;
  }
  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (min-width: 900px) {
    width: 40%;
  }
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
