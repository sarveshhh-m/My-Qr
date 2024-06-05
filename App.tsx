import { GluestackUIProvider, Text, View } from '@gluestack-ui/themed'
import React from 'react'

const App = () => {
  return (
    <GluestackUIProvider>
      <View>
        <Text>App</Text>
      </View>
    </GluestackUIProvider>
  )
}

export default App