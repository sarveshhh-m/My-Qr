import { GluestackUIProvider } from '@gluestack-ui/themed'
import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'
import { config } from '@gluestack-ui/config'

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <RootNavigation />
    </GluestackUIProvider>
  )
}

export default App