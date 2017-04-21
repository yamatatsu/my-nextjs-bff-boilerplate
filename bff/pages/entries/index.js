import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const isServer = !!req
    const host = isServer ? 'api' : 'localhost'
    const res = await fetch(`http://${host}:3000/items`)
    const items = await res.json()
    return { items }
  }

  render () {
    return (
      <div>
        <h1>Input Tell</h1>
        <Link href="/"><a>back</a></Link>
        <p>input your tell number</p>
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.id}: {item.name}</li>
          ))}
        </ul>
        <Link href='/wallets?walletId=hoge' as='/wallets/hoge'><a>wallet</a></Link>
      </div>
    )
  }
}
