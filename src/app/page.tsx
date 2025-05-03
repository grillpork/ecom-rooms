'use client'
import Header from './components/Header'
import Main from './components/Main'
import ScrollFix from './ScrollFix'

const Home = () => {
  return (
    <div>
        <ScrollFix/>
        <Header/>
        <Main/>
    </div>
  )
}

export default Home