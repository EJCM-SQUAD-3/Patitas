import { NavBarDiv, IconDiv, Icon, BottomLine } from "./style";

type NavBarProps = {
    activeIcon: 'home' | 'cart' | 'profile';
};

export default function NavBar2({ activeIcon }: NavBarProps){
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
            <IconDiv>
                <Icon source={require('../../assets/images/profileIcon.png')}/>
                {activeIcon === 'profile' && <BottomLine/>}
            </IconDiv>
        </NavBarDiv>            
    )
}