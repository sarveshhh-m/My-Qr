import { FlatList, Text, View } from '@gluestack-ui/themed'
import React from 'react'
import data from '../../dummy/data'

const History = () => {
    return (
        <View backgroundColor='#121624' flex={1}>
            <View flex={1} backgroundColor='#f2f2f2' borderTopLeftRadius={40} borderTopRightRadius={40} padding={16}>
                <FlatList
                    data={data.historyData}
                    renderItem={({ item }: any) => (
                        <View p={16} rowGap={"$4"} bg='#ffffff' m={"$2"} rounded={"$xl"} >
                            <View flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Text fontSize={"$lg"} color='$pink600' fontWeight='$semibold' textAlign='left'>{item.title}</Text>
                                <Text fontSize={"$xs"} color='$textDark300' textAlign='left'>{new Date(item.timestamp).toLocaleDateString()}</Text>
                            </View>
                            <View>
                                <Text fontSize={"$sm"} color='$textDark500' textAlign='left'>
                                    {item.link}
                                </Text>
                            </View>
                        </View>)}
                />
            </View>
        </View >
    )
}

export default History