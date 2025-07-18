import { ref, reactive, readonly } from "vue";

// 全局語言狀態
const currentLanguage = ref("zh");

// Agoda 訂房網址
const BOOKING_URL =
  "https://www.agoda.com/zh-tw/ur-lodge/hotel/taitung-tw.html?countryId=140&finalPriceView=1&isShowMobileAppPrice=false&cid=1922895&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-08-1&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=TWD&isFreeOccSearch=false&tag=23999ddf-604f-4129-a3f5-5829d6d542f2&los=1&searchrequestid=23244bdd-7d9d-49a5-be32-810418866d1d&ds=gPAAQ9S4XTBkqmCb";

// 語言配置
const translations = reactive({
  zh: {
    // 導航
    home: "首頁",
    about: "關於我們",
    rooms: "客房介紹",
    services: "周遭景點",
    contact: "聯絡我們",
    bookNow: "立即訂房",
    contactNow: "立即聯絡",

    // 首頁關於區域
    aboutSectionTitle1: "在台東，山與海之間",
    aboutSectionTitle2: "又一宿．又上的臨時客棧",
    aboutDescription:
      "我們不完美，卻誠實地準備好迎接每一位旅人。《又一宿》靈感來自「柳暗花明又一村」，這裡是「又上」團隊出發的小冒險。我們是一間「正在蛻變中的旅店」，像剛畢業的年輕人，還穿著便服，卻已準備面對這個世界。這裡不完美，卻真誠；不豪華，卻有溫度。",
    service24Hours: "真誠服務",
    refinedRooms: "舒適客房",
    diningService: "在地美食指引",
    businessFacilities: "基本設施",
    professionalTeamNote: "▷ 歡迎成為我們蛻變過程的見證人",

    // 以工換宿區塊
    workExchangeTitle: "募集以工換宿",
    workExchangeSubtitle: "與我們一起創造美好的住宿體驗",
    workExchangeDescription:
      "我們正在尋找熱愛旅行、願意分享的夥伴加入我們的團隊。以工換宿不僅是工作，更是一段難忘的人生體驗。在這裡，您將體驗台東的山海之美，感受在地文化，同時為我們的旅宿貢獻您的熱情與技能。",
    workExchangeFeatures: "工作內容",
    workExchangeFeaturesDesc: "前台接待、客房整理、環境維護",
    workExchangeBenefits: "換宿福利",
    workExchangeBenefitsDesc: "免費住宿、在地體驗、文化交流",
    workExchangeDuration: "工作時間",
    workExchangeDurationDesc: "面議",
    workExchangeContact: "若有興趣歡迎填寫表單",
    workExchangeEmail: "urlodge20250701@gmail.com",
    workExchangeRecruiting: "招募中",
    workExchangeCulturalExchange: "文化交流",
    workExchangeOpenForApplication: "開放申請中",
    workExchangeJoinNow: "立即加入",
    workExchangeBottomText: "期待與您一起創造美好的住宿體驗",

    // 房型區域
    roomTypesTitle: "客房空間",
    roomTypesSubtitle:
      "簡單而溫暖的住宿空間，在我們整修蛻變的過程中，為您提供真誠的休憩體驗",

    // 房間卡片
    popularRecommendation: "經典選擇",
    standardRoom: "標準客房",
    standardRoomDesc:
      "簡單舒適的客房空間，配備基本設施。我們正在蛻變中，可能不完美，但每個細節都充滿誠意。",
    upgradeRecommendation: "舒適推薦",
    deluxeRoom: "舒適客房",
    deluxeRoomDesc:
      "更寬敞的休憩空間，在過渡期間為您提供溫暖的住宿體驗。真實而不造作的住宿環境。",
    topEnjoyment: "溫馨體驗",
    refinedSuite: "溫馨套房",
    refinedSuiteDesc:
      "獨立的生活空間，在這個正在蛻變的旅店中，感受最真摯的住宿溫度與人情味。",
    familyChoice: "家庭首選",
    familyRoom: "家庭客房",
    familyRoomDesc:
      "寬敞的家庭空間設計，適合親子旅遊，配備完善的家庭設施，讓您與家人共享溫馨時光。",
    familyFacilities: "家庭設施",
    guests: "人",
    perNight: "/晚",
    bookNowAction: "立即預訂",

    // 交通資訊區域
    transportationTitle: "交通資訊",
    transportationSubtitle: "便利的交通位置，讓您輕鬆抵達又一宿",
    hotelName: "又一宿",
    hotelAddress: "台東市新生路155號",

    // 交通方式
    trainStation: "火車站",
    trainDesc1: "台東火車站 - 步行約5分鐘",
    trainDesc2: "台東新站 - 計程車約10分鐘",
    airportTransport: "機場交通",
    airportDesc1: "台東豐年機場 - 計程車約20分鐘",
    airportDesc2: "機場接駁服務 - 提前預約",
    busTransport: "公車",
    busDesc1: "台東轉運站：8101、8102、8109、8110",
    busDesc2: "中華路站：市區公車、觀光巴士",
    parkingInfo: "停車資訊",
    parkingDesc1: "館內提供24小時停車場 - 每日NT$300",
    parkingDesc2: "周邊收費停車格 - 每小時NT$30",

    // 飯店環境區域
    hotelEnvironmentTitle: "飯店環境介紹",
    allProjects: "全部項目",
    roomsCategory: "客房",
    lobbyCategory: "大廳",
    businessCategory: "商務",
    hotelRoomEnvironmentTitle: "又一宿．蛻變中的住宿空間",
    hotelRoomEnvironmentDesc:
      "在整修過渡期間，我們誠實地為您準備簡單溫暖的住宿空間。這裡可能不完美，但每個角落都充滿真誠與溫度。",
    viewProject: "查看項目",

    // 專業服務區域
    professionalServicesTitle: "我們的服務",
    viewAll: "查看全部",
    roomServiceTitle: "真誠服務",
    roomServiceDesc:
      "我們用真誠的心對待每一位旅人，在這個蛻變的過程中，盡力提供溫暖的服務與關懷。",
    diningServiceTitle: "在地美食指引",
    diningServiceDesc:
      "我們走極簡派，不供應早餐，但會真心推薦台東在地的美食殿堂，讓您品嚐最道地的台東味道。",
    conciergeServiceTitle: "舒適客房",
    conciergeServiceDesc:
      "簡單乾淨的住宿空間，基本設施一應俱全。在我們整修期間，可能不完美，但每個角落都充滿誠意。",
    businessServiceTitle: "基本設施",
    businessServiceDesc:
      "提供住宿所需的基本設施與服務，在這個過渡期間，我們會盡力滿足您的基本需求。",

    // 統計數據
    satisfiedGuests: "迎接過的旅人",
    serviceAwards: "蛻變的日子",
    professionalRooms: "簡單客房",
    yearsExperience: "新的開始",

    // Hero Slider
    heroSliderTitle: "又一宿．正在蛻變的旅店",
    heroSliderDesc:
      "在台東山海之間，一間不完美卻真誠的旅店正在蛻變。歡迎來到《又一宿》，成為我們轉變過程的見證人。",
    heroSliderButton: "了解更多",

    // 關於我們頁面
    aboutPageTitle: "關於又一宿",
    aboutPageSubtitle:
      "致力於為每位住客創造舒適溫馨的住宿體驗，在細節中展現品質與用心",
    ourStoryTitle: "我們的故事",
    ourStorySubtitle: "始於用心服務",
    storyDescription1:
      "又一宿成立於 2020 年，坐落於台東市中心的黃金地段。我們致力於為每一位旅客提供如家般溫暖的住宿體驗。在這個快節奏的時代，我們相信每個人都需要一個可以安心休憩、重新充電的地方。",
    storyDescription2:
      "我們的設計理念融合了現代簡約與在地文化，每一個細節都經過精心考量。從舒適的寢具到貼心的服務，都體現了我們對品質的堅持與對客人的關懷。「又一宿」不僅代表另一次美好的住宿體驗，更象徵著我們希望為每位客人帶來心靈上的平靜與安寧。",
    establishedYear: "成立年份",
    storyNote: "▷ 在這裡，您可以暫時放下塵世的煩憂，享受純粹的休憩時光",

    // Core Values
    coreValuesTitle: "核心價值",
    coreValuesSubtitle: "這些價值觀指引著我們的每一個決策與行動",

    integrityTitle: "誠信",
    integrityDesc: "以誠待客，信守承諾，建立長久的信任關係",

    professionalismTitle: "專業",
    professionalismDesc: "持續提升服務水準，追求卓越的專業表現",

    innovationTitle: "創新",
    innovationDesc: "不斷改進服務流程，創造獨特的住宿體驗",

    careTitle: "關懷",
    careDesc: "用心關注每位客人的需求，提供溫馨的服務",

    // Leadership Team
    leadershipTeamTitle: "領導團隊",
    leadershipTeamSubtitle: "擁有豐富經驗的專業團隊，為您提供最優質的服務",

    founderCEO: "創辦人暨執行長",
    founderName: "張志豪",
    founderDesc:
      "擁有 15 年飯店業經驗，曾任職於國際五星級飯店集團。致力於將國際標準的服務品質帶入台東，創造獨具特色的住宿體驗。",
    businessDegree: "企管碩士",

    generalManager: "總經理",
    managerName: "林雅芳",
    generalManagerDesc:
      "資深飯店管理專家，專精於客戶服務與營運管理。負責整體營運策略制定與執行，確保服務品質持續提升。",
    hospitalityDegree: "觀光管理",

    operationsDirector: "營運總監",
    directorName: "陳建明",
    operationsDirectorDesc:
      "擁有豐富的飯店營運經驗，專長於流程優化與品質管控。致力於建立高效率的營運體系，提升客人滿意度。",
    operationsDegree: "營運管理",

    yearsExp: "年經驗",
    yearsOfService: "年專業服務",

    servicePhilosophyTitle: "我們的服務理念",
    servicePhilosophySubtitle:
      "以專業態度與溫馨服務，為每位住客打造難忘的住宿體驗",
    heartfulServiceTitle: "用心服務",
    heartfulServiceDesc:
      "以真誠的心對待每一位客人，提供超越期待的貼心服務，讓住宿成為美好回憶。",
    qualityLifeTitle: "品質生活",
    qualityLifeDesc:
      "追求生活品質的提升，打造舒適優雅的住宿環境，注重每一個細節的完美呈現。",
    localCultureTitle: "在地文化",
    localCultureDesc:
      "融合台東在地文化與現代設計，創造獨特的住宿體驗，讓旅客感受在地風情。",
    safetyAssuranceTitle: "安心保障",
    safetyAssuranceDesc:
      "提供安全舒適的住宿環境，24小時安全監控與服務，讓每位住客都能安心休憩。",

    professionalTeamTitle: "專業團隊",
    learnMore: "了解更多",
    hotelManager: "飯店經理",
    managerName: "陳志明",
    managerDesc:
      "20年飯店管理經驗，致力於提升服務品質，確保每位住客都能享受完美的住宿體驗。",
    serviceManager: "客服經理",
    serviceManagerName: "林美惠",
    serviceManagerDesc:
      "專業的客戶服務背景，負責協調各部門合作，確保住客需求得到及時且完善的回應。",
    operationsManager: "營運主管",
    operationsManagerName: "王建國",
    operationsManagerDesc:
      "豐富的飯店營運經驗，負責日常營運管理與品質控制，持續提升服務標準。",
    viewProfile: "了解更多",

    ctaTitle: "準備開始您的又一宿體驗嗎？",
    ctaDescription: "我們期待為您提供難忘的住宿體驗，讓每一刻都成為美好回憶",

    // New CTA for Services Page
    newCtaTitle: "準備開始您的又一宿體驗嗎？",
    newCtaDescription: "我們期待為您提供難忘的住宿體驗，讓每一刻都成為美好回憶",
    bookNowAction: "立即訂房",
    contactUs: "聯絡我們",

    // 客房頁面
    roomsPageTitle: "客房介紹",
    roomsPageSubtitle: "精心設計的舒適空間，滿足您的每一個需求",
    selectedRoomTypes: "精選房型",
    selectedRoomTypesSubtitle:
      "每間客房都經過精心設計，融合舒適與美學，為您提供難忘的住宿體驗",

    // 豪華雙人房
    popularChoice: "熱門推薦",
    deluxeTwinRoom: "豪華雙人房",
    deluxeTwinRoomDesc:
      "寬敞舒適的雙人房，配備現代化設施與精緻裝潢，為您提供完美的住宿體驗。每個細節都經過精心設計，讓您感受如家般的溫馨。",
    perNightPrice: "每晚",
    bookNowButton: "立即預訂",

    // 房間設施
    freeWifi: "免費 Wi-Fi",
    privateBathroom: "獨立衛浴",
    airConditioning: "空調系統",
    miniBar: "迷你吧台",
    twoLargeBeds: "兩張大床",
    bathtubFacility: "浴缸設施",
    childrenAmenities: "兒童備品",
    livingSpace: "客廳空間",
    balconyView: "景觀陽台",
    privateSofa: "專屬沙發",
    butlerService: "管家服務",
    premiumAmenities: "高級備品",

    // 家庭房
    familyChoice: "家庭首選",
    luxuryFamilyRoom: "豪華家庭房",
    luxuryFamilyRoomDesc:
      "專為家庭設計的寬敞客房，提供舒適的住宿環境與完善的家庭設施。溫馨的空間設計讓全家人都能享受愉快的住宿時光。",

    // 景觀套房
    premiumLuxury: "頂級享受",
    scenicSuite: "景觀套房",
    scenicSuiteDesc:
      "頂級套房享有絕佳城市景觀，配備奢華設施與專屬服務，帶給您無與倫比的住宿體驗。每一個細節都彰顯著品味與優雅。",

    // 客房設施區域
    roomFacilitiesTitle: "服務特色",
    roomFacilitiesSubtitle:
      "我們用真誠的心意與親切的服務，為每一位住客創造溫暖如家的住宿體驗",
    warmServiceTitle: "溫暖服務",
    warmServiceDesc: "如家人般的親切關懷，用真誠的心意為您提供貼心服務",
    personalCareTitle: "用心照顧",
    personalCareDesc: "細心關注每一位住客的需求，提供個人化的專屬服務",
    sincereHospitalityTitle: "真誠待客",
    sincereHospitalityDesc: "以最真摯的心意迎接每一位住客，創造難忘的住宿回憶",

    // 設施服務頁面
    servicesPageTitle: "設施服務",
    servicesPageSubtitle: "完善的設施與專業的服務，讓您的住宿體驗更加完美",
    ourServicesTitle: "我們的服務",
    ourServicesSubtitle: "提供全方位的優質服務，滿足您的每一個需求",

    // 健身休閒設施
    fitnessRecreationTitle: "健身休閒設施",
    fitnessRecreationSubtitle: "現代化的健身與休閒設施，讓您保持活力",
    fitnessCenter: "健身中心",
    fitnessCenterDesc: "配備先進健身器材的24小時健身中心，讓您隨時保持最佳狀態",
    swimmingPool: "游泳池",
    swimmingPoolDesc: "寬敞的室外恆溫游泳池，享受悠閒的游泳時光",
    spaWellness: "SPA水療",
    spaWellnessDesc: "專業的SPA水療服務，舒緩您旅途的疲憊",
    recreationRoom: "休閒室",
    recreationRoomDesc: "多功能休閒空間，提供桌遊、閱讀等多元娛樂",

    // 商務設施詳細
    businessFacilitiesDetail: "商務設施",
    businessFacilitiesDetailSubtitle: "完善的商務環境，提升您的工作效率",
    meetingRooms: "會議室",
    meetingRoomsDesc: "多種規格的會議室，配備最新的視聽設備，滿足不同商務需求",
    businessCenter: "商務中心",
    businessCenterDesc: "24小時開放的商務中心，提供列印、傳真、複印等服務",
    highSpeedInternet: "高速網路",
    highSpeedInternetDesc: "全館覆蓋的高速Wi-Fi，確保您的網路需求",

    // 餐飲服務詳細
    diningServicesDetail: "餐飲服務",
    diningServicesDetailSubtitle: "精緻美食與貼心服務，滿足您的味蕾需求",
    restaurant: "主餐廳",
    restaurantDesc: "提供精緻中西式料理，融合在地食材與國際烹飪技法",
    breakfastService: "早餐服務",
    breakfastServiceDesc: "豐富的自助式早餐，新鮮食材與多樣選擇",
    roomServiceDetail: "客房餐飲",
    roomServiceDetailDesc: "24小時客房餐飲服務，在房間內享受美味餐點",
    lobbyBar: "大廳酒吧",
    lobbyBarDesc: "輕鬆舒適的酒吧環境，提供精選飲品與輕食",

    // 其他服務
    additionalServices: "其他服務",
    additionalServicesSubtitle: "貼心的額外服務，讓您的住宿更加便利",
    laundryService: "洗衣服務",
    laundryServiceDesc: "專業的洗衣與熨燙服務，讓您的衣物保持整潔",
    airportShuttle: "機場接送",
    airportShuttleDesc: "提供機場接送服務，讓您的旅程更加順暢",
    tourGuide: "旅遊諮詢",
    tourGuideDesc: "專業的旅遊諮詢服務，為您規劃完美的台東之旅",
    valetParking: "代客停車",
    valetParkingDesc: "專業的代客停車服務，讓您無後顧之憂",

    // 服務時間
    serviceHours: "服務時間",
    available24Hours: "24小時提供",
    businessHours: "營業時間",
    contactForDetails: "詳情請洽櫃台",

    // Contact Page
    contactPageTitle: "聯絡我們",
    contactPageSubtitle: "歡迎隨時與我們聯繫，為您提供最佳服務",
    contactInfoTitle: "聯絡資訊",
    contactInfoDesc:
      "我們期待為您提供最優質的服務體驗。無論是預訂諮詢、特殊需求或任何疑問，我們的專業團隊都樂意為您協助。",
    addressTitle: "地址",
    addressText: "台東縣台東市文化街72號",
    addressNote: "近台東火車站，步行5分鐘",
    phoneTitle: "電話",
    phoneNumber: "089-348430",
    phoneNote: "24小時服務專線",
    emailTitle: "電子郵件",
    emailAddress: "urlodge20250701@gmail.com",
    emailNote: "一般詢問與預訂",
    serviceHoursTitle: "服務時間",
    checkInOut: "Check-in: 15:00 | Check-out: 11:00",
    frontDesk24h: "前台服務時間：08:00-23:00",
    locationMapTitle: "位置地圖",
    contactFormTitle: "聯絡表單",
    nameLabel: "姓名",
    namePlaceholder: "請輸入您的姓名",
    phoneLabel: "電話",
    phonePlaceholder: "請輸入聯絡電話",
    emailLabel: "電子郵件",
    emailPlaceholder: "請輸入電子郵件地址",
    inquiryTypeLabel: "詢問類型",
    generalInquiry: "一般詢問",
    roomBooking: "房間預訂",
    eventVenue: "活動場地",
    otherServices: "其他服務",
    messageLabel: "訊息內容",
    messagePlaceholder: "請詳細描述您的需求...",
    sendMessage: "送出訊息",
    quickBookingTitle: "立即預訂",
    quickBookingDesc: "想要立即預訂房間嗎？我們提供多種便利的聯絡方式",
    phoneBooking: "電話預訂",
    phoneBookingDesc: "直撥服務專線，專人為您服務",
    callNow: "立即致電",
    onlineChat: "線上客服",
    onlineChatDesc: "即時線上諮詢，快速回應您的需求",
    startChat: "開始對話",
    emailBooking: "Email 預訂",
    emailBookingDesc: "詳細需求說明，完整預訂服務",
    sendEmail: "發送郵件",
    transportInfoTitle: "交通資訊",
    publicTransport: "大眾運輸",
    trainStation: "台東火車站 - 步行5分鐘",
    busStop: "公車站牌「中華路口」- 步行2分鐘",
    airportBus: "機場巴士 - 約20分鐘",
    selfDriving: "自行開車",
    highway: "台9線往台東市區 - 5分鐘",
    parking: "專屬停車場 - 24小時開放",
    valetService: "代客泊車服務 - 需事先預約",

    // Footer
    footerBrandName: "又一宿",
    footerDescription:
      "在台東山海之間，一間不完美卻真誠的旅店正在蛻變。我們不完美，卻誠實地準備好迎接每一位旅人。這裡不豪華卻溫暖，在蛻變的過程中，與您分享短暫卻真摯的相遇時光。",
    footerAddress: "台東縣台東市中華路一段348號",
    quickLinks: "快速連結",
    serviceItems: "我們的服務",
    roomServiceLink: "真誠服務",
    diningServiceLink: "在地美食指引",
    conciergeServiceLink: "舒適客房",
    businessServiceLink: "基本設施",
    copyright: "版權所有",
    privacyPolicy: "隱私政策",
    termsOfService: "服務條款",
    cookiePolicy: "Cookie政策",

    // 周遭景點頁面
    attractionsPageTitle: "趣遊台東",
    attractionsPageSubtitle:
      "探索台東的自然美景與人文風情，讓每一趟旅程都成為難忘的回憶",
    travelInfoTitle: "旅遊資訊",
    travelInfoSubtitle:
      "從市區漫遊到山海線探索，台東的每個角落都有著獨特的魅力等待您發現",
    travelTipsTitle: "旅遊小提示",

    // 景點分類
    allAttractions: "全部景點",
    downtownTour: "台東漫遊．市區",
    mountainTour: "台東漫遊．山線",
    coastTour: "台東漫遊．海線",
    southTour: "台東漫遊．南迴線",

    // 分類名稱（短版）
    downtownCategory: "市區",
    mountainCategory: "山線",
    coastCategory: "海線",
    southCategory: "南迴線",
    otherCategory: "其他",

    // 景點名稱
    taitungForestPark: "臺東森林公園",
    taitungLandmark: "臺東國際地標",
    duoliangStation: "多良火車站",
    guanshanRiceSchool: "關山米國學校",
    goldenNeedleMountain: "金針山休閒農業區",
    chishangBrownBoulevard: "池上伯朗大道",
    sanxiantai: "三仙台",
    zhipenHotSprings: "知本溫泉",

    // 景點描述
    taitungForestParkDesc:
      "開闊的臺東森林公園距離臺東市僅幾分鐘車程，沿著馬亨亨大道即可到達，是一處令人流連忘返的公園，沒有過多的人工造景，觸目所及盡是讓人心情舒暢的自在氛圍。",
    taitungLandmarkDesc:
      "國際地標靜靜佇立海岸，白天，它迎接清晨的第一道曙光，夜晚，暈黃燈光照耀，輝煌燦爛，彷彿期盼著世界的眼光。",
    duoliangStationDesc:
      "被譽為「全臺灣最美車站」，除了來欣賞一覽無遺的太平洋海景，也千萬別錯過附近的美食區，當地部落特色美食，搭配獨特的鐵道海景視野。",
    guanshanRiceSchoolDesc:
      "來米國學校參觀和體驗，不只為知識充電，美麗的花海更為您的旅程增添一抹鮮艷。",
    goldenNeedleMountainDesc:
      "位於太麻里的金針山是座名聞遐邇的賞花名勝，除了金針花季之外，四季造訪皆能觀賞到滿山遍野的美景。",
    chishangBrownBoulevardDesc:
      "臺東縣池上鄉的一條田園小路，被譽為是一條「翠綠的天堂路」。兩旁無電線桿，加上筆直的道路，在此可觀賞一望無際的稻田風光。",
    sanxiantaiDesc:
      "三仙台是由離岸小島和珊瑚礁海岸構成，島上奇石分布，其中有三塊巨大的岩石，傳說呂洞賓、李鐵拐、何仙姑曾登臨此島。",
    zhipenHotSpringsDesc:
      "知本溫泉是台東最知名的溫泉區，泉質優良，周圍環境清幽，是放鬆身心的絕佳去處。",

    // 距離資訊
    distance5min: "距離酒店 5分鐘車程",
    distance10min: "距離酒店 10分鐘車程",
    distance25min: "距離酒店 25分鐘車程",
    distance45min: "距離酒店 45分鐘車程",
    distance50min: "距離酒店 50分鐘車程",
    distance60min: "距離酒店 60分鐘車程",
    distance70min: "距離酒店 70分鐘車程",
    distance90min: "距離酒店 90分鐘車程",

    // 旅遊小貼士
    bestTimeTitle: "最佳遊覽時間",
    bestTimeDesc:
      "春秋兩季氣候宜人，夏季可欣賞金針花海，冬季則有溫暖的陽光陪伴",
    transportTipsTitle: "交通建議",
    transportTipsDesc:
      "建議租車自駕或報名在地旅遊團，部分景點可搭乘大眾運輸工具前往",
    localExperienceTitle: "在地體驗",
    localExperienceDesc:
      "品嚐原住民特色料理，體驗部落文化，感受台東獨有的人文風情",

    // 首頁周遭景點
    surroundingAttractionsTitle: "周遭景點",
    allAttractions: "公園景點",
    natureAttractions: "自然景觀",
    cultureAttractions: "文化古蹟",
    foodAttractions: "美食小吃",
    viewDetails: "查看詳情",

    // 景點資訊
    taitungForestPark: "台東森林公園",
    taitungForestParkDesc:
      "擁有豐富的自然生態，是台東市區內最大的森林公園，提供完善的步道系統和休憩設施。",
    forestParkDistance: "距離飯店 2.5km",
    forestParkDuration: "步行 30分鐘",

    zhipenHotSprings: "知本溫泉",
    zhipenHotSpringsDesc:
      "台東著名的溫泉勝地，擁有優質的碳酸氫鈉泉，周圍環境清幽，是放鬆身心的絕佳去處。",
    hotSpringsDistance: "距離飯店 15km",
    hotSpringsDuration: "開車 20分鐘",

    taitungRailwayArt: "台東鐵道藝術村",
    taitungRailwayArtDesc:
      "由舊台東火車站改建而成的藝術空間，結合歷史建築與現代藝術，展現台東獨特的文化魅力。",
    railwayArtDistance: "距離飯店 1.2km",
    railwayArtDuration: "步行 15分鐘",

    taitungNightMarket: "台東觀光夜市",
    taitungNightMarketDesc:
      "匯集台東在地美食的熱鬧夜市，從原住民料理到海鮮小吃，讓您品嚐最道地的台東風味。",
    nightMarketDistance: "距離飯店 800m",
    nightMarketDuration: "步行 10分鐘",

    // 聯絡頁面額外翻譯
    convenientLocationText: "便利的交通位置，讓您輕鬆抵達又一宿",

    // 關於我們頁面自定義翻譯
    aboutHeroTitle: "不完美，但真誠",
    aboutHeroSubtitle: "在又一宿，我們相信真實的體驗勝過完美的表象",
    aboutStoryTitle: "我們的故事",
    aboutStorySubtitle: "從不完美開始",
    aboutStoryDesc1:
      "又一宿不是一家完美的旅館，但我們真誠地對待每一位客人。我們相信，真實的體驗來自於人與人之間的連結，而不是完美的設施或服務。",
    aboutStoryDesc2:
      "在這裡，我們不追求表面的完美，而是專注於創造一個讓客人感到自在、放鬆的空間。我們相信，正是這些不完美，讓又一宿變得獨特而真實。",
    aboutValuesTitle: "我們的價值觀",
    aboutValuesSubtitle: "在又一宿，我們相信真實的體驗勝過完美的表象",
    sincerityTitle: "真誠",
    sincerityDesc:
      "我們相信，真誠的服務勝過完美的表象。我們不追求表面的完美，而是專注於創造一個讓客人感到自在、放鬆的空間。",
    comfortTitle: "自在",
    comfortDesc:
      "我們希望每一位客人都能在又一宿找到屬於自己的自在。我們不追求完美的服務，而是專注於創造一個讓客人感到放鬆、舒適的環境。",
    connectionTitle: "連結",
    connectionDesc:
      "我們相信，真實的體驗來自於人與人之間的連結。我們不追求完美的設施，而是專注於創造一個讓客人與我們、與其他客人產生連結的空間。",
    growthTitle: "成長",
    growthDesc:
      "我們相信，每一次的不完美都是一次成長的機會。我們不追求完美的結果，而是專注於在每一次的服務中學習、改進，為客人創造更好的體驗。",
    hotelExteriorAlt: "又一宿飯店外觀",
    aboutPageMetaTitle: "又一宿 - 正在蛻變的旅宿",
    aboutPageMetaDesc:
      "了解又一宿的品牌故事、企業使命、核心價值與領導團隊，致力於為每位住客創造舒適溫馨的住宿體驗",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    rooms: "Rooms",
    services: "Attractions",
    contact: "Contact",
    bookNow: "Book Now",
    contactNow: "Contact Now",

    // Homepage About Section
    aboutSectionTitle1: "Between mountains and sea in Taitung",
    aboutSectionTitle2: "Another Night · YoShang's Temporary Inn",
    aboutDescription:
      "We're not perfect, but we honestly prepare to welcome every traveler. 'Another Night' is inspired by the poem 'beyond the dark willows and bright flowers lies another village.' This is YoShang team's little adventure. We are an 'inn in transformation,' like a young graduate still in casual clothes, yet ready to face the world. Here is imperfect yet sincere; not luxurious yet warm.",
    service24Hours: "Sincere Service",
    refinedRooms: "Comfortable Rooms",
    diningService: "Local Food Guide",
    businessFacilities: "Basic Facilities",
    professionalTeamNote: "▷ Welcome to witness our transformation journey",

    // Work Exchange Section
    workExchangeTitle: "Work Exchange Recruitment",
    workExchangeSubtitle: "Create wonderful accommodation experiences with us",
    workExchangeDescription:
      "We are looking for travel-loving partners who are willing to share to join our team. Work exchange is not just work, but an unforgettable life experience. Here, you will experience the beauty of Taitung's mountains and sea, feel the local culture, while contributing your passion and skills to our accommodation.",
    workExchangeFeatures: "Work Content",
    workExchangeFeaturesDesc:
      "Front desk reception, room cleaning, environment maintenance",
    workExchangeBenefits: "Exchange Benefits",
    workExchangeBenefitsDesc:
      "Free accommodation, local experience, cultural exchange",
    workExchangeDuration: "Work Hours",
    workExchangeDurationDesc: "Negotiable",
    workExchangeContact: "If interested, please fill out the form",
    workExchangeEmail: "urlodge20250701@gmail.com",
    workExchangeRecruiting: "Recruiting",
    workExchangeCulturalExchange: "Cultural Exchange",
    workExchangeOpenForApplication: "Open for Application",
    workExchangeJoinNow: "Join Now",
    workExchangeBottomText:
      "Looking forward to creating wonderful accommodation experiences with you",

    // Room Types Section
    roomTypesTitle: "Room Spaces",
    roomTypesSubtitle:
      "Simple and warm accommodation spaces, providing sincere rest experience during our renovation and transformation",

    // Room Cards
    popularRecommendation: "Classic Choice",
    standardRoom: "Standard Room",
    standardRoomDesc:
      "Simple and comfortable room space with basic facilities. We're in transformation, might not be perfect, but every detail is filled with sincerity.",
    upgradeRecommendation: "Comfort Recommended",
    deluxeRoom: "Comfortable Room",
    deluxeRoomDesc:
      "More spacious rest space, providing warm accommodation experience during transition period. Authentic and unpretentious accommodation environment.",
    topEnjoyment: "Warm Experience",
    refinedSuite: "Cozy Suite",
    refinedSuiteDesc:
      "Independent living space, feel the most genuine accommodation warmth and human touch in this transforming inn.",
    guests: " guests",
    perNight: "/night",
    bookNowAction: "Book Now",

    // Transportation Section
    transportationTitle: "Transportation Information",
    transportationSubtitle:
      "Convenient transportation location for easy access to Another Night",
    hotelName: "Taitung Dongxin Hotel",
    hotelAddress: "No. 155, Xinsheng Road, Taitung City",

    // Transportation Methods
    trainStation: "Train Station",
    trainDesc1: "Taitung Railway Station - 5 minutes walk",
    trainDesc2: "Taitung New Station - 10 minutes by taxi",
    airportTransport: "Airport Transport",
    airportDesc1: "Taitung Fengnian Airport - 20 minutes by taxi",
    airportDesc2: "Airport shuttle service - advance booking required",
    busTransport: "Bus",
    busDesc1: "Taitung Bus Terminal: 8101, 8102, 8109, 8110",
    busDesc2: "Zhonghua Road Station: City Bus, Sightseeing Bus",
    parkingInfo: "Parking Information",
    parkingDesc1: "24-hour parking available in hotel - NT$300 per day",
    parkingDesc2: "Surrounding paid parking spaces - NT$30 per hour",

    // Hotel Environment Section
    hotelEnvironmentTitle: "Hotel Environment Introduction",
    allProjects: "All Projects",
    roomsCategory: "Rooms",
    lobbyCategory: "Lobby",
    businessCategory: "Business",
    hotelRoomEnvironmentTitle:
      "Another Night · Accommodation Space in Transformation",
    hotelRoomEnvironmentDesc:
      "During renovation transition, we honestly prepare simple and warm accommodation spaces for you. It might not be perfect here, but every corner is filled with sincerity and warmth.",
    viewProject: "View Project",

    // Professional Services Section
    professionalServicesTitle: "Our Services",
    viewAll: "View All",
    roomServiceTitle: "Sincere Service",
    roomServiceDesc:
      "We treat every traveler with sincere heart, doing our best to provide warm service and care during this transformation process.",
    diningServiceTitle: "Local Food Guide",
    diningServiceDesc:
      "We go minimalist - no breakfast service, but we'll sincerely recommend Taitung's local food temples for you to taste the most authentic Taitung flavors.",
    conciergeServiceTitle: "Comfortable Rooms",
    conciergeServiceDesc:
      "Simple and clean accommodation space with all basic facilities. During renovation, it might not be perfect, but every corner is filled with sincerity.",
    businessServiceTitle: "Basic Facilities",
    businessServiceDesc:
      "Providing basic facilities and services needed for accommodation. During this transition period, we'll do our best to meet your basic needs.",

    // Statistics
    satisfiedGuests: "Travelers Welcomed",
    serviceAwards: "Days of Transformation",
    professionalRooms: "Simple Rooms",
    yearsExperience: "New Beginning",

    // Hero Slider
    heroSliderTitle: "Another Night · An Inn in Transformation",
    heroSliderDesc:
      "Between mountains and sea in Taitung, an imperfect yet sincere inn is transforming. Welcome to Another Night, become a witness to our transformation journey.",
    heroSliderButton: "Learn More",

    // About Us Page
    aboutPageTitle: "About Another Night",
    aboutPageSubtitle:
      "Dedicated to creating comfortable and warm accommodation experiences for every guest, showing quality and care in details",
    ourStoryTitle: "Our Story",
    ourStorySubtitle: "Begins with Heartfelt Service",
    storyDescription1:
      "Another Night was established in 2020, located in the prime area of downtown Taitung. We are committed to providing every traveler with a home-like warm accommodation experience. In this fast-paced era, we believe everyone needs a place to rest peacefully and recharge.",
    storyDescription2:
      "Our design philosophy integrates modern minimalism with local culture, with every detail carefully considered. From comfortable bedding to thoughtful service, everything reflects our commitment to quality and care for guests. 'Another Night' not only represents another wonderful accommodation experience, but also symbolizes our hope to bring peace and tranquility to every guest's soul.",
    establishedYear: "Established Year",
    storyNote:
      "▷ Here, you can temporarily put aside worldly worries and enjoy pure rest time",

    // Core Values
    coreValuesTitle: "Core Values",
    coreValuesSubtitle: "These values guide our every decision and action",

    integrityTitle: "Integrity",
    integrityDesc:
      "Treat guests with sincerity, keep promises, and build lasting trust relationships",

    professionalismTitle: "Professionalism",
    professionalismDesc:
      "Continuously improve service standards and pursue excellent professional performance",

    innovationTitle: "Innovation",
    innovationDesc:
      "Continuously improve service processes and create unique accommodation experiences",

    careTitle: "Care",
    careDesc: "Pay attention to every guest's needs and provide warm service",

    // Leadership Team
    leadershipTeamTitle: "Leadership Team",
    leadershipTeamSubtitle:
      "Experienced professional team providing you with the highest quality service",

    founderCEO: "Founder & CEO",
    founderName: "Zhang Zhihao",
    founderDesc:
      "With 15 years of hotel industry experience, formerly worked at international five-star hotel groups. Committed to bringing international standard service quality to Taitung and creating unique accommodation experiences.",
    businessDegree: "MBA",

    generalManager: "General Manager",
    managerName: "Lin Yafang",
    generalManagerDesc:
      "Senior hotel management expert specializing in customer service and operations management. Responsible for overall operational strategy formulation and execution, ensuring continuous improvement in service quality.",
    hospitalityDegree: "Tourism Management",

    operationsDirector: "Operations Director",
    directorName: "Chen Jianming",
    operationsDirectorDesc:
      "Rich hotel operations experience, specializing in process optimization and quality control. Committed to building efficient operational systems and improving customer satisfaction.",
    operationsDegree: "Operations Management",

    yearsExp: "Years Experience",
    yearsOfService: "Years of Professional Service",

    servicePhilosophyTitle: "Our Service Philosophy",
    servicePhilosophySubtitle:
      "With professional attitude and warm service, creating unforgettable accommodation experiences for every guest",
    heartfulServiceTitle: "Heartfelt Service",
    heartfulServiceDesc:
      "Treat every guest with sincere heart, providing caring service that exceeds expectations, making accommodation a beautiful memory.",
    qualityLifeTitle: "Quality Life",
    qualityLifeDesc:
      "Pursue the improvement of life quality, create comfortable and elegant accommodation environment, paying attention to perfect presentation of every detail.",
    localCultureTitle: "Local Culture",
    localCultureDesc:
      "Integrating Taitung local culture with modern design, creating unique accommodation experiences and letting travelers feel local charm.",
    safetyAssuranceTitle: "Safety Assurance",
    safetyAssuranceDesc:
      "Provide safe and comfortable accommodation environment, 24-hour security monitoring and service, letting every guest rest peacefully.",

    professionalTeamTitle: "Professional Team",
    learnMore: "Learn More",
    hotelManager: "Hotel Manager",
    managerName: "Chen Zhi-Ming",
    managerDesc:
      "20 years of hotel management experience, committed to improving service quality and ensuring every guest enjoys perfect accommodation experience.",
    serviceManager: "Service Manager",
    serviceManagerName: "Lin Mei-Hui",
    serviceManagerDesc:
      "Professional customer service background, responsible for coordinating departmental cooperation and ensuring guest needs receive timely and comprehensive response.",
    operationsManager: "Operations Manager",
    operationsManagerName: "Wang Jian-Guo",
    operationsManagerDesc:
      "Rich hotel operation experience, responsible for daily operation management and quality control, continuously improving service standards.",
    viewProfile: "Learn More",

    ctaTitle: "Ready to Start Your Another Night Experience?",
    ctaDescription:
      "We look forward to providing you with an unforgettable accommodation experience, making every moment a beautiful memory",

    // New CTA for Services Page
    newCtaTitle: "Ready to Start Your Another Night Experience?",
    newCtaDescription:
      "We look forward to providing you with an unforgettable accommodation experience, making every moment a beautiful memory",
    bookNowAction: "Book Now",
    contactUs: "Contact Us",

    // Rooms Page
    roomsPageTitle: "Room Introduction",
    roomsPageSubtitle:
      "Thoughtfully designed comfortable spaces to meet your every need",
    selectedRoomTypes: "Selected Room Types",
    selectedRoomTypesSubtitle:
      "Every room is carefully designed, blending comfort and aesthetics to provide you with an unforgettable accommodation experience",

    // Deluxe Twin Room
    popularChoice: "Popular Choice",
    deluxeTwinRoom: "Deluxe Twin Room",
    deluxeTwinRoomDesc:
      "Spacious and comfortable twin room equipped with modern facilities and exquisite decoration, providing you with the perfect accommodation experience. Every detail is carefully designed to make you feel the warmth of home.",
    perNightPrice: "per night",
    bookNowButton: "Book Now",

    // Room Amenities
    freeWifi: "Free Wi-Fi",
    privateBathroom: "Private Bathroom",
    airConditioning: "Air Conditioning",
    miniBar: "Mini Bar",
    twoLargeBeds: "Two Large Beds",
    bathtubFacility: "Bathtub Facility",
    childrenAmenities: "Children Amenities",
    livingSpace: "Living Space",
    balconyView: "Balcony View",
    privateSofa: "Private Sofa",
    butlerService: "Butler Service",
    premiumAmenities: "Premium Amenities",

    // Family Room
    familyChoice: "Family Choice",
    luxuryFamilyRoom: "Luxury Family Room",
    luxuryFamilyRoomDesc:
      "Spacious room specially designed for families, providing comfortable accommodation environment and complete family facilities. The warm space design allows the whole family to enjoy a pleasant stay.",

    // Scenic Suite
    premiumLuxury: "Premium Luxury",
    scenicSuite: "Scenic Suite",
    scenicSuiteDesc:
      "Premium suite with excellent city views, equipped with luxurious facilities and exclusive services, bringing you an unparalleled accommodation experience. Every detail shows taste and elegance.",

    // Room Facilities Section
    roomFacilitiesTitle: "Service Features",
    roomFacilitiesSubtitle:
      "We create a warm, home-like accommodation experience for every guest with sincere care and friendly service",
    warmServiceTitle: "Warm Service",
    warmServiceDesc:
      "Family-like caring attention, providing thoughtful service with sincere heart",
    personalCareTitle: "Personal Care",
    personalCareDesc:
      "Carefully attending to each guest's needs, providing personalized exclusive service",
    sincereHospitalityTitle: "Sincere Hospitality",
    sincereHospitalityDesc:
      "Welcoming every guest with the most genuine heart, creating unforgettable accommodation memories",

    // Services Page
    servicesPageTitle: "Facilities & Services",
    servicesPageSubtitle:
      "Comprehensive facilities and professional services to make your stay experience more perfect",
    ourServicesTitle: "Our Services",
    ourServicesSubtitle:
      "Providing comprehensive quality services to meet your every need",

    // Fitness & Recreation Facilities
    fitnessRecreationTitle: "Fitness & Recreation Facilities",
    fitnessRecreationSubtitle:
      "Modern fitness and recreational facilities to keep you energized",
    fitnessCenter: "Fitness Center",
    fitnessCenterDesc:
      "24-hour fitness center equipped with advanced fitness equipment to keep you in top condition at all times",
    swimmingPool: "Swimming Pool",
    swimmingPoolDesc:
      "Spacious outdoor heated swimming pool for leisurely swimming",
    spaWellness: "SPA & Wellness",
    spaWellnessDesc:
      "Professional SPA wellness services to relieve your travel fatigue",
    recreationRoom: "Recreation Room",
    recreationRoomDesc:
      "Multi-functional leisure space providing board games, reading and various entertainment",

    // Business Facilities Details
    businessFacilitiesDetail: "Business Facilities",
    businessFacilitiesDetailSubtitle:
      "Complete business environment to enhance your work efficiency",
    meetingRooms: "Meeting Rooms",
    meetingRoomsDesc:
      "Various sizes of meeting rooms equipped with latest audio-visual equipment to meet different business needs",
    businessCenter: "Business Center",
    businessCenterDesc:
      "24-hour business center providing printing, fax, copying and other services",
    highSpeedInternet: "High-Speed Internet",
    highSpeedInternetDesc:
      "High-speed Wi-Fi coverage throughout the hotel to ensure your internet needs",

    // Dining Services Details
    diningServicesDetail: "Dining Services",
    diningServicesDetailSubtitle:
      "Exquisite cuisine and thoughtful service to satisfy your taste needs",
    restaurant: "Main Restaurant",
    restaurantDesc:
      "Offering exquisite Chinese and Western cuisine, combining local ingredients with international cooking techniques",
    breakfastService: "Breakfast Service",
    breakfastServiceDesc:
      "Rich buffet breakfast with fresh ingredients and diverse choices",
    roomServiceDetail: "In-Room Dining",
    roomServiceDetailDesc:
      "24-hour in-room dining service, enjoy delicious meals in your room",
    lobbyBar: "Lobby Bar",
    lobbyBarDesc:
      "Relaxed and comfortable bar environment, offering selected beverages and light meals",

    // Additional Services
    additionalServices: "Additional Services",
    additionalServicesSubtitle:
      "Thoughtful additional services to make your stay more convenient",
    laundryService: "Laundry Service",
    laundryServiceDesc:
      "Professional laundry and pressing services to keep your clothes neat",
    airportShuttle: "Airport Shuttle",
    airportShuttleDesc: "Airport shuttle service to make your journey smoother",
    tourGuide: "Travel Consultation",
    tourGuideDesc:
      "Professional travel consultation service to plan your perfect Taitung trip",
    valetParking: "Valet Parking",
    valetParkingDesc:
      "Professional valet parking service for your peace of mind",

    // Service Hours
    serviceHours: "Service Hours",
    available24Hours: "Available 24 Hours",
    businessHours: "Business Hours",
    contactForDetails: "Contact Front Desk for Details",

    // Contact Page
    contactPageTitle: "Contact Us",
    contactPageSubtitle: "Feel free to contact us anytime for the best service",
    contactInfoTitle: "Contact Information",
    contactInfoDesc:
      "We look forward to providing you with the highest quality service experience. Whether it's booking inquiries, special requests, or any questions, our professional team is happy to assist you.",
    addressTitle: "Address",
    addressText: "No. 1, Zhonghua Road Section 1, Taitung City, Taitung County",
    addressNote: "5-minute walk from Taitung Train Station",
    phoneTitle: "Phone",
    phoneNumber: "089-348430",
    phoneNote: "24-hour service hotline",
    emailTitle: "Email",
    emailAddress: "urlodge20250701@gmail.com",
    emailNote: "General inquiries and reservations",
    serviceHoursTitle: "Service Hours",
    checkInOut: "Check-in: 15:00 | Check-out: 11:00",
    frontDesk24h: "24-hour front desk service",
    locationMapTitle: "Location Map",
    contactFormTitle: "Contact Form",
    nameLabel: "Name",
    namePlaceholder: "Please enter your name",
    phoneLabel: "Phone",
    phonePlaceholder: "Please enter your phone number",
    emailLabel: "Email",
    emailPlaceholder: "Please enter your email address",
    inquiryTypeLabel: "Inquiry Type",
    generalInquiry: "General Inquiry",
    roomBooking: "Room Booking",
    eventVenue: "Event Venue",
    otherServices: "Other Services",
    messageLabel: "Message",
    messagePlaceholder: "Please describe your needs in detail...",
    sendMessage: "Send Message",
    quickBookingTitle: "Quick Booking",
    quickBookingDesc:
      "Want to book a room immediately? We provide various convenient contact methods",
    phoneBooking: "Phone Booking",
    phoneBookingDesc: "Direct service hotline with dedicated staff",
    callNow: "Call Now",
    onlineChat: "Online Chat",
    onlineChatDesc: "Real-time online consultation with quick response",
    startChat: "Start Chat",
    emailBooking: "Email Booking",
    emailBookingDesc:
      "Detailed requirement description and complete booking service",
    sendEmail: "Send Email",
    transportInfoTitle: "Transportation Information",
    publicTransport: "Public Transportation",
    trainStation: "Taitung Train Station - 5-minute walk",
    busStop: "Bus stop 'Zhonghua Road Junction' - 2-minute walk",
    airportBus: "Airport bus - about 20 minutes",
    selfDriving: "Self-driving",
    highway: "Provincial Highway 9 to Taitung City - 5 minutes",
    parking: "Dedicated parking lot - 24 hours open",
    valetService: "Valet parking service - advance reservation required",

    // Footer
    footerBrandName: "Another Night",
    footerDescription:
      "Between mountains and sea in Taitung, Another Night is an inn in transformation. We're not perfect, but we honestly prepare to welcome every traveler. Here is not luxurious yet warm; during our transformation, we share brief yet sincere encounters with you.",
    footerAddress:
      "No. 348, Sec. 1, Zhonghua Rd., Taitung City, Taitung County 95043, Taiwan",
    quickLinks: "Quick Links",
    serviceItems: "Our Services",
    roomServiceLink: "Sincere Service",
    diningServiceLink: "Local Food Guide",
    conciergeServiceLink: "Comfortable Rooms",
    businessServiceLink: "Basic Facilities",
    copyright: "All Rights Reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",

    // Attractions Page
    attractionsPageTitle: "Explore Taitung",
    attractionsPageSubtitle:
      "Discover Taitung's natural beauty and cultural charm, making every journey an unforgettable memory",
    travelInfoTitle: "Travel Information",
    travelInfoSubtitle:
      "From urban exploration to mountain and coastal routes, every corner of Taitung has unique charm waiting for you to discover",
    travelTipsTitle: "Travel Tips",

    // Attraction Categories
    allAttractions: "All Attractions",
    downtownTour: "Taitung Urban Tour",
    mountainTour: "Taitung Mountain Route",
    coastTour: "Taitung Coastal Route",
    southTour: "Taitung South-Link Route",

    // Category Names (Short)
    downtownCategory: "Urban",
    mountainCategory: "Mountain",
    coastCategory: "Coastal",
    southCategory: "South-Link",
    otherCategory: "Other",

    // Attraction Names
    taitungForestPark: "Taitung Forest Park",
    taitungLandmark: "Taitung International Landmark",
    duoliangStation: "Duoliang Railway Station",
    guanshanRiceSchool: "Guanshan Rice Country School",
    goldenNeedleMountain: "Golden Needle Mountain Recreation Area",
    chishangBrownBoulevard: "Chishang Brown Boulevard",
    sanxiantai: "Sanxiantai",
    zhipenHotSprings: "Zhiben Hot Springs",

    // Attraction Descriptions
    taitungForestParkDesc:
      "The spacious Taitung Forest Park is only a few minutes drive from Taitung City. Accessible via Mahenghen Avenue, it's a captivating park with minimal artificial landscaping, offering a refreshing and relaxing atmosphere wherever you look.",
    taitungLandmarkDesc:
      "The international landmark stands quietly by the coast. During the day, it welcomes the first ray of dawn, and at night, warm yellow lights illuminate it brilliantly, as if anticipating the world's attention.",
    duoliangStationDesc:
      "Known as 'Taiwan's most beautiful railway station,' visitors come to enjoy the panoramic Pacific Ocean views. Don't miss the nearby food area featuring local indigenous cuisine paired with unique railway ocean views.",
    guanshanRiceSchoolDesc:
      "Visit Rice Country School for tours and experiences that not only provide educational enrichment but also feature beautiful flower fields that add vibrant colors to your journey.",
    goldenNeedleMountainDesc:
      "Located in Taimali, Golden Needle Mountain is a renowned flower-viewing destination. Besides the golden needle flower season, visitors can enjoy magnificent mountain views throughout all four seasons.",
    chishangBrownBoulevardDesc:
      "A rural path in Chishang Township, Taitung County, known as the 'Emerald Heaven Road.' With no telephone poles on either side and a straight road, visitors can enjoy endless rice field scenery.",
    sanxiantaiDesc:
      "Sanxiantai consists of offshore islands and coral reef coasts, with unique rock formations scattered across the island. Three massive rocks are said to have been visited by the immortals Lu Dongbin, Li Tieguai, and He Xiangu.",
    zhipenHotSpringsDesc:
      "Zhiben Hot Springs is Taitung's most famous hot spring area, known for its excellent water quality and serene surroundings, making it an ideal place to relax and rejuvenate.",

    // Distance Information
    distance5min: "5-minute drive from hotel",
    distance10min: "10-minute drive from hotel",
    distance25min: "25-minute drive from hotel",
    distance45min: "45-minute drive from hotel",
    distance50min: "50-minute drive from hotel",
    distance60min: "60-minute drive from hotel",
    distance70min: "70-minute drive from hotel",
    distance90min: "90-minute drive from hotel",

    // Travel Tips
    bestTimeTitle: "Best Visiting Time",
    bestTimeDesc:
      "Spring and autumn offer pleasant weather, summer features golden needle flower blooms, and winter provides warm sunshine",
    transportTipsTitle: "Transportation Tips",
    transportTipsDesc:
      "Recommend self-driving or joining local tour groups, some attractions are accessible by public transportation",
    localExperienceTitle: "Local Experience",
    localExperienceDesc:
      "Taste indigenous cuisine, experience tribal culture, and feel Taitung's unique cultural charm",

    // 首頁周遭景點
    surroundingAttractionsTitle: "Surrounding Attractions",
    allAttractions: "All Attractions",
    natureAttractions: "Nature Attractions",
    cultureAttractions: "Cultural Attractions",
    foodAttractions: "Food Attractions",
    viewDetails: "View Details",

    // 景點資訊
    taitungForestPark: "Taitung Forest Park",
    taitungForestParkDesc:
      "Rich natural ecosystem, largest forest park in Taitung City, providing complete trail system and rest facilities.",
    forestParkDistance: "5 minutes drive from hotel",
    forestParkDuration: "30 minutes walk",

    zhipenHotSprings: "Zhiben Hot Springs",
    zhipenHotSpringsDesc:
      "Taitung's famous hot spring destination, with high-quality carbonated sodium spring, serene surroundings, ideal for relaxation.",
    hotSpringsDistance: "15 minutes drive from hotel",
    hotSpringsDuration: "20 minutes drive",

    taitungRailwayArt: "Taitung Railway Art Village",
    taitungRailwayArtDesc:
      "Art space transformed from old Taitung Train Station, combining historical architecture with modern art, showcasing Taitung's unique cultural charm.",
    railwayArtDistance: "1.2 minutes walk from hotel",
    railwayArtDuration: "15 minutes walk",

    taitungNightMarket: "Taitung Night Market",
    taitungNightMarketDesc:
      "Hot night market gathering Taitung local cuisine, from indigenous cuisine to seafood snacks, allowing you to taste the most authentic Taitung flavors.",
    nightMarketDistance: "800 meters walk from hotel",
    nightMarketDuration: "10 minutes walk",

    // 聯絡頁面額外翻譯
    convenientLocationText:
      "Convenient location for easy access to Another Night",

    // 關於我們頁面自定義翻譯
    aboutHeroTitle: "Imperfect, but Sincere",
    aboutHeroSubtitle:
      "At Another Night, we believe authentic experiences are better than perfect appearances",
    aboutStoryTitle: "Our Story",
    aboutStorySubtitle: "Beginning with Imperfection",
    aboutStoryDesc1:
      "Another Night is not a perfect hotel, but we treat every guest with sincerity. We believe that authentic experiences come from human connections, not perfect facilities or services.",
    aboutStoryDesc2:
      "Here, we don't pursue superficial perfection, but focus on creating a space where guests feel comfortable and relaxed. We believe it's these imperfections that make Another Night unique and real.",
    aboutValuesTitle: "Our Values",
    aboutValuesSubtitle:
      "At Another Night, we believe authentic experiences are better than perfect appearances",
    sincerityTitle: "Sincerity",
    sincerityDesc:
      "We believe sincere service is better than perfect appearances. We don't pursue superficial perfection, but focus on creating a space where guests feel comfortable and relaxed.",
    comfortTitle: "Comfort",
    comfortDesc:
      "We hope every guest can find their own comfort at Another Night. We don't pursue perfect service, but focus on creating an environment where guests feel relaxed and comfortable.",
    connectionTitle: "Connection",
    connectionDesc:
      "We believe authentic experiences come from human connections. We don't pursue perfect facilities, but focus on creating a space where guests can connect with us and other guests.",
    growthTitle: "Growth",
    growthDesc:
      "We believe every imperfection is an opportunity for growth. We don't pursue perfect results, but focus on learning and improving with each service to create better experiences for guests.",
    hotelExteriorAlt: "Another Night Hotel Exterior",
    aboutPageMetaTitle: "Another Night - The Inn in Transformation",
    aboutPageMetaDesc:
      "Learn about Another Night's brand story, mission, core values, and leadership team, dedicated to creating comfortable and warm accommodation experiences for every guest",
  },
});

export const useLanguage = () => {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === "zh" ? "en" : "zh";
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage.value];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return {
    currentLanguage: readonly(currentLanguage),
    toggleLanguage,
    t,
    bookingUrl: BOOKING_URL,
  };
};
