import React, { useEffect } from 'react';
import { View, Pressable, Text, Icon } from '@gluestack-ui/themed';
import { Svg, Path } from 'react-native-svg';
import { BellIcon } from 'lucide-react-native';
import { CrownIcon, MenuIcon, NotificationIcon } from '../../assets/icons/Icons';
import ProIcon from '../../assets/icons/ProIcon';

const TabbarHeader = ({ title }: any) => {
    return (
        <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={16}
            height={72}
            backgroundColor='#121624'
        >

            <Icon as={MenuIcon} h={24} w={24} stroke={"white"} />
            <Text fontSize={18} fontWeight="bold" color="white" flex={1} px={"$6"}>
                {title}
            </Text>

            <View flexDirection="row" alignItems="center" columnGap={"$2"}>
                <Pressable>
                    <Icon as={NotificationIcon} h={24} w={24} color="white" />
                </Pressable>
                <Pressable>
                    <ProIcon size={24} labelSize={8} />
                </Pressable>

            </View>
        </View>
    );
};

export default TabbarHeader;
