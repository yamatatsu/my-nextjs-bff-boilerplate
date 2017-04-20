import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:3000/items')
    const json = await res.json()
    return { items: JSON.stringify(json) }
  }

  render () {
    return (
      <div>
        <h1>Input Tell</h1>
        <Link href="/"><a>back</a></Link>
        <p>input your tell number</p>
        <p>{this.props.items}</p>
        <Link href='/wallets?walletId=hoge' as='/wallets/hoge'>wallet</Link>
      </div>
    )
  }
}
