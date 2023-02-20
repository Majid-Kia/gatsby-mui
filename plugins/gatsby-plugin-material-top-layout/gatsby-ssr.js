import React from 'react';
import TopLayout from './TopLayout';
import { HelmetProvider } from 'react-helmet-async';

const context = {};

const fontLinks = [
  <link
    rel="preload"
    href="/fonts/roboto/Roboto-Bold.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Roboto-Bold"
  />,
  <link
    rel="preload"
    href="/fonts/roboto/Roboto-Light.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Roboto-Light"
  />,
  <link
    rel="preload"
    href="/fonts/roboto/Roboto-Medium.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Roboto-Medium"
  />,
  <link
    rel="preload"
    href="/fonts/roboto/Roboto-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Roboto-Regular"
  />,
  <link
    rel="preload"
    href="/fonts/roboto/Roboto-Thin.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Roboto-Thin"
  />,
  <link
    rel="preload"
    href="/fonts/monoid/Monoid-Bold.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Monoid-Bold"
  />,
  <link
    rel="preload"
    href="/fonts/monoid/Monoid-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="Monoid-Regular"
  />,
  <link
    rel="preconnect"
    href="https://www.googletagmanager.com"
    crossOrigin="true"
  />,
  <link
    rel="dns-prefetch"
    key="dns-prefetch-google-gtag"
    href={'https://www.googletagmanager.com'}
  />,
  <link
    rel="preconnect"
    href="https://www.google-analytics.com"
    crossOrigin="true"
  />,
  <link
    rel="dns-prefetch"
    key="dns-prefetch-google-analytics"
    href={'https://www.google-analytics.com'}
  />,
  <link
    rel="preconnect"
    href="https://www.googleoptimize.com"
    crossOrigin="true"
  />,
  <link
    rel="dns-prefetch"
    key="dns-prefetch-google-optimize"
    href={'https://www.googleoptimize.com'}
  />,
  <link
    rel="preconnect"
    href="https://www.googleadservices.com"
    crossOrigin="true"
  />,
  <link
    rel="dns-prefetch"
    key="dns-prefetch-google-ads"
    href={'https://www.googleadservices.com'}
  />,
  <link
    rel="icon"
    type="image/png"
    href={`${process.env.GATSBY_SITE_URL}/favicon.png`}
  />,
];

export const onRenderBody = ({
  pathname,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const { helmet } = context[pathname];

  const noRobotsLink =
    process.env.GATSBY_ENVIRONMENT !== 'PRODUCTION'
      ? [<meta name="robots" content="noindex, nofollow" />]
      : [];

  if (helmet) {
    const baseComponent = helmet.base.toComponent();
    const titleComponent = helmet.title.toComponent();
    const components = [
      helmet.priority.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      helmet.style.toComponent(),
      helmet.script.toComponent(),
      helmet.noscript.toComponent(),
    ];

    setHeadComponents(
      titleComponent[0]?.props.children
        ? [
          baseComponent,
          titleComponent,
          ...components,
          ...fontLinks,
          ...noRobotsLink,
        ]
        : [baseComponent, ...components, ...fontLinks, ...noRobotsLink],
    );

    setHtmlAttributes(helmet.htmlAttributes.toComponent());
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  // const gtagProxyScript = (
  //   <script
  //     key="partytown-vanilla-config"
  //     dangerouslySetInnerHTML={{
  //       __html: `partytown = {
  //      resolveUrl(url, location) {
  //         if (url.hostname.includes('google-analytics')) {
  //           // Use a secure connection
  //           if (url?.protocol === 'http:') {
  //             url = new URL(url.href.replace('http', 'https'))
  //           }
  //
  //           // Point to our proxied URL
  //           const proxyUrl = new URL(location.origin + '/__third-party-proxy')
  //           proxyUrl.searchParams.append('url', url)
  //
  //           return proxyUrl
  //         }
  //
  //         return url
  //      }
  //    }`,
  //     }}
  //   />
  // );
};

export const wrapRootElement = ({ element, pathname }) => {
  context[pathname] = {};
  return (
    <HelmetProvider context={context[pathname]}>
      <TopLayout>{element}</TopLayout>
    </HelmetProvider>
  );
};
