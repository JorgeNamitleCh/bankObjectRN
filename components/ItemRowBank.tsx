import React from 'react'
import { Bank } from '../interfaces/interfaces';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    bank: Bank,
    onPress?: (() => void) | undefined
}

export const ItemRowBank = ({ bank, onPress = () => {} }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 25 }}>
                <View style={{ flex: 4, ...styles.centerContent }}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: bank.url,
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View style={{ flex: 8, ...styles.infoBank }}>
                    <View style={styles.bankDescription}>
                        <Text style={styles.titleBanck}>{bank.bankName} </Text>
                    </View>
                    <View style={styles.bankDescription}>
                        <Text style={styles.textBanck}>{bank.description} </Text>
                    </View>
                    <View style={styles.bankDescription}>
                        <Text style={styles.textBanck}>Años:  {bank.age} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}


export const styles = StyleSheet.create({
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    infoBank: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    bankDescription: {
        padding: 5
    },
    titleBanck: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textBanck: {
        fontSize: 16,
    }



});