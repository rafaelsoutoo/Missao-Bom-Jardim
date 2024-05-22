// src/pages/_document.tsx
import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { font } from '@/styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className={font.className}>
        <Head />
        <body style={{ background: '#d0d9e2' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
