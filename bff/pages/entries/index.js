import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {
  static getInitialProps ({ req }) {
    const origin = !!req ? 'http://api:3000' : 'http://localhost:3000'
    return fetch(`${origin}/items`)
      .then(res => res.json())
      .then(items => ({ items }))
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
