'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

type WebsitePreviewProps = {
  html: string;
  css: string;
  js: string;
};

export default function WebsitePreview({ html, css, js }: WebsitePreviewProps) {
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

  const CodeBlock = ({ code }: { code: string }) => (
    <ScrollArea className="h-full w-full">
      <pre className="text-sm text-background bg-foreground/90 p-4 rounded-b-lg">
        <code>{code}</code>
      </pre>
    </ScrollArea>
  );

  return (
    <div className="h-96 w-full rounded-b-lg border-t">
      <Tabs defaultValue="preview" className="h-full w-full">
        <TabsList className="grid w-full grid-cols-4 rounded-b-none rounded-t-none border-b">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="js">JS</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="h-[calc(100%-40px)] bg-white">
          <iframe
            srcDoc={srcDoc}
            title="Website Preview"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </TabsContent>
        <TabsContent value="html" className="h-[calc(100%-40px)]">
          <CodeBlock code={html} />
        </TabsContent>
        <TabsContent value="css" className="h-[calc(100%-40px)]">
          <CodeBlock code={css} />
        </TabsContent>
        <TabsContent value="js" className="h-[calc(100%-40px)]">
          <CodeBlock code={js} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
