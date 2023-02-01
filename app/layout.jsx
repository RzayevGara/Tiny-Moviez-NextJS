import Header from '../components/layout/header/Header'
import Sidebar from '../components/layout/sidebar/Sidebar'
import '../assets/styles/global.sass'
import { Lato } from '@next/font/google'
import ReactQueryWrapper from './ReactQueryWrapper'

const lato = Lato({weight: ['100', '300', '400', '700', '900'],  subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html>
      <body  className={lato.className}>
        <ReactQueryWrapper>
            <Sidebar/>
            <main>
              <Header/>
                {children}
            </main>
        </ReactQueryWrapper>
      </body>
    </html>
  )
}
