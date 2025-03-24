import React, { useState } from 'react';
import { CopyButton } from '@/components/ui/copy-button';

interface CodeBlockProps {
  html: string;
  css: string;
  id?: string;
  showCode?: boolean;
}

// 添加调试日志来跟踪数据流
export function CodeBlock({ html = '', css = '', id, showCode = true }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  
  // 确保html和css是字符串类型
  const safeHtml = typeof html === 'string' ? html : '';
  const safeCss = typeof css === 'string' ? css : '';
  
  // 添加调试日志
  console.log('CodeBlock接收到的props:', { html, css });
  console.log('处理后的值:', { safeHtml, safeCss, activeTab });
  console.log('传递给CopyButton的value:', activeTab === 'html' ? safeHtml : safeCss);

  // 如果不需要显示代码块，只显示复制按钮和标签切换
  if (showCode === false) {
    return (
      <div className="relative w-full bg-gray-50 border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded ${activeTab === 'html' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
            <button
              className={`px-3 py-1 rounded ${activeTab === 'css' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
          </div>
          <div>
            <CopyButton 
              value={activeTab === 'html' ? safeHtml : safeCss} 
              label={`Copy ${activeTab.toUpperCase()}`} 
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-gray-50 border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-100">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${activeTab === 'html' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            className={`px-3 py-1 rounded ${activeTab === 'css' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
        </div>
        <div>
          <CopyButton value={activeTab === 'html' ? safeHtml : safeCss} label={`Copy ${activeTab.toUpperCase()}`} />
        </div>
      </div>
      <div className="p-0">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={`language-${activeTab}`}>
            {activeTab === 'html' ? safeHtml : safeCss}
          </code>
        </pre>
      </div>
    </div>
  );
}
