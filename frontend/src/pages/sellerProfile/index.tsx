import Back from "../../components/back";
import BlueConteiner from "../../components/blueConteiner";
import { BackConteiner, Config, Conteiners, ImagemPessoa, Tela } from "./style";


export default function SellerProfile(){

    return(
        <Tela>
            <BackConteiner>
                <Back/>
            </BackConteiner>

            <ImagemPessoa source={require('../../assets/images/rayssa.png')}/>

            <Config>Configurações de Perfil</Config>

            <Conteiners>
                <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
                <BlueConteiner textoForte="Alterar nome de usuário" textoFraco="Rayssa"/>
                <BlueConteiner textoForte="Email" textoFraco="rayssa@gmail.br"/>
                <BlueConteiner textoForte="Trocar de senha" textoFraco="********"/>
                <BlueConteiner textoForte="Meus produtos" textoFraco=""/>
                <BlueConteiner textoForte="Excluir conta" textoFraco=""/>
            </Conteiners>
        </Tela>

    )
}