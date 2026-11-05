import React, { Suspense } from 'react';

import { Alert } from '@/components/Alert';
import Providers from './Providers';
import Header, { HeaderView } from './_common/Header';
import Footer, { FooterView } from './_common/Footer';
import GoogleAnalytics from './GoogleAnalytics';
import ScrollAid, { ScrollAidView } from './_common/ScrollAid';
// Pretendard, self-hosted. The dynamic subset splits the font by character range, so a page
// downloads only the parts it uses (Korean is large).
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@/styles/globals.scss';
import { metadata as profileMetadata } from './profile/page';

export const metadata = {
  ...profileMetadata,
  metadataBase: new URL('https://miriya.net/'),
  title: {
    absolute: 'MIRIYA',
    template: '%s | MIRIYA',
  },
};

interface Props {
  children: React.ReactNode;
}

// fb:app_id는 Metadata에서 지원하지 않음, others에 넣으면 property가 아니라 name으로 들어감..
const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta property='fb:app_id' content='1374093376066474' />
        <meta name='view-transition' content='same-origin' />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: "if(/[?&]layout=full(&|$)/.test(location.search))document.documentElement.classList.add('fullLayout')",
          }}
        />
      </head>
      <body>
        {/*
          Each part that calls useSearchParams has its OWN <Suspense>. One <Suspense> around
          everything made Next skip server rendering for the whole page (empty <body>).
          The fallbacks render the same markup with default values, so nothing jumps.
          {children} also gets a boundary: a page that uses useSearchParams then only
          affects itself, not the header and footer.
        */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Providers>
          <Suspense fallback={<HeaderView />}>
            <Header />
          </Suspense>
          <Suspense fallback={null}>{children}</Suspense>
          <Suspense fallback={<ScrollAidView />}>
            <ScrollAid />
          </Suspense>
          <Suspense fallback={<FooterView />}>
            <Footer />
          </Suspense>
          <div id='alert' />
          <div id='modal' />
          <Alert />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
