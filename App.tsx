import { GluestackUIProvider } from '@gluestack-ui/themed'
import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'

const App = () => {
  return (
    <GluestackUIProvider>
      <RootNavigation />
    </GluestackUIProvider>
  )
}

export default App