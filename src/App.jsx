import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { CoinbaseWallet, Injected, WalletConnect } from './connectors';

function App() {
  const { activate, deactivate } = useWeb3React();
  return (
    <div><button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
    <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
    <button onClick={() => { activate(Injected) }}>Metamask</button>
    
    <button onClick={deactivate}>Disconnect</button></div>
  )
}

export default App