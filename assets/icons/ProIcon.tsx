import React from 'react'
import { Icon, Text, View } from "@gluestack-ui/themed"
import { CrownIcon } from "./Icons"

const ProIcon = ({ size = 24, labelSize = 8 }: { size: number, labelSize: number }) => {
    return (
        <View flexDirection='row'>
            <Icon as={CrownIcon} h={size} w={size} fill={'white'} />
            <Text position='absolute' top={-4} right={-8} px={4} fontSize={labelSize} color='white' rounded={"$2xl"} bg='#FF4081'>Pro</Text>
        </View>
    )
}

export default ProIcon