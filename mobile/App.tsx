import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import NLWLogo from './src/assets/nlw-spacetime-logo-2.svg';
import { styled } from 'nativewind';

const StyledStripes = styled(Stripes);

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground imageStyle={{
      position: 'absolute', left: '-100%'
    }} source={blurBg} className="bg-gray-900 flex-1 items-center relative">
      <Text className='text-gray-50 font-alt font-bold text-5xl'>Vinicio !!!</Text>
      <StatusBar style="light" translucent />
      <StyledStripes className='absolute left-2' />
      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
        <Text>Sua capsula do tempo</Text>
      </View>
    </ImageBackground>

  );
}
