import '@/styles/globals.css'
import "@/styles/plugins.css";
import "@/styles/style.css";
import "@/styles/hermtac.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
