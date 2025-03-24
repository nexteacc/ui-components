import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';

interface ExampleWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  html: string;
  css: string;
  id: string;
}

export function ExampleWrapper({ title, description, children, html, css, id }: ExampleWrapperProps) {
  return (
    <div className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            {children}
          </div>
          <CodeBlock html={html} css={css} id={id} showCode={false} />
        </CardContent>
      </Card>
    </div>
  );
}
