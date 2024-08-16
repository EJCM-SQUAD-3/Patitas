import { useState } from "react";
import { Input } from "../../components/input";
import { BackContainer, ButtonContainer, FormDiv, FormTitle, InputDiv, NewProduct } from "./style";
import OrangeButton from "../../components/orangeButton";
import ReturnButton from "../../components/returnButton";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import NavBar2 from "../../components/navbar2";

export default function ProductRegistration() {
    const navigation = useNavigation();

    // Estados para armazenar os valores dos inputs
    const [productName, setProductName] = useState('');
    const [productValue, setProductValue] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    return (
        <NewProduct>
            <FormDiv>
                <Pressable 
                    onPress={() => navigation.navigate('SellerProfile')} 
                    style={{ paddingRight: 276 }}  
                >
                    <BackContainer>
                        <ReturnButton />
                    </BackContainer>
                </Pressable>

                <FormTitle>Novo Produto</FormTitle>

                {/* Inputs para os dados do produto */}
                <InputDiv>
                    <Input 
                        secureTextEntry={false} 
                        placeholder="Nome do Produto" 
                        value={productName} 
                        onChangeText={setProductName}  // Atualiza o nome do produto
                    />
                </InputDiv>

                <InputDiv>
                    <Input 
                        secureTextEntry={false} 
                        placeholder="Valor do Produto" 
                        value={productValue} 
                        onChangeText={setProductValue}  // Atualiza o valor do produto
                    />
                </InputDiv>

                <InputDiv>
                    <Input 
                        secureTextEntry={false} 
                        placeholder="Descrição" 
                        value={description} 
                        onChangeText={setDescription}  // Atualiza a descrição
                    />
                </InputDiv>

                <InputDiv>
                    <Input 
                        secureTextEntry={false} 
                        placeholder="Categoria do Produto" 
                        value={category} 
                        onChangeText={setCategory}  // Atualiza a categoria do produto
                    />
                </InputDiv>
                
                <ButtonContainer>
                    <OrangeButton 
                        onPress={() => navigation.navigate('ProductPhoto')} 
                        texto="Adicionar Foto"
                    />
                </ButtonContainer>
            </FormDiv>

            <NavBar2 activeIcon={'home'} />
        </NewProduct>
    );
}
