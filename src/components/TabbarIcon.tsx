import { Icon } from '@gluestack-ui/themed'
import React from 'react'

const TabbarIcon = ({ icon }: { icon: any }) => {
    return (
        <Icon as={icon} h={48} w={48} color="white" />
    )
}

export default TabbarIcon