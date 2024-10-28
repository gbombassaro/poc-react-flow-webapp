'use client'
import { inriaserif, opensans, bebas } from '@/libs/font'
import store from '@/store'
import { ReactFlowProvider } from '@xyflow/react'
import { Viewport } from 'next'
import { Provider } from 'react-redux'

import '@xyflow/react/dist/style.css'
import './index.css'

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inriaserif.variable} ${opensans.variable} ${bebas.variable} antialiased`}>
      <body>
        <Provider store={store}>
          <ReactFlowProvider>
            {children}
          </ReactFlowProvider>
        </Provider>
      </body>
    </html>
  )
}