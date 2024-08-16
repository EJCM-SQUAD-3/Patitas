import { NavBarDiv, IconDiv, Icon, BottomLine } from "./styles";

type NavBarProps = {
    activeIcon: 'home' | 'cart' | 'profile';
};

import { useNavigation } from "@react-navigation/native";

export default function NavBar2({ activeIcon }: NavBarProps){
    const navigation = useNavigation();
    return(
        <NavBarDiv>
            <IconDiv>
                <Icon source={require('../../assets/images/homeIcon.png')}/>
                {activeIcon === 'home' && <BottomLine/>}
            </IconDiv>
            <IconDiv>
                <Icon source={require('../../assets/images/cartIcon.png')}/>
                {activeIcon === 'cart' && <BottomLine/>}
            </IconDiv>
            <IconDiv onPress={()=>navigation.navigate('SellerProfile')}>
                <Icon source={require('../../assets/images/profileIcon.png')}/>
                {activeIcon === 'profile' && <BottomLine/>}
            </IconDiv>
        </NavBarDiv>            
    )
}