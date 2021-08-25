import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress"

const progress= new ProgressBar
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
