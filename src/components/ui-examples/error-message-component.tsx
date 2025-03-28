import React from 'react';

export const ErrorMessageBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold text-red-500 mb-4">错误</h2>
        <p className="text-gray-700">
          由于 SSL 证书错误，代理服务器已将 http 请求截断。
        </p>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        再次发送请求
      </button>
    </div>
  );
};

export const ErrorMessageGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">抱歉</h2>
        <p className="text-gray-700">
          我们找不到你搜索的文章。
        </p>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        再试一次
      </button>
    </div>
  );
};

export const ErrorMessageExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ErrorMessageBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ErrorMessageGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ErrorMessageCode = {
  html: `<!-- Don't Example -->
<div class="error-container">
  <h2 class="error-title">错误</h2>
  <p class="error-message">
    由于 SSL 证书错误，代理服务器已将 http 请求截断。
  </p>
  <button class="retry-button">再次发送请求</button>
</div>

<!-- Do Example -->
<div class="error-container">
  <h2 class="error-title">抱歉</h2>
  <p class="error-message">
    我们找不到你搜索的文章。
  </p>
  <button class="retry-button">再试一次</button>
</div>`,
  css: `/* Common Styles */
.error-container {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.error-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.error-message {
  color: #374151;
}

.retry-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

/* Don't Example */
.error-title {
  color: #ef4444;
}

/* Do Example */
.error-title {
  color: #111827;
}`
};