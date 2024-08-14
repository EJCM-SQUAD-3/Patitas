import { ConteinerImg, ImgVoltar, Volta, VoltarConteiner } from "./styles";


export default function Back(){
    return(

        <VoltarConteiner>
            <ConteinerImg>
                <ImgVoltar source={require('../../assets/images/backArrow.png')}/>
                
            </ConteinerImg>
            
            <Volta>Voltar</Volta>
        </VoltarConteiner>

    )
}