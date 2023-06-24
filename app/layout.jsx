import Nav from '@components/Nav'
import '@styles/global.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata = {
    title: "Noah.dev",
    description: "Porfolio containing all my projects and what I am about!"
}

const RootLayout = ({ children }) => {
  return (
    <html>
      
        <body className="main">
          
            <main>
              <Nav />
              {children}
            </main>
        </body>
    </html>

  )
}

export default RootLayout
