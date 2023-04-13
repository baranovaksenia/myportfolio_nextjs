import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'
import '@/styles/custom.css'

export default function App({ Component, pageProps }) {

  return (
    // This will set the class attribute on the html element to light or dark
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
