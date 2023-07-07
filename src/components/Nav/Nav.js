import { ContainerNav } from "./styled";


function Nav(){
    return(
        <ContainerNav>
            <Button titulo={"Donuts"}/>
            <Button titulo={"Ice Cream"}/>
            <Button titulo={"Bomboloni"}/>
            <img src={filtro} alt=""/>
        </ContainerNav>
    )
}

export default Nav