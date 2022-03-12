import ProductList from './ProductList.js'

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location

    $target.innerHTML = ''

    if (pathname === '/') {
      new ProductList({ $target }).render()
    }
  }

  this.route()
}