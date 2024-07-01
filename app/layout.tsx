import '@src/styles/globals.css';
import '@src/styles/fontawesome.css';
import '@src/styles/ReactToastify.min.css';
import LocalSchema from './localSchema';
import Script from 'next/script';
import { getSetting } from '@src/lib/database/settings';
import { Manrope } from 'next/font/google'
import PageProgressBar from '@src/components/layout/PageProgressBar';

export const metadata = {
  title: 'Crave Cannabis',
  description:
    'Crave Cannabis Dispensary'
};

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const googleTags = await getSetting("googleTags");

  return (
    <html lang="en" className="min-h-full">
      <head>
        <LocalSchema />
        <Script id="g-tag-manager" async src={`https://www.googletagmanager.com/gtag/js?id=${googleTags}`}></Script>
        <Script id="g-tag-script">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleTags}');`}
        </Script>
      </head>
      <body className={`min-h-full bg-dark ${manrope.className}`}>
        {children}
        <PageProgressBar />
      </body>
    </html>
  );
}
