import React from 'react';



export const ExcelLearningCode = {
  html: `<!-- Don't Example -->
<div class="excel-learning">
  <h2>像专业人士一样创建 Excel 数据透视表！</h2>
  <button>现在学习</button>
</div>

<!-- Do Example -->
<div class="excel-learning">
  <h2>不会使用 Excel 数据表格？</h2>
  <p>"不要让你的老板失望！"</p>
  <button>现在学习</button>
</div>`,
  css: `.excel-learning {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  color: #4b5563;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #e5e7eb;
  color: #374151;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};

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
<div class="error-message">
  <h2>错误</h2>
  <p>由于 SSL 证书错误，代理服务器已将 http 请求截断。</p>
  <button>再次发送请求</button>
</div>

<!-- Do Example -->
<div class="error-message">
  <h2>抱歉</h2>
  <p>我们找不到你搜索的文章。</p>
  <button>再试一次</button>
</div>`,
  css: `.error-message {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  color: #374151;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};