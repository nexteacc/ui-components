import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react'; 
import { ExampleWrapper } from './components/ui-examples/example-wrapper';
import { PriceComponentExample, PriceComponentCode } from './components/ui-examples/price-component';
import { ProductCardExample, ProductCardCode } from './components/ui-examples/product-card-component';
import { NotificationExample, NotificationCode } from './components/ui-examples/notification-component';
import { SyncButtonExample, SyncButtonCode } from './components/ui-examples/sync-button-component';
import { ErrorMessageExample, ErrorMessageCode } from './components/ui-examples/error-message-component';
import { ProductOptionsExample, ProductOptionsCode } from './components/ui-examples/product-options-component';
import { PremiumUpgradeExample, PremiumUpgradeCode } from './components/ui-examples/premium-upgrade-component';
import { SpamFilterExample, SpamFilterCode } from './components/ui-examples/spam-filter-component';
import { SignupBonusExample, SignupBonusCode } from './components/ui-examples/signup-bonus-component';
import { NewsletterSignupExample, NewsletterSignupCode } from './components/ui-examples/newsletter-signup-component';
import { SearchInputExample, SearchInputCode } from './components/ui-examples/search-input-component';
import { TimeLimitedOfferExample, TimeLimitedOfferCode } from './components/ui-examples/time-limited-offer-component';
import { FormFieldExample, FormFieldCode } from './components/ui-examples/form-field-component';
import { ContactListExample, ContactListCode } from './components/ui-examples/contact-list-component';
import { SecurePaymentExample, SecurePaymentCode } from './components/ui-examples/secure-payment-component';
import { FeishuTipsExample, FeishuTipsCode } from './components/ui-examples/feishu-tips-component';
import { OptionListExample, OptionListCode } from './components/ui-examples/option-list-component';
import { ScarcityProductExample, ScarcityProductCode } from './components/ui-examples/scarcity-product-component';
import { ReviewFilterExample, ReviewFilterCode } from './components/ui-examples/review-filter-component';
import { AuthorityExample, AuthorityCode } from './components/ui-examples/authority-component';
import { FootInDoorExample, FootInDoorCode } from './components/ui-examples/foot-in-door-component';
import { RestraintBiasExample, RestraintBiasCode } from './components/ui-examples/restraint-bias-component';
import { FluencyHeuristicExample, FluencyHeuristicCode } from './components/ui-examples/fluency-heuristic-component';


const categories = [
  {
    id: 'price-promotion',
    title: '价格与促销策略',
    icon: '💰',
    components: [
      {
        title: "锚定效应 Anchoring Effect",
        description: "通常被利用在消费场景中的认知偏差，通过前后对比来放大优惠感知，进而促进用户做出有利于我们的决策。",
        id: "price-component",
        html: PriceComponentCode.html,
        css: PriceComponentCode.css,
        example: <PriceComponentExample />
      },
      {
        title: "诱饵效应 Decoy Effect",
        description: "引入第三个选项来加强旧选项的吸引力。假设有产品 A 和 B，以下是顾客可以选择的选项：(1) ¥100 - A (2) ¥300 - B (3) ¥300 - A + B。在这个情景，(2) 是'诱饵'，用来引导顾客选择'目标选项' (3)。",
        id: "product-options",
        html: ProductOptionsCode.html,
        css: ProductOptionsCode.css,
        example: <ProductOptionsExample />
      },
      {
        title: "稀缺效应 Scarcity Effect",
        description: "通过展示库存紧张或限时优惠来制造紧迫感，促使用户更快做出购买决策。",
        id: "scarcity-product",
        html: ScarcityProductCode.html,
        css: ScarcityProductCode.css,
        example: <ScarcityProductExample />
      },
      {
        title: "时间限制优惠 Time-Limited Offer",
        description: "通过倒计时和限时优惠来促使用户立即行动，避免错过机会。",
        id: "time-limited-offer",
        html: TimeLimitedOfferCode.html,
        css: TimeLimitedOfferCode.css,
        example: <TimeLimitedOfferExample />
      }
    ]
  },
  {
    id: 'decision-guide',
    title: '用户决策引导',
    icon: '🧭',
    components: [
      {
        title: "从众效应 Bandwagon Effect",
        description: "我们在设计中可以营造出一种群体选择的效果来吸引更多的用户，通过展示购买人数和滚动播放购买信息来体现出该商品的热门，让正在犹豫的用户「随大流」下单购买。",
        id: "product-card",
        html: ProductCardCode.html,
        css: ProductCardCode.css,
        example: <ProductCardExample />
      },
      {
        title: "得寸进尺法 Foot-in-the-Door Technique",
        description: "先让用户完成简单任务（如注册），再引导完成复杂任务（如填写详细信息）。",
        id: "foot-in-door",
        html: FootInDoorCode.html,
        css: FootInDoorCode.css,
        example: <FootInDoorExample />
      },
      {
        title: "选择支持偏差 Choice-Supportive Bias",
        description: "在用户做出购买决定并成功完成交易之后，是用户分享产品（或添加评论）的绝佳时机：显示肯定的信息，并祝贺他们达成了这一步骤以激励用户。",
        id: "notification",
        html: NotificationCode.html,
        css: NotificationCode.css,
        example: <NotificationExample />
      }
    ]
  },
  {
    id: 'information-presentation',
    title: '信息呈现与框架',
    icon: '📊',
    components: [
      {
        title: "负面偏差 Negativity Bias",
        description: "用户更容易注意到负面信息，因此需要谨慎处理错误提示和警告信息。",
        id: "error-message",
        html: ErrorMessageCode.html,
        css: ErrorMessageCode.css,
        example: <ErrorMessageExample />
      },
      {
        title: "权威偏见 Authority Bias",
        description: "通过展示专家推荐或认证标志来增强用户信任。",
        id: "authority",
        html: AuthorityCode.html,
        css: AuthorityCode.css,
        example: <AuthorityExample />
      }
    ]
  },
  {
    id: 'user-cognition',
    title: '用户认知与行为',
    icon: '🧠',
    components: [
      {
        title: "知识的诅咒 Curse of Knowledge",
        description: "当我们是某个领域的专家时，会不知不觉假设其他人和我们具有相同的理解能力，尤其是对于专业术语的使用。考虑一下大多数用户，他们的技术水平可能不如你想象的那样，并且对你熟悉的事物也不太熟悉。",
        id: "error-message",
        html: ErrorMessageCode.html,
        css: ErrorMessageCode.css,
        example: <ErrorMessageExample />
      },
      {
        title: "不明确性效应 Ambiguity Effect",
        description: "我们倾向于避免未知，决策时避开资讯不足的选项，通过添加明确的细节来最大程度地减少歧义，从而提高转化率。CTA 按钮应在其旁边包含信息性标签，以清除确定性。",
        id: "sync-button",
        html: SyncButtonCode.html,
        css: SyncButtonCode.css,
        example: <SyncButtonExample />
      },
      {
        title: "损失趋避 Loss Aversion",
        description: "用户更倾向于避免损失而非获得收益，因此可以通过强调用户可能错过的机会来促使用户行动。",
        id: "premium-upgrade",
        html: PremiumUpgradeCode.html,
        css: PremiumUpgradeCode.css,
        example: <PremiumUpgradeExample />
      },
      {
        title: "自制偏差 Restraint Bias",
        description: "人们经常会高估自己控制冲动行为的能力。我们都认为'标题党'属于旁门左道，但我们还是陷入其中，不是吗？",
        id: "restraint-bias",
        html: RestraintBiasCode.html,
        css: RestraintBiasCode.css,
        example: <RestraintBiasExample />
      },
    ]
  },
  {
    id: 'user-experience',
    title: '用户体验优化',
    icon: '✨',
    components: [
      {
        title: "单纯接触效应 Mere Exposure Effect",
        description: "人们会单纯因为自己熟悉某个事物而产生好感。它表明某一外在刺激，仅仅因为呈现的次数越频繁（使个体能够接触到该刺激的机会越多），个体对该刺激将越喜欢。",
        id: "search-input",
        html: SearchInputCode.html,
        css: SearchInputCode.css,
        example: <SearchInputExample />
      },
      {
        title: "感知价值偏差 Perceived Value Bias",
        description: "通过精美的设计和动画提升产品质感，增强用户对产品价值的感知。",
        id: "secure-payment",
        html: SecurePaymentCode.html,
        css: SecurePaymentCode.css,
        example: <SecurePaymentExample />
      },
      {
        title: "零风险偏差 Zero-Risk Bias",
        description: "通过提供无风险试用或退款保证来降低用户决策门槛。",
        id: "signup-bonus",
        html: SignupBonusCode.html,
        css: SignupBonusCode.css,
        example: <SignupBonusExample />
      }
    ]
  },
  {
    id: 'others',
    title: '其他',
    icon: '📦',
    components: [
      {
        title: "框架效应 Framing Effect",
        description: "通过不同的信息呈现方式来影响用户决策。例如，将'4%垃圾邮件'改为'96%无垃圾邮件'来影响用户感知。",
        id: "spam-filter",
        html: SpamFilterCode.html,
        css: SpamFilterCode.css,
        example: <SpamFilterExample />
      },
      {
      title: "流畅性启发式 Fluency Heuristic",
      description: "我们认为那些处理速度更快、更流畅、更顺利的事物具有更高的价值。有时不合逻辑的论点在沟通良好的情况下（由有权威和经验的人提出）也可能会赢得胜利。",
      id: "fluency-heuristic",
      html: FluencyHeuristicCode.html,
      css: FluencyHeuristicCode.css,
      example: <FluencyHeuristicExample />
    },
      {
        title: "新闻订阅 Newsletter Signup",
        description: "在讲产品故事时，请使用个体案例，而非一般性陈述。提供明确的价值主张来吸引用户订阅。",
        id: "newsletter-signup",
        html: NewsletterSignupCode.html,
        css: NewsletterSignupCode.css,
        example: <NewsletterSignupExample />
      },
      {
        title: "感知价值偏差 Perceived Value Bias",
        description: "设计对于产品的成功比你想象的更为重要，多余的空间，错误的边框颜色和未对齐的文字，都会影响转化率",
        id: "contact-list",
        html: ContactListCode.html,
        css: ContactListCode.css,
        example: <ContactListExample />
      },
      {
        title: "XX提示 Tips",
        description: "通过友好的提示和引导来优化企业通讯工具的使用体验。",
        id: "feishu-tips",
        html: FeishuTipsCode.html,
        css: FeishuTipsCode.css,
        example: <FeishuTipsExample />
      },
      {
        title: "选项列表 Option List",
        description: "通过清晰的布局和交互设计来优化选项选择体验。",
        id: "option-list",
        html: OptionListCode.html,
        css: OptionListCode.css,
        example: <OptionListExample />
      },
      {
        title: "评论过滤 Review Filter",
        description: "通过智能过滤和排序来优化评论浏览体验。",
        id: "review-filter",
        html: ReviewFilterCode.html,
        css: ReviewFilterCode.css,
        example: <ReviewFilterExample />
      }
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">UI 组件示例</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          这里展示了一系列心理学效应的组件，来源 <a href="https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">飞书产品设计团队的分享</a>。
        </p>
      </header>

      {/* 修改为sticky定位，但不固定在顶部 */}
      <nav className="sticky top-20 bg-white z-10 py-4">
        <div className="flex justify-center gap-4 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {categories.map(category => (
          <section key={category.id} id={category.id} className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              {category.icon} {category.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.components.map((component, index) => (
                <ExampleWrapper
                  key={index}
                  title={component.title}
                  description={component.description}
                  id={component.id}
                  html={component.html}
                  css={component.css}
                >
                  {component.example}
                </ExampleWrapper>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="mt-20 text-center py-6 border-t">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          © {new Date().getFullYear()}{' '}
          <a 
            href="https://github.com/nexteacc/ui-components" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg height="24" width="24" viewBox="0 0 16 16" className="inline-block">
              <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <span className="text-sm text-gray-500">Build in public</span>
        </p>
      </footer>
      <Analytics /> 
    </div>
  );
}

export default App;
