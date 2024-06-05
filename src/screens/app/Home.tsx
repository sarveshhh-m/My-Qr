import { Text, View } from '@gluestack-ui/themed'
import React from 'react'
import data from '../../dummy/data'
import { Dimensions, FlatList } from 'react-native'


const Home = () => {
    const { width } = Dimensions.get('window')
    return (
        <View backgroundColor='#121624' flex={1}>
            <View flex={1} backgroundColor='#f2f2f2' borderTopLeftRadius={40} borderTopRightRadius={40}>
                <FlatList
                    style={{ padding: 16 }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    numColumns={2}

                    data={data.homeScreenData}
                    renderItem={({ item }) => (<View borderRadius={"$3xl"} p={16} rowGap={"$4"} bg='#ffffff' width={width / 2 - 50} alignItems='center' m={"$2"} >
                        <View height={72} width={72} bg={item.color} rounded={"$full"} />
                        <Text>{item.name}</Text>
                    </View>)}
                />
            </View>
        </View>
    )
}

export default Home