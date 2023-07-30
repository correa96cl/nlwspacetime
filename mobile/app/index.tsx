import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import { useEffect } from 'react';
import {useRouter} from 'expo-router';
import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
import NLWLogo from '../src/assets/nlw-spacetime-logo-2.svg';
import { styled } from 'nativewind';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { api } from '../src/lib/api';
import * as SecureStore from 'expo-secure-store'

const StyledStripes = styled(Stripes);

const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/fba88f110535f81b1399'
}

export default function App() {

    const router = useRouter()

    const [hasLoadedFonts] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        BaiJamjuree_700Bold
    });

    const [request, response, signInWithGithub] = useAuthRequest(
        {
            clientId: 'fba88f110535f81b1399', scopes: ['identity'], redirectUri: makeRedirectUri({
                scheme: 'nlwspacetime'
            })
        },
        discovery

    )

    async function handleGithubOAuthCode(code: string){

       const response = await api.post('/register', {
            code,
        })

        const {token} = response.data

        await SecureStore.setItemAsync('token', token)

        router.push('/memories')
    }

    useEffect(() => {
        if (response?.type == 'success') {
            const { code } = response.params;

          
        }
    }, [response]);

    if (!hasLoadedFonts) {
        return null;
    }

    return (
        <ImageBackground imageStyle={{
            position: 'absolute', left: '-100%'
        }} source={blurBg} className="px-8 py-10 bg-gray-900 flex-1 items-center relative">
            <Text className='text-gray-50 font-alt font-bold text-5xl'></Text>
            <StatusBar style="light" translucent />
            <StyledStripes className='absolute left-2' />
            <View className='flex-1 items-center justify-center gap-6'>
                <NLWLogo />
                <View className='space-y-2'>
                    <Text className='text-center font-title text-2xl text-gray-50'>Sua capsula do tempo</Text>
                    <Text className='text-center fomnt-body text-base leading-relaxed text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-3' onPress={() => signInWithGithub}>
                    <Text className='font-alt text-sm uppercase text-black'>Cadastrar lembrança</Text>
                </TouchableOpacity>
            </View>
            <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>Feito com no NLW da Rocketseat</Text>
        </ImageBackground>

    );
}
