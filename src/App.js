import { useEthers } from '@usedapp/core'
function App() {
  const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
  if (!account) return <button onClick={activateBrowserWallet}>Activate</button>
  return (
    <div>
      <p>Chain id: {chainId}</p>
      <p>Account: {account}</p>
      <button onClick={deactivate}>Deactivate</button>
    </div>
  )
}

export default App
