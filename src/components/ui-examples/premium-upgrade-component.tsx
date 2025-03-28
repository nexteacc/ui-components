import React from 'react';

export const PremiumUpgradeBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">切换到高级用户</h2>
        <p className="text-gray-600">切换到高级用户并享受专广告打扰。</p>
      </div>
      <div className="space-y-3">
        <button className="w-full py-3 bg-blue-600 text-white rounded-md">
          切换到高级用户
        </button>
        <button className="w-full py-3 text-gray-500 hover:text-gray-700">
          不了，谢谢
        </button>
      </div>
    </div>
  );
};

export const PremiumUpgradeGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">免费试用3个月的高级用户特权</h2>
        <p className="text-gray-600">体验所有高级功能，无需支付任何费用。</p>
      </div>
      <div className="space-y-3">
        <button className="w-full py-3 bg-blue-600 text-white rounded-md">
          试用免费的高级用户
        </button>
        <button className="w-full py-3 text-gray-500 hover:text-gray-700">
          跳过
        </button>
      </div>
    </div>
  );
};

export const PremiumUpgradeExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <PremiumUpgradeBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <PremiumUpgradeGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const PremiumUpgradeCode = {
  html: `<!-- Don't Example -->
<div class="premium-upgrade">
  <h2>切换到高级用户</h2>
  <p>切换到高级用户并享受专广告打扰。</p>
  <div class="actions">
    <button class="upgrade-button">切换到高级用户</button>
    <button class="cancel-button">不了，谢谢</button>
  </div>
</div>

<!-- Do Example -->
<div class="premium-upgrade">
  <h2>免费试用3个月的高级用户特权</h2>
  <p>体验所有高级功能，无需支付任何费用。</p>
  <div class="actions">
    <button class="upgrade-button">试用免费的高级用户</button>
    <button class="cancel-button">跳过</button>
  </div>
</div>`,
  css: `.premium-upgrade {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.premium-upgrade h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.premium-upgrade p {
  color: #4b5563;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.upgrade-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

.cancel-button {
  width: 100%;
  padding: 0.75rem;
  color: #6b7280;
  border: none;
  cursor: pointer;
}

.cancel-button:hover {
  color: #374151;
}`
};