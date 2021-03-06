import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress"
import Router from 'next/router';

//  For progress bar
const progress = new ProgressBar({
  size:4,
  color:"#FE858E",
  className:"z-50",
  delay=100,
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);


//Render the app
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
