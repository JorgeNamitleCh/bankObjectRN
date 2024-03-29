import React from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View, Platform } from 'react-native';
import { useBank } from '../hooks/useBank';
import { themeStyle } from '../theme/theme';
import { ItemRowBank } from '../components/ItemRowBank';


export const HomeScreen = ({ navigation }) => {


    const { banks, isLoading } = useBank()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    color={"#000000"}
                    size={200}

                />
            </View>

        )
    }


    return (
        <View style={{ flex: 1, ...themeStyle.margin }}>

            {
                banks.length > 0 &&
                <FlatList
                    data={banks}
                    style={{marginTop: Platform.OS === 'ios' ? 0 : 20}}
                    renderItem={
                        ({ item }) => <ItemRowBank
                            bank={item}
                            onPress={() => {
                                navigation.navigate('BankDetailScreen', {
                                    bank: item,
                                });
                            }}
                        />
                    }
                    keyExtractor={item => item.bankName}
                />

            }

        </View>
    )
}


export const styles = StyleSheet.create({

});

