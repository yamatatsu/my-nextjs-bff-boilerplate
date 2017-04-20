import React from 'react'

export default ({ url }) => {
  const { query: { walletId } } = url

  return (
    <div>
      <h1>Wallet</h1>
      <p>walletId: {walletId}</p>
    </div>
  )
}
