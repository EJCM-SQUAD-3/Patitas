import { Texto, TitleSectionsHomeContainer, } from "./styles";

type Props = {
    texto: string;
}

export default function TitleSectionsHome({ texto }: Props) {

    return (
        <>
            <TitleSectionsHomeContainer>
                <Texto>{texto}</Texto>
            </TitleSectionsHomeContainer>
        </>
    )
}