'use client';

import { useCodeStore } from '@/hooks/use-code-store';
import { useEffect, useState } from 'react';

export default function PreviewPage() {
  const { html, css, js } = useCodeStore();
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const combinedSrc = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(combinedSrc);
  }, [html, css, js]);

  return (
    <iframe
      srcDoc={srcDoc}
      title="Website Preview"
      sandbox="allow-scripts"
      className="h-screen w-full bg-white"
    />
  );
}
