import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress"
import Router from 'next/dist/server/router';

const progress = new ProgressBar({
  size=4,
  color="#FE858E",
  className="z-50",
  delay=100,
});
Router.events.on('route')
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
