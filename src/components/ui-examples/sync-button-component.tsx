import React from 'react';

export const SyncButtonBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-end p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4 mb-8">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md text-xl">
        同步到XX
      </button>
    </div>
  );
};

export const SyncButtonGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-end p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4 mb-8">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>
      <div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-md text-xl flex items-center justify-center">
          同步到XX
        </button>
        <div className="text-xs mt-3 text-center flex items-center justify-center">
          <span className="w-4 h-4 inline-flex items-center justify-center bg-black text-white rounded-full text-xs mr-1">!</span>
          我们会遵循用户协议与隐私政策。
        </div>
      </div>
    </div>
  );
};

export const SyncButtonExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <SyncButtonBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <SyncButtonGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const SyncButtonCode = {
  html: `<!-- Don't Example -->
<div class="form-container">
  <div class="form-fields">
    <div class="form-field"></div>
    <div class="form-field"></div>
    <div class="form-field form-field-short"></div>
  </div>
  <button class="sync-button">
    同步到飞书
  </button>
</div>

<!-- Do Example -->
<div class="form-container">
  <div class="form-fields">
    <div class="form-field"></div>
    <div class="form-field"></div>
    <div class="form-field form-field-short"></div>
  </div>
  <div class="sync-section">
    <button class="sync-button">
      <svg class="sync-icon" viewBox="0 0 24 24">
        <path d="m22 8-6-6-6 6"></path>
        <path d="M16 2v10"></path>
        <path d="M8 16H2"></path>
        <path d="M2 8h6"></path>
        <path d="M22 16h-6"></path>
        <path d="M16 16v6"></path>
        <path d="M8 22v-6"></path>
      </svg>
      同步到飞书
    </button>
    <div class="privacy-notice">
      <span class="info-icon">!</span>
      我们会遵循用户协议与隐私政策。
    </div>
  </div>
</div>`,
  css: `/* Common Styles */
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  min-height: 300px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.form-field {
  height: 1rem;
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
}

.form-field-short {
  width: 66.666667%;
}

.sync-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
}

/* Do Example - Additional Styles */
.sync-section {
  display: flex;
  flex-direction: column;
}

.sync-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sync-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.privacy-notice {
  font-size: 0.75rem;
  margin-top: 0.75rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: black;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  margin-right: 0.25rem;
}`
};
