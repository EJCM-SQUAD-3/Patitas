import { ConteinerImg, ImgVoltar, Volta, VoltarConteiner } from "./styles";


export default function Voltar(){
    return(

        <VoltarConteiner>
            <ConteinerImg>
                <ImgVoltar source={require('../../assets/images/voltar.png')}/>
                
            </ConteinerImg>
            
            <Volta> Voltar</Volta>
        </VoltarConteiner>

    )
}