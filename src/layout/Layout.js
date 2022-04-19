import Link from 'next/link'

const Layout = (props) => {

  return(
    <div className='layout'>
      <header>
        <img src='/static/next-logo.png' />
        <h3>nextjs redux starter</h3>
        <menu>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/'>
            <a>Redux demo</a>
          </Link>
        </menu>
      </header>
      { props.children }
    </div>
  )
}

export default Layout
