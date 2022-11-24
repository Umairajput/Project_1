import NavBar from './Navbar'
import Header from "./Header"
import Cards from './Cards'
import Serv from "./Services"
import Actualites from './Actualites'
import Contact from './Contact'
import Footer from './footer'
function Combined() {
    return (
        <>
            <NavBar />
            <Header />
            <Cards />
            <Serv />
            <Actualites/>
            <Contact/>
            <Footer />
        </>
    )
}
export default Combined