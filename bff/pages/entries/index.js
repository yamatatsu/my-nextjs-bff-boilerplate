import Link from 'next/link'

export default () => (
  <div>
    <h1>Input Tell</h1>
    <Link href="/"><a>back</a></Link>
    <p>input your tell number</p>
    <Link href='/wallets?walletId=hoge' as='/wallets/hoge'>wallet</Link>
  </div>
)
