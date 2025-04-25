import './globals.css'

export const metadata = {
  title: 'TravelNest',
  description: 'Your travel companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Albert+Sans:400|Inter:400" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}