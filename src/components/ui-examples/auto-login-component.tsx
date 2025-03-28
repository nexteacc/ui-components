import React from 'react';

export const AutoLoginBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">登录飞书</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="手机号"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        下一步
      </button>
    </div>
  );
};

export const AutoLoginGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">登录飞书</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="手机号"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <span className="text-sm text-gray-600">15天内自动登录</span>
          </label>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        下一步
      </button>
    </div>
  );
};

export const AutoLoginExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <AutoLoginBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <AutoLoginGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const AutoLoginCode = {
  html: `<!-- Don't Example -->
<div class="login-form">
  <h2>登录飞书</h2>
  <input type="text" placeholder="手机号" />
  <button>下一步</button>
</div>

<!-- Do Example -->
<div class="login-form">
  <h2>登录飞书</h2>
  <input type="text" placeholder="手机号" />
  <label>
    <input type="checkbox" />
    <span>15天内自动登录</span>
  </label>
  <button>下一步</button>
</div>`,
  css: `.login-form {
  min-height: 300px;
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

input[type="text"] {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
}

label {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

span {
  font-size: 0.875rem;
  color: #4b5563;
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