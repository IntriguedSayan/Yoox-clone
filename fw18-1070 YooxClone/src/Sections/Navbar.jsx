import NavbarBottom from "../Components/NavbarComps/NavbarBottom";
import NavbarMiddle from "../Components/NavbarComps/NavbarMiddle";
import NavbarTop from "../Components/NavbarComps/NavbarTop";
import "./Navbar.css"
import { Box } from "@chakra-ui/react"

export default function Navbar(){

    return(
        <Box className="Navbar">
        <NavbarTop/>
        <NavbarMiddle/>
        <NavbarBottom/>
        </Box>
    )
}