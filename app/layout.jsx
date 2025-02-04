import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.css';
import '@icon/icofont/icofont.css';
import "./globals.css";
import Head from "next/head"; // Import Head for meta tags

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});
const Header = dynamic(() => import('@/components/Header/Header'))
const Footer = dynamic(() => import('@/components/Footer/Footer'))



export const metadata = {
  title: "Χειρουργός Οφθαλμίατρος Καλαμάτα – Ζήσης Δ. Βάνης",
  description: "Χειρουργός Οφθαλμίατρος Καλαμάτα – Ζήσης Βάνης οφθαλμίατρος Καλαμάτα – Στρατιωτικός Ιατρός",
  url: "https://www.vaniseye.gr/",
  image: "https://www.vaniseye.gr/images/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description}/>

      <meta property="og:title" content={metadata.title}/>
      <meta property="og:description" content={metadata.description}/>
      <meta property="og:image" content={metadata.image}/>
      <meta property="og:url" content={metadata.url}/>
      <meta property="og:type" content="website"/>
    </Head>
    <body className={poppins.className}>
    <Header/>
    <div>
      {children}
    </div>
    <Footer/>
    </body>
    </html>
  );
}
