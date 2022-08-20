import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <link
            href="https://static.mash-up.kr/fonts/Gilroy-Light.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://static.mash-up.kr/fonts/Gilroy-Extrabold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://static.mash-up.kr/fonts/gilroy.css" />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
