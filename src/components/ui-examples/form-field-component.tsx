import React from 'react';

export const FormFieldBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">邮箱</label>
          <input
            type="email"
            placeholder="i.e. john@gmail.com"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">生日</label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        提交
      </button>
    </div>
  );
};

export const FormFieldGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">邮箱</label>
          <input
            type="email"
            placeholder="i.e. john@gmail.com"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <p className="mt-1 text-sm text-gray-500">我们承诺不发送垃圾邮件</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">生日</label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <p className="mt-1 text-sm text-gray-500">我们为什么需要收集信息？</p>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        提交
      </button>
    </div>
  );
};

export const FormFieldExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <FormFieldBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <FormFieldGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const FormFieldCode = {
  html: `<!-- Don't Example -->
<div class="form-field">
  <label>邮箱</label>
  <input type="email" placeholder="i.e. john@gmail.com" />
  <label>生日</label>
  <input type="text" placeholder="DD/MM/YYYY" />
  <button>提交</button>
</div>

<!-- Do Example -->
<div class="form-field">
  <label>邮箱</label>
  <input type="email" placeholder="i.e. john@gmail.com" />
  <p class="hint">我们承诺不发送垃圾邮件</p>
  <label>生日</label>
  <input type="text" placeholder="DD/MM/YYYY" />
  <p class="hint">我们为什么需要收集信息？</p>
  <button>提交</button>
</div>`,
  css: `.form-field {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}

.hint {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
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