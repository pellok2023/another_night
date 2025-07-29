export const useGoogleAnalytics = () => {
  // 追蹤頁面瀏覽
  const trackPageView = (pageTitle?: string, pagePath?: string) => {
    if (process.client && window.gtag) {
      window.gtag("config", "G-7F99LXMD05", {
        page_title: pageTitle,
        page_location: pagePath || window.location.href,
      });
    }
  };

  // 追蹤自定義事件
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (process.client && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // 追蹤訂房按鈕點擊
  const trackBookingClick = (source: string) => {
    trackEvent("booking_click", "engagement", source);
  };

  // 追蹤聯絡表單提交
  const trackContactForm = () => {
    trackEvent("contact_form_submit", "lead_generation", "contact_page");
  };

  // 追蹤以工換宿表單點擊
  const trackWorkExchangeForm = () => {
    trackEvent("work_exchange_form_click", "lead_generation", "work_exchange");
  };

  // 追蹤語言切換
  const trackLanguageSwitch = (language: string) => {
    trackEvent("language_switch", "user_preference", language);
  };

  // 追蹤外部連結點擊
  const trackExternalLink = (url: string, linkType: string) => {
    trackEvent("external_link_click", "engagement", `${linkType}: ${url}`);
  };

  // 追蹤電話號碼點擊
  const trackPhoneClick = () => {
    trackEvent("phone_click", "engagement", "contact_phone");
  };

  // 追蹤電子郵件點擊
  const trackEmailClick = (emailType: string) => {
    trackEvent("email_click", "engagement", emailType);
  };

  return {
    trackPageView,
    trackEvent,
    trackBookingClick,
    trackContactForm,
    trackWorkExchangeForm,
    trackLanguageSwitch,
    trackExternalLink,
    trackPhoneClick,
    trackEmailClick,
  };
};

// 為 TypeScript 添加全域類型定義
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
