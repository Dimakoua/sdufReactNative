import React from 'react'
import { Image, StyleSheet, View, Text, FlatList } from 'react-native'
import uuid from 'react-native-uuid';

export default function ItemCard1({ data }) {
    const renderLabel = ({ item }) => (
        <Text>LABEL: {item.text}</Text>
    );
    const renderCharacteristics = ({ item }) => (
        <View>
            <Text>Characteristic: {item.text}</Text>
            <Image source={{ uri: item.src }} />
        </View>
    );
    return (
        <View>
            {data ?
                <>
                    <Image
                        style={[styles.image]}
                        source={{ uri: data.src }}
                    />
                    <Text>{data.title}</Text>
                    <Text>UAH {data.price.uah}</Text>
                    <Text>USD {data.price.usd}</Text>

                    <FlatList
                        data={data.labels}
                        numColumns={2}
                        renderItem={renderLabel}
                        listKey={uuid.v4()}
                        keyExtractor={(item) => item.id}
                    />
                    <Text>USD {data.date}</Text>
                    <FlatList
                        data={data.characteristics}
                        numColumns={2}
                        renderItem={renderCharacteristics}
                        listKey={uuid.v4()}
                        keyExtractor={(item) => item.id}
                    />
                </>
                : null}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    }
});