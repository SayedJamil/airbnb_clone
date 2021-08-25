import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress"

const progress = new ProgressBar({
  size=4,
  color="#FE858E"
})
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
