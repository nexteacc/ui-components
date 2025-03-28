import React from 'react';
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
import { ExcelLearningExample, ExcelLearningCode } from './components/ui-examples/excel-learning-component';
import { SearchInputExample, SearchInputCode } from './components/ui-examples/search-input-component';
import { TimeLimitedOfferExample, TimeLimitedOfferCode } from './components/ui-examples/time-limited-offer-component';
import { FormFieldExample, FormFieldCode } from './components/ui-examples/form-field-component';
import { ContactListExample, ContactListCode } from './components/ui-examples/contact-list-component';
import { SecurePaymentExample, SecurePaymentCode } from './components/ui-examples/secure-payment-component';
import { FeishuTipsExample, FeishuTipsCode } from './components/ui-examples/feishu-tips-component';
import { OptionListExample, OptionListCode } from './components/ui-examples/option-list-component';
import { ScarcityProductExample, ScarcityProductCode } from './components/ui-examples/scarcity-product-component';
import { AutoLoginExample, AutoLoginCode } from './components/ui-examples/auto-login-component';
import { ReviewFilterExample, ReviewFilterCode } from './components/ui-examples/review-filter-component';
import { AuthorityExample, AuthorityCode } from './components/ui-examples/authority-component';
import { FootInDoorExample, FootInDoorCode } from './components/ui-examples/foot-in-door-component';

function App() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">UI 组件示例</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          这个库展示了一系列心理学效应的组件
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExampleWrapper
          title="锚定效应 Anchoring Effect"
          description="通常被利用在消费场景中的认知偏差，通过前后对比来放大优惠感知，进而促进用户做出有利于我们的决策。"
          id="price-component"
          html={PriceComponentCode.html}
          css={PriceComponentCode.css}
        >
          <PriceComponentExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="从众效应 Bandwagon Effect"
          description="我们在设计中可以营造出一种群体选择的效果来吸引更多的用户，通过展示购买人数和滚动播放购买信息来体现出该商品的热门，让正在犹豫的用户「随大流」下单购买。"
          id="product-card"
          html={ProductCardCode.html}
          css={ProductCardCode.css}
        >
          <ProductCardExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="选择支持偏差 Choice-Supportive Bias"
          description="在用户做出购买决定并成功完成交易之后，是用户分享产品（或添加评论）的绝佳时机：显示肯定的信息，并祝贺他们达成了这一步骤以激励用户。"
          id="notification"
          html={NotificationCode.html}
          css={NotificationCode.css}
        >
          <NotificationExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="不明确性效应 Ambiguity Effect"
          description="我们倾向于避免未知，决策时避开资讯不足的选项，通过添加明确的细节来最大程度地减少歧义，从而提高转化率。CTA 按钮应在其旁边包含信息性标签，以清除确定性。"
          id="sync-button"
          html={SyncButtonCode.html}
          css={SyncButtonCode.css}
        >
          <SyncButtonExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="知识的诅咒 Curse of Knowledge"
          description="当我们是某个领域的专家时，会不知不觉假设其他人和我们具有相同的理解能力，尤其是对于专业术语的使用。考虑一下大多数用户，他们的技术水平可能不如你想象的那样，并且对你熟悉的事物也不太熟悉。"
          id="error-message"
          html={ErrorMessageCode.html}
          css={ErrorMessageCode.css}
        >
          <ErrorMessageExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="诱饵效应 Decoy Effect"
          description="引入第三个选项来加强旧选项的吸引力。假设有产品 A 和 B，以下是顾客可以选择的选项：(1) ¥100 - A (2) ¥300 - B (3) ¥300 - A + B。在这个情景，(2) 是'诱饵'，用来引导顾客选择'目标选项' (3)。"
          id="product-options"
          html={ProductOptionsCode.html}
          css={ProductOptionsCode.css}
        >
          <ProductOptionsExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="禀赋效应 Endowment Effect"
          description="禀赋效应是损失规避（loss aversion）的一种表现形式，免费试用是禀赋效应的最常见用法。一旦用户开始使用某种产品并投入了一段时间，那么在试用期结束束时，他们很难放手而停止使用。当用户准备离开时，他们会觉得自己即将失去很多美好的事物。"
          id="premium-upgrade"
          html={PremiumUpgradeCode.html}
          css={PremiumUpgradeCode.css}
        >
          <PremiumUpgradeExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="框架效应 Framing Effect"
          description="框架效应的意义是，面对同一个问题，在使用不同的描述后，人们会选择听之下较有利或顺耳的描述作为方案。在大多数情况下，正向表述（例如玻璃杯已满一半）的转换率会更高。"
          id="spam-filter"
          html={SpamFilterCode.html}
          css={SpamFilterCode.css}
        >
          <SpamFilterExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="当下偏差 Current Moment Bias"
          description="又称现时偏差，人们更倾向于获取即时收益，而非未来的更大收益。为用户的立即购买提供小折扣（或免费送货），而非承诺他们在将来购买时提供更大的折扣。"
          id="signup-bonus"
          html={SignupBonusCode.html}
          css={SignupBonusCode.css}
        >
          <SignupBonusExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="可辨识受害者效应 Identifiable Victim Effect"
          description="我们倾向于同情一个特定的人而不是匿名的某一个人。在讲产品故事时，请使用个体案例，而非一般性陈述。"
          id="newsletter-signup"
          html={NewsletterSignupCode.html}
          css={NewsletterSignupCode.css}
        >
          <NewsletterSignupExample />
        </ExampleWrapper>



        <ExampleWrapper
          title="负面偏差 Negativity Bias"
          description="相比于中性或者积极的事物，具有负面影响的事物对人们的心理影响更大。"
          id="excel-learning"
          html={ExcelLearningCode.html}
          css={ExcelLearningCode.css}
        >
          <ExcelLearningExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="单纯接触效应 Mere Exposure Effect"
          description="人们会单纯因为自己熟悉某个事物而产生好感。它表明某一外在刺激，仅仅因为呈现的次数越频繁（使个体能够接触到该刺激的机会越多），个体对该刺激将越喜欢。"
          id="search-input"
          html={SearchInputCode.html}
          css={SearchInputCode.css}
        >
          <SearchInputExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="损失趋避 Loss Aversion"
          description="指人们面对同样数量的收益和损失时，认为损失更加令他们难以忍受。损失带来的负效用为收益正效用的2至2.5倍。"
          id="time-limited-offer"
          html={TimeLimitedOfferCode.html}
          css={TimeLimitedOfferCode.css}
        >
          <TimeLimitedOfferExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="忽略可能性 Neglect of Probability"
          description="当我们承受压力时，我们没有想到风险发生的可能性。结果，较小的风险可能会被高估或被忽略。在转换漏斗中，最小的不确定性可能导致用户对产品的不信任并停止使用。"
          id="form-field"
          html={FormFieldCode.html}
          css={FormFieldCode.css}
        >
          <FormFieldExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="感知价值偏差 Perceived Value Bias"
          description="我们根据产品的外观或服务方式来感知其价值。正如人们所说：全部在包装中！"
          id="contact-list"
          html={ContactListCode.html}
          css={ContactListCode.css}
        >
          <ContactListExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="零风险偏差 Zero-Risk Bias"
          description="我们喜欢确定性，即使它适得其反。在有其他方案可以降低整个风险的情形下，仍倾向于完全消除某一项风险的偏见。"
          id="secure-payment"
          html={SecurePaymentCode.html}
          css={SecurePaymentCode.css}
        >
          <SecurePaymentExample />
        </ExampleWrapper>

        <ExampleWrapper
          title="自制偏差 Restraint Bias"
          description="人们经常会高估自己控制冲动行为的能力。"
          id="feishu-tips"
          html={FeishuTipsCode.html}
          css={FeishuTipsCode.css}
        >
          <FeishuTipsExample />
        </ExampleWrapper>

        <ExampleWrapper
        title="分析瘫痪 Analysis Paralysis"
        description="又称选择超载。当出现太多选择时，我们的大脑就会瘫痪，很难进行选择。"
        id="option-list"
        html={OptionListCode.html}
        css={OptionListCode.css}
      >
        <OptionListExample />
      </ExampleWrapper>

      <ExampleWrapper
        title="稀缺效应 Scarcity Effect"
        description="我们将稀缺物品的价值提高，将高可用性物品的价值降低。害怕错过（FOMO: fear of missing out）使我们更容易受到诱惑和冲动，并促使我们做出轻率的决定。"
        id="scarcity-product"
        html={ScarcityProductCode.html}
        css={ScarcityProductCode.css}
      >
        <ScarcityProductExample />
      </ExampleWrapper>

      <ExampleWrapper
        title="流畅性启发 Fluency Heuristic"
        description="我们认为那些处理速度更快、更流畅、更顺利的事物具有更高的价值。有时不合逻辑的论点在沟通良好的情况下（由有权威和经验的人提出）也可能会赢得胜利。"
        id="auto-login"
        html={AutoLoginCode.html}
        css={AutoLoginCode.css}
      >
        <AutoLoginExample />
      </ExampleWrapper>

      <ExampleWrapper
        title="群内偏差 Ingroup Bias"
        description="群内偏差常被用来引导用户决策，它是指人们会在认知上倾向于自己所属的群体。在体验设计中利用群内偏差的关键点在于打造群体归属感，借由小群体的力量影响用户的决策。"
        id="review-filter"
        html={ReviewFilterCode.html}
        css={ReviewFilterCode.css}
      >
        <ReviewFilterExample />
      </ExampleWrapper>
      <ExampleWrapper
        title="权威偏见 Authority Bias"
        description="我们认为权威人士给出的建议准确性更高，并且更容易受到该建议的影响（即便事物主体与该人物的权威性无关）。"
        id="authority"
        html={AuthorityCode.html}
        css={AuthorityCode.css}
      >
        <AuthorityExample />
      </ExampleWrapper>

      <ExampleWrapper
        title="得寸进尺法 Foot-in-the-Door Technique"
        description="得寸进尺法又译登门槛效应，是一种通过先提出一个简单的小请求来说服用户同意一个较大请求的功效方法。"
        id="foot-in-door"
        html={FootInDoorCode.html}
        css={FootInDoorCode.css}
      >
        <FootInDoorExample />
      </ExampleWrapper>

      </main>

      <footer className="mt-20 text-center py-6 border-t">
        <p className="text-gray-600">
          © {new Date().getFullYear()} UI组件展示 | 由Same.new AI助手创建
        </p>
      </footer>
    </div>
  );
}

export default App;
