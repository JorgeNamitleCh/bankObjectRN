import { StyleSheet, Platform } from 'react-native';

const mtop = Platform.OS === 'ios' ? 32 : 0

export const themeStyle = StyleSheet.create({
    title: {
        fontFamily: 'Avenir-Medium',
        fontSize: 18
    },
    textStyle: {
        fontFamily: 'Avenir-Roman',
        fontSize: 16,
        textAlign:"justify",
    },
    margin: {
        marginHorizontal: 10,
        marginBottom:20,
        marginTop:mtop
    }

});

export const colors = {
    primary: '#5856D6',
    secondary: '#58FFD6'
}

