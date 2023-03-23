import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const BankDetailScreen = ({ route, navigation }) => {

    console.log(route.params)
    const { bank } = route.params;

    return (
        <View style={{ flex: 1 }}>

            {
                bank &&
                <>
                    <View style={{
                        flex: 4,
                        display: 'flex'
                    }}>
                        <Image
                            style={styles.header}
                            source={{
                                uri: bank.url,
                            }}
                            resizeMode="cover"
                        />
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.back, styles.centerContent]}
                        >
                            <Text>Back</Text>

                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flex: 6,
                        padding: 20
                    }}>
                        <View style={styles.bankDescription}>
                            <Text style={styles.titleBanck}>{bank.bankName} </Text>
                        </View>
                        <View style={styles.bankDescription}>
                            <Text style={styles.textBanck}>{bank.description} </Text>
                        </View>
                        <View style={styles.bankDescription}>
                            <Text style={styles.textBanck}>Años :  {bank.age} </Text>
                        </View>
                        <View style={styles.bankDescription}>
                            <Text style={styles.textBanck}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis, quisquam unde commodi itaque blanditiis numquam exercitationem ex nam nobis eius praesentium corporis architecto quaerat a ipsum nulla repellat tenetur. </Text>
                        </View>
                    </View>
                </>

            }

        </View>
    )
}

export const styles = StyleSheet.create({
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: "100%",
        position: 'absolute',
        zIndex: 0
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
    },
    back: {
        zIndex: 9999,
        position: 'absolute',
        left: 20,
        top: 36,
        paddingHorizontal:13,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10

    }



});