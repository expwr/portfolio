import '@styles/global.css'

export const metadata = {
    title: "Noah.dev",
    description: "Porfolio containing all my projects and what I am about!"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body className="main">
            <div>

            </div>

            <main>
                {children}
            </main>
        </body>
    </html>

  )
}

export default RootLayout
