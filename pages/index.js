import Header from '@/components/header/Header'
import DarkMode from '@/components/mode/DarkMode'
import Seo from '@/components/seo/Seo'


const Home = () => {
  return (
    <div className='bg-homeBg dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed w-full min-h-screen md:pb-16'>
      <Seo pageTitle="Home" />
      <Header />
    </div>
  )
}

export default Home