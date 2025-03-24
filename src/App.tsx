import React from 'react';
import { ExampleWrapper } from './components/ui-examples/example-wrapper';
import { PriceComponentExample, PriceComponentCode } from './components/ui-examples/price-component';
import { ProductCardExample, ProductCardCode } from './components/ui-examples/product-card-component';
import { NotificationExample, NotificationCode } from './components/ui-examples/notification-component';
import { SyncButtonExample, SyncButtonCode } from './components/ui-examples/sync-button-component';

function App() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">中文 UI 组件示例</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          这个库展示了一系列中文用户界面组件的最佳实践，每个例子都包含"正确"和"错误"的设计方式，并提供了可复制的HTML和CSS代码。
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExampleWrapper
          title="价格展示组件"
          description="展示产品价格时，更好的方式是同时显示零售价和当前价格，以突出折扣力度。"
          id="price-component"
          html={PriceComponentCode.html}
          css={PriceComponentCode.css}
        >
          <PriceComponentExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="产品卡片组件"
          description="在产品卡片中添加社交证明元素，可以增加用户信任感和购买欲望。"
          id="product-card"
          html={ProductCardCode.html}
          css={ProductCardCode.css}
        >
          <ProductCardExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="通知组件"
          description="好的通知应该有明确的标题和积极的行动号召，引导用户进行下一步操作。"
          id="notification"
          html={NotificationCode.html}
          css={NotificationCode.css}
        >
          <NotificationExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="同步按钮组件"
          description="同步功能按钮应包含图标以提高识别度，并添加隐私政策提示以增加用户信任感。"
          id="sync-button"
          html={SyncButtonCode.html}
          css={SyncButtonCode.css}
        >
          <SyncButtonExample />
        </ExampleWrapper>
      </main>

      <footer className="mt-20 text-center py-6 border-t">
        <p className="text-gray-600">
          © {new Date().getFullYear()} UI组件展示 | 由Same.new AI助手创建
        </p>
      </footer>
    </div>
  );
}

export default App;
