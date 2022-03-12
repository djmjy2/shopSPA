export default function ProductList({$target}) {
  const page = document.createElement('div')
  $page.className = 'ProductList'
  $page.innerHTML = '<h1>상품목록</h1>'

  this.render = () => {
    $target.appendChild($page)
  }
}