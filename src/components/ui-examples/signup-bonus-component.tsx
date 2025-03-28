import React from 'react';

export const SignupBonusBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4">
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
        <div className="h-4 w-64 bg-gray-200 rounded"></div>
        <div className="h-4 w-56 bg-gray-200 rounded"></div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        注册XX
      </button>
    </div>
  );
};

export const SignupBonusGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4">
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
        <div className="h-4 w-64 bg-gray-200 rounded"></div>
        <div className="h-4 w-56 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-3">
        <button className="w-full py-3 bg-blue-600 text-white rounded-md">
          注册XX
        </button>
        <p className="text-sm text-center text-gray-600">
          注册XX领取新人红包
        </p>
      </div>
    </div>
  );
};

export const SignupBonusExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <SignupBonusBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <SignupBonusGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const SignupBonusCode = {
  html: `<!-- Don't Example -->
<div class="signup-form">
  <div class="content">
    <div class="text-line"></div>
    <div class="text-line"></div>
    <div class="text-line"></div>
  </div>
  <button class="signup-button">注册XX</button>
</div>

<!-- Do Example -->
<div class="signup-form">
  <div class="content">
    <div class="text-line"></div>
    <div class="text-line"></div>
    <div class="text-line"></div>
  </div>
  <div class="action-area">
    <button class="signup-button">注册XX</button>
    <p class="bonus-text">注册领取新人红包</p>
  </div>
</div>`,
  css: `.signup-form {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-line {
  height: 1rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
}

.text-line:nth-child(1) {
  width: 12rem;
}

.text-line:nth-child(2) {
  width: 16rem;
}

.text-line:nth-child(3) {
  width: 14rem;
}

.action-area {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.signup-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

.bonus-text {
  text-align: center;
  font-size: 0.875rem;
  color: #4b5563;
}`
};