'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useCodeStore } from '@/hooks/use-code-store';
import { Check, Copy, Eye, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

type CodeEditorProps = {};

export default function CodeEditor({}: CodeEditorProps) {
  const { html, css, js, setHtml, setCss, setJs } = useCodeStore();
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const [srcDoc, setSrcDoc] = useState('');
  const { toast } = useToast();

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

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    const codeToCopy = { html, css, js };
    navigator.clipboard.writeText(JSON.stringify(codeToCopy, null, 2));
    setIsCopied(true);
    toast({
      title: 'Code Copied!',
      description: 'The full website code has been copied to your clipboard.',
    });
  };

  const handleDelete = () => {
    setHtml('');
    setCss('');
    setJs('');
    toast({
      title: 'Code Cleared!',
      description: 'The code editor has been cleared.',
      variant: 'destructive',
    });
  };

  const handlePreview = () => {
    window.open('/code-editor/preview', '_blank');
  };

  const CodeArea = ({
    value,
    onChange,
    placeholder,
  }: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  }) => (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-full min-h-[500px] w-full flex-1 resize-none rounded-none border-0 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
    />
  );

  return (
    <div className="flex h-full w-full flex-col">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex h-full flex-1 flex-col"
      >
        <div className="flex flex-col items-start justify-between border-b px-2 md:flex-row md:items-center md:px-4">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger
              value="html"
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              HTML
            </TabsTrigger>
            <TabsTrigger
              value="css"
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              CSS
            </TabsTrigger>
            <TabsTrigger
              value="js"
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              JavaScript
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
          </TabsList>
          <div className="flex w-full items-center gap-2 pb-2 md:w-auto md:pb-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreview}
              disabled={!html.trim()}
              className="flex-1 md:flex-initial"
            >
              <Eye className="mr-2 h-4 w-4" />
              Full Preview
            </Button>
            <Button variant="outline" size="sm" onClick={handleCopy} className="flex-1 md:flex-initial">
              {isCopied ? (
                <Check className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copy
            </Button>
            <Button
              variant="destructive-outline"
              size="sm"
              onClick={handleDelete}
              className="flex-1 md:flex-initial"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <TabsContent value="html" className="h-full">
            <ScrollArea className="h-full w-full">
              <CodeArea
                value={html}
                onChange={setHtml}
                placeholder="Write your HTML code here..."
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="css" className="h-full">
            <ScrollArea className="h-full w-full">
              <CodeArea
                value={css}
                onChange={setCss}
                placeholder="Write your CSS code here..."
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="js" className="h-full">
            <ScrollArea className="h-full w-full">
              <CodeArea
                value={js}
                onChange={setJs}
                placeholder="Write your JavaScript code here..."
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="preview" className="h-full bg-white">
            <iframe
              srcDoc={srcDoc}
              title="Website Preview"
              sandbox="allow-scripts allow-same-origin"
              className="h-full w-full"
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
