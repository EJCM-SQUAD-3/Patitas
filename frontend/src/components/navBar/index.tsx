import { NavBarDiv, IconDiv, Icon, BottomLine } from "./styles";

type NavBarProps = {
    activeIcon: 'home' | 'search' | 'cart' | 'profile';
};

export default function NavBar({ activeIcon }: NavBarProps){
    return(
        <NavBarDiv>
            <IconDiv>
                <Icon source={require('../../assets/images/homeIcon.png')}/>
                {activeIcon === 'home' && <BottomLine/>}
            </IconDiv>
            <IconDiv>
                <Icon source={require('../../assets/images/searchIcon.png')}/>
                {activeIcon === 'search' && <BottomLine/>}
            </IconDiv>
            <IconDiv>
                <Icon source={require('../../assets/images/cartIcon.png')}/>
                {activeIcon === 'cart' && <BottomLine/>}
            </IconDiv>
            <IconDiv>
                <Icon source={require('../../assets/images/profileIcon.png')}/>
                {activeIcon === 'profile' && <BottomLine/>}
            </IconDiv>
        </NavBarDiv>            
    )
}