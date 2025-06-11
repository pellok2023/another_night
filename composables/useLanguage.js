import { ref, reactive, readonly } from "vue";

// 全局語言狀態
const currentLanguage = ref("zh");

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
    aboutSectionTitle1: "我們是專業的",
    aboutSectionTitle2: "精品旅宿 服務團隊",
    aboutDescription:
      "又一宿致力於為您提供最優質的住宿體驗。我們專注於創造舒適、溫馨且富有品味的住宿環境。每一個房間都經過精心佈置，結合了舒適性與美學，為旅客打造難忘的住宿回憶。我們相信優質的服務能夠提升住宿品質，讓每一次入住都成為美好的體驗。",
    service24Hours: "24小時服務",
    refinedRooms: "精緻客房",
    diningService: "餐飲服務",
    businessFacilities: "商務設施",
    professionalTeamNote: "▷ 專業團隊為您打造舒適溫馨的住宿體驗",

    // 房型區域
    roomTypesTitle: "精選房型",
    roomTypesSubtitle:
      "每間客房都經過精心設計，融合舒適與美學，為您提供難忘的住宿體驗",

    // 房間卡片
    popularRecommendation: "熱門推薦",
    standardRoom: "標準客房",
    standardRoomDesc:
      "舒適寬敞的客房空間，配備現代化設施與精緻寢具，為您提供優質的住宿環境。",
    upgradeRecommendation: "升級推薦",
    deluxeRoom: "豪華客房",
    deluxeRoomDesc:
      "更寬敞的空間設計，增設休憩區域與工作空間，適合商務旅客與重視品質的住客。",
    topEnjoyment: "頂級享受",
    refinedSuite: "精緻套房",
    refinedSuiteDesc:
      "獨立客廳與臥室空間，頂級裝潢與設備，為追求極致舒適體驗的賓客提供完美住宿。",
    guests: "人",
    perNight: "/晚",
    bookNowAction: "立即預訂",

    // 交通資訊區域
    transportationTitle: "交通資訊",
    transportationSubtitle: "便利的交通位置，讓您輕鬆抵達又一宿",
    hotelName: "台東東新大飯店",
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
    busDesc2: "新生路站：鼎東客運市區線、觀光巴士",
    parkingInfo: "停車資訊",
    parkingDesc1: "館內提供24小時停車場 - 每日NT$300",
    parkingDesc2: "周邊收費停車格 - 每小時NT$30",

    // 飯店環境區域
    hotelEnvironmentTitle: "飯店環境介紹",
    allProjects: "全部項目",
    roomsCategory: "客房",
    lobbyCategory: "大廳",
    businessCategory: "商務",
    hotelRoomEnvironmentTitle: "又一宿精緻客房環境",
    hotelRoomEnvironmentDesc:
      "結合現代舒適與溫馨氛圍的精緻客房，為每位住客提供賓至如歸的住宿體驗，細節中展現品質與用心。",
    viewProject: "查看項目",

    // 專業服務區域
    professionalServicesTitle: "專業服務項目",
    viewAll: "查看全部",
    roomServiceTitle: "客房服務",
    roomServiceDesc:
      "精心設計的舒適客房，24小時客房服務，確保每一位住客都能享受賓至如歸的住宿體驗。",
    diningServiceTitle: "餐飲服務",
    diningServiceDesc:
      "精緻早餐與在地美食，專業廚師團隊精心烹調，為住客提供難忘的味蕾饗宴。",
    conciergeServiceTitle: "禮賓服務",
    conciergeServiceDesc:
      "專業禮賓團隊提供行程規劃、交通安排與在地導覽，讓您的旅程更加完美順心。",
    businessServiceTitle: "商務服務",
    businessServiceDesc:
      "完善的商務設施與會議空間，高速網路與商務中心，滿足商旅人士的各種需求。",

    // 統計數據
    satisfiedGuests: "滿意住客",
    serviceAwards: "服務獎項",
    professionalRooms: "專業客房",
    yearsExperience: "年服務經驗",

    // Hero Slider
    heroSliderTitle: "又一宿精緻客房環境",
    heroSliderDesc:
      "結合現代舒適與溫馨氛圍的精緻客房，為每位住客提供賓至如歸的住宿體驗，細節中展現品質與用心。",
    heroSliderButton: "查看項目",

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
    roomFacilitiesTitle: "客房設施",
    roomFacilitiesSubtitle:
      "每間客房都配備完善的現代化設施，為您帶來舒適便利的住宿體驗",
    premiumBeddingTitle: "頂級寢具",
    premiumBeddingDesc: "精選高品質床墊與寢具，確保您的完美睡眠體驗",
    smartControlTitle: "智能控制",
    smartControlDesc: "一鍵控制燈光、溫度與窗簾，享受科技帶來的便利",
    ecoConceptTitle: "環保理念",
    ecoConceptDesc: "使用環保材料與節能設備，共同愛護地球環境",

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
    addressText: "台東縣台東市中華路一段1號",
    addressNote: "近台東火車站，步行5分鐘",
    phoneTitle: "電話",
    phoneNumber: "089-123-456",
    phoneNote: "24小時服務專線",
    emailTitle: "電子郵件",
    emailAddress: "info@anothernight.com",
    emailNote: "一般詢問與預訂",
    serviceHoursTitle: "服務時間",
    checkInOut: "Check-in: 15:00 | Check-out: 11:00",
    frontDesk24h: "前台24小時服務",
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
      "又一宿是專業的精品旅宿，致力於為旅客創造舒適優雅的住宿體驗。我們結合溫馨服務理念與精緻設施，打造獨特的住宿空間，讓每一次入住都成為美好的回憶。",
    quickLinks: "快速連結",
    serviceItems: "服務項目",
    roomServiceLink: "客房服務",
    diningServiceLink: "餐飲服務",
    conciergeServiceLink: "禮賓服務",
    businessServiceLink: "商務服務",
    copyright: "版權所有",
    privacyPolicy: "隱私政策",
    termsOfService: "服務條款",
    cookiePolicy: "Cookie政策",
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
    aboutSectionTitle1: "We are professional",
    aboutSectionTitle2: "boutique hospitality service team",
    aboutDescription:
      "Another Night is committed to providing you with the highest quality accommodation experience. We focus on creating comfortable, warm and tasteful accommodation environments. Every room is carefully arranged, combining comfort and aesthetics to create unforgettable accommodation memories for travelers. We believe that quality service can enhance accommodation quality and make every stay a wonderful experience.",
    service24Hours: "24-hour Service",
    refinedRooms: "Refined Rooms",
    diningService: "Dining Service",
    businessFacilities: "Business Facilities",
    professionalTeamNote:
      "▷ Professional team creates comfortable and cozy accommodation experience for you",

    // Room Types Section
    roomTypesTitle: "Selected Room Types",
    roomTypesSubtitle:
      "Every room is carefully designed, blending comfort and aesthetics to provide you with an unforgettable accommodation experience",

    // Room Cards
    popularRecommendation: "Popular",
    standardRoom: "Standard Room",
    standardRoomDesc:
      "Comfortable and spacious room space, equipped with modern facilities and exquisite bedding, providing you with a quality accommodation environment.",
    upgradeRecommendation: "Upgrade Recommended",
    deluxeRoom: "Deluxe Room",
    deluxeRoomDesc:
      "More spacious space design with additional lounge and work areas, suitable for business travelers and guests who value quality.",
    topEnjoyment: "Premium Luxury",
    refinedSuite: "Refined Suite",
    refinedSuiteDesc:
      "Independent living and bedroom spaces, premium decoration and equipment, providing perfect accommodation for guests pursuing ultimate comfort experience.",
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
    busDesc2: "Xinsheng Road Station: Dingdong Bus city lines, sightseeing bus",
    parkingInfo: "Parking Information",
    parkingDesc1: "24-hour parking available in hotel - NT$300 per day",
    parkingDesc2: "Surrounding paid parking spaces - NT$30 per hour",

    // Hotel Environment Section
    hotelEnvironmentTitle: "Hotel Environment Introduction",
    allProjects: "All Projects",
    roomsCategory: "Rooms",
    lobbyCategory: "Lobby",
    businessCategory: "Business",
    hotelRoomEnvironmentTitle: "Another Night Premium Room Environment",
    hotelRoomEnvironmentDesc:
      "Premium rooms combining modern comfort with cozy atmosphere, providing every guest with a home-away-from-home accommodation experience, showing quality and care in every detail.",
    viewProject: "View Project",

    // Professional Services Section
    professionalServicesTitle: "Professional Service Items",
    viewAll: "View All",
    roomServiceTitle: "Room Service",
    roomServiceDesc:
      "Carefully designed comfortable rooms with 24-hour room service, ensuring every guest can enjoy a home-away-from-home accommodation experience.",
    diningServiceTitle: "Dining Service",
    diningServiceDesc:
      "Exquisite breakfast and local cuisine, professional chef team carefully prepared, providing guests with unforgettable culinary feasts.",
    conciergeServiceTitle: "Concierge Service",
    conciergeServiceDesc:
      "Professional concierge team provides itinerary planning, transportation arrangements and local tours to make your journey more perfect.",
    businessServiceTitle: "Business Service",
    businessServiceDesc:
      "Complete business facilities and meeting spaces, high-speed internet and business center to meet all business traveler needs.",

    // Statistics
    satisfiedGuests: "Satisfied Guests",
    serviceAwards: "Service Awards",
    professionalRooms: "Professional Rooms",
    yearsExperience: "Years of Service Experience",

    // Hero Slider
    heroSliderTitle: "Another Night Premium Room Environment",
    heroSliderDesc:
      "Premium rooms combining modern comfort with cozy atmosphere, providing every guest with a home-away-from-home accommodation experience, showing quality and care in every detail.",
    heroSliderButton: "View Project",

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
    roomFacilitiesTitle: "Room Facilities",
    roomFacilitiesSubtitle:
      "Every room is equipped with complete modern facilities to bring you a comfortable and convenient accommodation experience",
    premiumBeddingTitle: "Premium Bedding",
    premiumBeddingDesc:
      "Selected high-quality mattresses and bedding to ensure your perfect sleep experience",
    smartControlTitle: "Smart Control",
    smartControlDesc:
      "One-touch control of lighting, temperature and curtains, enjoy the convenience brought by technology",
    ecoConceptTitle: "Eco Concept",
    ecoConceptDesc:
      "Using eco-friendly materials and energy-saving equipment to care for the earth's environment together",

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
    phoneNumber: "089-123-456",
    phoneNote: "24-hour service hotline",
    emailTitle: "Email",
    emailAddress: "info@anothernight.com",
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
      "Another Night is a professional boutique accommodation, dedicated to creating comfortable and elegant accommodation experiences for travelers. We combine warm service concepts with exquisite facilities to create unique accommodation spaces, making every stay a beautiful memory.",
    quickLinks: "Quick Links",
    serviceItems: "Services",
    roomServiceLink: "Room Service",
    diningServiceLink: "Dining Service",
    conciergeServiceLink: "Concierge Service",
    businessServiceLink: "Business Service",
    copyright: "All Rights Reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
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
  };
};
