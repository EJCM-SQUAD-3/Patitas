import SmallTitle from "../../components/smallTitle";
import { GradientBackground } from "./styles";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated } from "react-native";

export default function ScreenLogo() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current; 

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      
      Animated.timing(fadeAnim, {
        toValue: 0, 
        duration: 2000, 
        useNativeDriver: true, 
      }).start(() => {
        
        navigation.navigate('Login'); 
      });
    }, 2000); 

    return () => clearTimeout(timeout); 
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <GradientBackground>
        <SmallTitle />
      </GradientBackground>
    </Animated.View>
  );
}
