import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, Playball } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

// Brush-script face for the "The Fern Key" wordmark, echoing the flowing
// hand-lettered logotype.
const playball = Playball({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['luxury villa rental', 'private villa', 'villa rental', siteConfig.name],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: '/media/brand/og-image.svg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/media/brand/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#123522',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${playball.variable}`}>
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1415423853373483');
fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-sans">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1415423853373483&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LoadingScreen />
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:rounded-full focus:bg-charcoal-950 focus:px-5 focus:py-3 focus:text-ivory-100"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
