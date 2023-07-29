import { useEffect } from "react"
import { NavBar, Profile, MyProjects, ContactMe, AboutMe, Loading } from "./components"
import { useStateContext } from "./Context/FirstProvider"


function App() {

  const { ActiveNavbar, theme, setTheme, ActiveNavbarOnScroll, loading } = useStateContext()



  useEffect(() => {

    const currentTheme = localStorage.getItem('theme')
    setTheme(currentTheme || 'dark')
    ///////////////////////////////////////::

    window.addEventListener('scroll', ActiveNavbarOnScroll)


    return () => window.removeEventListener('scroll', ActiveNavbarOnScroll)
  }, [])

  return (
    <>
      {loading && <Loading />}
      <div data-theme={theme} className=" bg-base-100 overflow-hidden  font-sans text-primary-content ">

        {ActiveNavbar && <NavBar />}
        <Profile />
        <div className='mt-24 '>
          <AboutMe />
          <MyProjects />
          <ContactMe />
        </div>
      </div>
    </>

  )
}

export default App
