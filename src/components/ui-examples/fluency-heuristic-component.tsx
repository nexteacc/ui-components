import React from 'react';

export const FluencyHeuristicBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-6">登录XX书</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="请输入手机号"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md">
          下一步
        </button>
      </div>
    </div>
  );
};

export const FluencyHeuristicGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-6">登录XX书</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="请输入手机号"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="auto-login" className="mr-2" />
          <label htmlFor="auto-login" className="text-sm text-gray-600">
            15天内自动登录
          </label>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md">
          下一步
        </button>
      </div>
    </div>
  );
};

export const FluencyHeuristicExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <FluencyHeuristicBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <FluencyHeuristicGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const FluencyHeuristicCode = {
  html: `<!-- Don't Example -->
<div class="login-form">
  <h2>登录XX书</h2>
  <div class="form-group">
    <label>手机号</label>
    <input type="text" placeholder="请输入手机号" />
  </div>
  <button>下一步</button>
</div>

<!-- Do Example -->
<div class="login-form">
  <h2>登录XX书</h2>
  <div class="form-group">
    <label>手机号</label>
    <input type="text" placeholder="请输入手机号" />
  </div>
  <div class="auto-login">
    <input type="checkbox" id="auto-login" />
    <label for="auto-login">15天内自动登录</label>
  </div>
  <button>下一步</button>
</div>`,
  css: `.login-form {
  min-height: 250px;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.auto-login {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.auto-login label {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
}

button {
  width: 100%;
  padding: 0.5rem;
  background: #2563eb;
  color: white;
  border-radius: 0.375rem;
}`
};