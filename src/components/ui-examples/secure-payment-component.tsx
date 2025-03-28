import React from 'react';

export const SecurePaymentBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-center">
        <p className="text-4xl font-bold text-green-500">¥290</p>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        结算
      </button>
    </div>
  );
};

export const SecurePaymentGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-center">
        <p className="text-4xl font-bold text-green-500">¥290</p>
      </div>
      <div className="space-y-3">
        <button className="w-full py-3 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          安全结算
        </button>
        <p className="text-sm text-center text-gray-600">
          我们承诺安全付款；免运费；30天无理由退款
        </p>
      </div>
    </div>
  );
};

export const SecurePaymentExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <SecurePaymentBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <SecurePaymentGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const SecurePaymentCode = {
  html: `<!-- Don't Example -->
<div class="payment-card">
  <p class="price">¥290</p>
  <button>结算</button>
</div>

<!-- Do Example -->
<div class="payment-card">
  <p class="price">¥290</p>
  <div class="action-area">
    <button>
      <svg><!-- Lock icon --></svg>
      安全结算
    </button>
    <p class="guarantee">我们承诺安全付款；免运费；30天无理由退款</p>
  </div>
</div>`,
  css: `.payment-card {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  text-align: center;
}

.price {
  font-size: 2.25rem;
  font-weight: 700;
  color: #22c55e;
}

.action-area {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.guarantee {
  font-size: 0.875rem;
  color: #4b5563;
  text-align: center;
}`
};