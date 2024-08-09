import Back from "../../components/back";
import BlueConteiner from "../../components/blueConteiner";
import { BackConteiner, Config, Conteiners, ImagemPessoa, Tela } from "./styles";


export default function UserProfile(){

    return(
        <Tela>
            <BackConteiner>
            <Back/>
            </BackConteiner>
            <ImagemPessoa source={require('../../assets/images/rayssa.png')}/>
            <Config>Configurações de Perfil</Config>
            <Conteiners>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
            </Conteiners>
        </Tela>

    )
}