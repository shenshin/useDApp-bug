import React from 'react';
import ReactDOM from 'react-dom/client'
import { getDefaultProvider } from 'ethers'
import { DAppProvider, Mainnet } from '@usedapp/core'
import App from './App'

const dappConfig = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DAppProvider config={dappConfig}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
)
