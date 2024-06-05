import React, { useEffect } from 'react';
import { View, Pressable, Text } from '@gluestack-ui/themed';
import { Svg, Path } from 'react-native-svg';

const TabbarHeader = ({ title }: any) => {
    useEffect(() => {
        console.log(title)
    }, [])
    return (
        <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={16}
            height={60}
            backgroundColor='#121624'
        >

            <Text fontSize={18} fontWeight="bold" color="white">
                {title}
            </Text>

            <View flexDirection="row" alignItems="center">

                <View
                    backgroundColor="#FF4081"
                    borderRadius={8}
                    paddingHorizontal={4}
                    paddingVertical={2}
                    marginLeft={4}
                >
                    <Text fontSize={10} color="white">Pro</Text>
                </View>
            </View>
        </View>
    );
};

export default TabbarHeader;
