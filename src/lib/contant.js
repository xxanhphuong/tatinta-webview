
let BASE_URL = "https://tatinta.com";
let BASE_API = "https://api.tatinta.com/v1/";
let STATIC_URL = "https://api.tatinta.com/v1/static/";
let CDN_URL = "https://cdn.tatinta.com/";
let TRIPYAH_API = "https://apiguru.tatinta.com/v1/";
let BASE_URL_SUPPLIER = "https://supplier.tatinta.com";
let BASE_URL_AFFILICATE = "https://affiliate.tatinta.com";
let BASE_API_FLIGHT = "https://fapi.tatinta.com/v1/";

let CLOUDFRONT = "https://asset.tatinta.com"; // static file via cloudfront
let STATIC_CF = "https://tacdn.tatinta.com/"; // origin file one server ec2-13-36-33-88.eu-west-3.compute.amazonaws.com /// via cloudfront
let TA_IMG_CF = "https://ta-img.tatinta.com/"; // image-lambda-function process resize image /// via cloudfront
let ISMAP_CF = "https://ismap.tatinta.com"; // lambda-function process read file route isango tour hoho /// via cloudfront
let CHATBOX = "https://selab.edu.vn/demos/nhtlong/20503";
let GLOBALTIX_IMG_CF = "https://product-image.globaltix.com/live-gtImage/";
let TATINTA_CURRENCY_TICKET_GLOBALTIX = "THB";

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//     //BASE_API = "http://18.162.46.232:7200/v1/";
//     //BASE_API = "http://192.168.1.119:7200/v1/";
//     BASE_API = "http://localhost:7200/v1/";
//     //BASE_URL = "http://localhost:2000";
//     //STATIC_URL = "http://localhost:7200/v1/static/";
//     STATIC_URL = "http://18.162.46.232:7200/v1/static/";
//     //STATIC_URL = "http://18.162.46.232:7200/v1/static/";
//     //BASE_API = "https://api.tatinta.com/v1/";
//     STATIC_URL = "https://api.tatinta.com/v1/static/";
//     //TRIPYAH_API = "http://localhost:3200/v1/";
//     //BASE_URL_SUPPLIER = "http://18.162.46.232:5000";
//     BASE_URL_SUPPLIER = "http://localhost:5500";
//     BASE_URL_AFFILICATE = "http://18.162.46.232:5200";
//     CLOUDFRONT = "";
//     STATIC_CF = STATIC_URL;
//     //GLOBALTIX_IMG_CF = "https://product-image.globaltix.com/uat-gtImage/";
//     TATINTA_CURRENCY_TICKET_GLOBALTIX = "SGD";

//     BASE_API_FLIGHT = BASE_API;

// }

// // // // Enviroment UAT
// // if (process.env.REACT_APP_UAT === 'uat') {
// BASE_URL = "http://18.162.46.232:2000";
// BASE_API = "http://18.162.46.232:7200/v1/";
// STATIC_URL = "http://18.162.46.232:7200/v1/static/";
// BASE_URL_SUPPLIER = "http://18.162.46.232:5500";
// BASE_URL_AFFILICATE = "http://18.162.46.232:5200";
// CLOUDFRONT = '';
// STATIC_CF = STATIC_URL;
// GLOBALTIX_IMG_CF = "https://product-image.globaltix.com/uat-gtImage/";
// TATINTA_CURRENCY_TICKET_GLOBALTIX = "SGD";

// BASE_API_FLIGHT = BASE_API;
// }

const COOKIE_STORAGE_KEY = {
    TOKEN_SHARE: "tokenShare",
}

const LOCALSTORAGE_KEY = {
}

const CONFIG = {
    ...COOKIE_STORAGE_KEY,
    ...LOCALSTORAGE_KEY,

    CLOUDFRONT,
    STATIC_CF,
    GLOBALTIX_IMG_CF,
    TA_IMG_CF,
    ISMAP_CF,
    CHATBOX,
    BASE_URL: BASE_URL,
    CDN_URL, BASE_API,
    STATIC_URL: STATIC_URL,
    TATINTA_CURRENCY_TICKET_GLOBALTIX,
    TRIPYAH_STATIC_URL: "https://d1dcjnw82wb5w0.cloudfront.net/",
    BASE_URL_SHOP: "https://muasam.tatinta.com",
    BASE_URL_SHOP_SELLER: "https://banhang.tatinta.com",
    BASE_URL_SUPPLIER: BASE_URL_SUPPLIER,
    BASE_URL_AFFILICATE,
    API: {
        KEY: 'vp0fqbzqmo6iblch8d3z7lknj7dx4g',
        DESTINATION: {
            AREA: `${BASE_API}destination/area`,
            INTEREST: `${BASE_API}destination/interest`,
            DESTINATION: `${BASE_API}destination/destination`,
            CITY: `${BASE_API}destination/city`,
            COUNTRY: `${BASE_API}destination/country`,
            ORDER_ITEM: `${BASE_API}destination/order-item`,
            CHECKOUT: `${BASE_API}destination/checkout`,
            FACILITY: `${BASE_API}destination/facility`,
            IMAGE: `${BASE_API}destination/image`
        },
        SERVICE: {
            SERVICE: `${BASE_API}service/service`,
            TICKET: `${BASE_API}service/ticket`,
            CONTACT: `${BASE_API}extra/info`,
            NEWSLETTER: `${BASE_API}extra/newsletter`,
            VISACOUNTRY: `${BASE_API}service/visa-country`,
            VISA: `${BASE_API}service/visa`,
            VISA_REQUEST: `${BASE_API}service/visa/request`,
            VISA_INFO: `${BASE_API}service/visa/info`,
            HOTEL: `${BASE_API}service/hotel`,
            WEBISTE: `${BASE_API}extra/web-builder`,
            VISA_AREA: `${BASE_API}service/visa-area`,
            VISA_PREMIUM_SERVICE: `${BASE_API}service/visa-premium-service`,
        },
        TOUR: {
            TOUR: `${BASE_API}tour/tour`,
            SPECIAL: `${BASE_API}tour/tour/special`,
            TICKET_EVENT: `${BASE_API}tour/tour/ticket-event`,
            CATEGORY: `${BASE_API}tour/category`,
            ORDER_ITEM: `${BASE_API}tour/order-item`,
            CHECKOUT: `${BASE_API}tour/checkout`,
            ORDER: `${BASE_API}tour/order`,
            CONFIRM: `${BASE_API}tour/order/confirm`,
            FIND_PARTNER: `${BASE_API}tour/findpartner`,
        },
        HOTEL: {
            HOTEL: `${BASE_API}hotel/hotel`,
            ROOM: `${BASE_API}hotel/room`,
            FACILITY: `${BASE_API}hotel/facility`,
            IMAGE: `${BASE_API}hotel/image`,
            ORDER_ITEM: `${BASE_API}hotel/order-item`,
            ORDER: `${BASE_API}hotel/order`,
            CHECKOUT: `${BASE_API}hotel/checkout`,
            TYPE: `${BASE_API}hotel/type`
        },
        TAFLIGHT: {
            API_KEY: 'mhhq5pvivoz68l3dffmt9pdczxouv1',
            SECRET_KEY: '2mawb0h9y53ql7orcdfiisqhxlj3vt',
            FLIGHT: `${BASE_API}flight/airports`,
            SEARCH_FLIGHT: `${BASE_API}flight/airports/search`,
            LIST: `${BASE_API}flight/search`,
            MULTICITY_LIST: `${BASE_API}flight/multi/search`,
            DETAIL: `${BASE_API}flight/detail`,
            BOOKING_DOMESTIC: `${BASE_API}flight/book`,
            BOOKING_INTERNATIONAL: `${BASE_API}flight/booking/international/create`,
            CHECKOUT: `${BASE_API}flight/checkout`,
            AIRPORT: `${BASE_API}flight/airports`,
            AIRLINE: `${BASE_API}flight/airlines`,
            POLICY: `${BASE_API_FLIGHT}flight/policy`,
            POLICY_INTER: `${BASE_API_FLIGHT}flight/policy-inter`,
            COUNTRY: `${BASE_API}flight/countries`,
            TRACK_BOOKING: `${BASE_API}flight/booking/tracking`,
            INNER_STOP: `${BASE_API}flight/inter-stop`,
            ORDER: `${BASE_API}flight/booking/manage/user/list`,
            USER_BOOKING_FLIGHT_DETAIL: `${BASE_API}flight/booking/manage/booking-flight`,
            USER_BOOKING_DETAIL: `${BASE_API}flight/booking/manage/user/detail`,
        },
        SHOPPING_CART: {
            ORDER: `${BASE_API}shopping-cart/order`,
            CHECKOUT: `${BASE_API}shopping-cart/checkout`,
        },
        CARD: `${BASE_API}payment/card`,
        FLIGHT: {
            FLIGHT: `${BASE_API}flight/flight`,
            CATEGORY: `${BASE_API}flight/category`,
            FACILITY: `${BASE_API}flight/facility`,
            CITY: `${BASE_API}flight/city`,
            ORDER_ITEM: `${BASE_API}flight/order-item`,
            CHECKOUT: `${BASE_API}flight/checkout`,
        },
        PROGRAM: {
            ORDER: `${BASE_API}trip/order`,
            PROFILE: `${BASE_API}trip/profile`,
            QUIZ: `${BASE_API}trip/quiz`,
            QUIZ_ITEM: `${BASE_API}trip/quiz-item`,
        },
        POST: {
            POST: `${BASE_API}post/post`,
            CATEGORY: `${BASE_API}post/category`,
        },
        USER: {
            USER: `${BASE_API}users`,
            CHECK: `${BASE_API}users/check`,
            GET_BY_TOKEN: `${BASE_API}users/get-by-token`,
            SLUG_AGENCY_CHECK: `${BASE_API}agency/agency/check`,
            REGISTER: `${BASE_API}auth/register`,
            AGENCY_REGISTER: `${BASE_API}agency/agency`,
            AGENCY_INFO: `${BASE_API}agency/agency/get-info-agency`,
            ACTIVE: `${BASE_API}users/active`,
            LOGIN: `${BASE_API}auth/login`,
            LOGIN_FACEBOOK: `${BASE_API}auth/facebook`,
            LOGIN_GOOGLE: `${BASE_API}auth/google`,
            FORGOT: `${BASE_API}auth/forgot-password`,
            CHECK_AFFILIATE: `${BASE_API}users/check-affiliate`,
            TRAVEL_AGENT: `${BASE_API}travelagent`,
            CLIENT_LOGIN: `${BASE_API}auth/client-login`,
            AGENCY: `${BASE_API}agency/agency/get-agencies`,
            AGENCY_CONNECT: `${BASE_API}agency/connect`,
            AGENCY_DETAIL: `${BASE_API}agency/agency/get-info-by-slug`,
            AGENCY_CONTACT: `${BASE_API}agency/contact`,
            SAVE_VOUCHER: `${BASE_API}users/save-voucher-code`,
            VOUCHERS_SAVED: `${BASE_API}users/get-vouchers-saved`,
            TOUR_CONSULT: `${BASE_API}tour/tour-consult`,
            REQUEST_VERIFY: `${BASE_API}users/request-verify`,
            ORDERS_TICKET: `${BASE_API}users/get-order-ticket`,
            ORDERS_JAPAN_TICKET: `${BASE_API}users/get-order-cuisine`,
        },
        API_PRODUCT: '',
        GURU: {
            GURU: `${TRIPYAH_API}guru`,
            CITY: `${TRIPYAH_API}city`,
            BOOK: `${TRIPYAH_API}book/tatinta`,
            BOOKS: `${TRIPYAH_API}book`,
            PAYMENT: `${TRIPYAH_API}transaction/tatinta`,
            PAYMENT_UPDATE: `${TRIPYAH_API}transaction`,
            LOGIN: `${TRIPYAH_API}auth/login`,
            LOGIN_FACEBOOK: `${TRIPYAH_API}auth/facebook`,
            LOGIN_GOOGLE: `${TRIPYAH_API}auth/google`,
            REFRESH_TOKEN: `${TRIPYAH_API}auth/refresh-token`,
            REGISTER: `${TRIPYAH_API}auth/register`,
            USER: `${TRIPYAH_API}users`,
            UPLOAD_IMAGE: `${TRIPYAH_API}upload/image`,
            ACTIVE_VISITOR: `${TRIPYAH_API}users/active`,
            CHECKOUT: `${TRIPYAH_API}checkout`,
            COUNTRY: `${TRIPYAH_API}country`
        },
        IMAGE: {
            UPLOAD_AVATAR: `${BASE_API}extra/upload/avatar`,
            SAVE_FILE: `${BASE_API}extra/upload/save-file`,
            MEDIA: `${BASE_API}media/media`,
            UPLOAD_IMAGE: `${BASE_API}media/upload/image`,
            UPLOAD_LIFELIMO: `${BASE_API}extra/upload/lifelimo`,
            UPLOAD_PDF: `${BASE_API}extra/upload/file-pdf`
        },
        AUTH: {
            LOGIN: `${BASE_API}auth/login`,
        },
        EXTRA: {
            INVITE: `${BASE_API}extra/info/invite`,
            SEARCH: `${BASE_API}extra/search`,
            //QUICK_SEARCH: `${BASE_API}extra/search/quick-search`,
            CURRENCY_RATES: `${BASE_API}extra/rates`,
            INFO_LOC: `${BASE_API}extra/info/loc`,
            QUICK_SEARCH: `${BASE_API}extra/search/frontend-quick-search`,
        },
        TICKET: {
            TICKET: `${BASE_API}ticket/ticket`,
            IMAGE: `${BASE_API}ticket/image`,
            ORDER_ITEM: `${BASE_API}ticket/order-item`,
            CHECKOUT: `${BASE_API}ticket/checkout`,
        },
        VOUCHER: {
            APPLY: `${BASE_API}voucher/voucher/apply-voucher`,
            CHECK: `${BASE_API}voucher/voucher/check-voucher`,
            CHECK_REGISTER: `${BASE_API}voucher/voucher-register/check-voucher`,
            CHECK_VOUCHER_REGISTER: `${BASE_API}voucher/voucher/check-voucher-register`,
            CONDITION_POINT: `${BASE_API}voucher/voucher/condition-point`
        },
        TRANSPORT: {
            TRANSPORT: `${BASE_API}transport/transport`,
            ORDER: `${BASE_API}transport/order`,
            CHECKOUT: `${BASE_API}transport/checkout`,
            CONFIRM: `${BASE_API}transport/order/confirm`
        },
        BIKE: {
            BIKE: `${BASE_API}bike/bike`,
            ORDER: `${BASE_API}bike/order`,
            CHECKOUT: `${BASE_API}bike/checkout`,
            CONFIRM: `${BASE_API}bike/order/confirm`
        },
        COMMUNITY: {
            COMMUNITY: `${BASE_API}community/community`,
            ORDER: `${BASE_API}community/order`,
            CHECKOUT: `${BASE_API}community/checkout`,
            CONFIRM: `${BASE_API}community/order/confirm`
        },
        MYDAYTRIP: {
            SEARCH: `${BASE_API}mydaytrip/search`,
            CUSTOMIZE: `${BASE_API}mydaytrip/search/customize`,
            BOOKING: `${BASE_API}mydaytrip/book`,
            CHECKOUT: `${BASE_API}mydaytrip/checkout`,
            DETAIL: `${BASE_API}mydaytrip/details`,
            CUSTOM_ROUTE: `${BASE_API}daytrip/request`
        },
        ISANGO: {
            REGION: `${BASE_API}isango/regions`,
            ACTIVITIES: `${BASE_API}isango/activities`,
            ACTIVITY: `${BASE_API}isango/activity`,
            CHECKAVAI: `${BASE_API}isango/checkavailability`,
            //AFFILIATEID: '312113ee-2c74-4352-b541-013c851c73a2',// AUT
            AFFILIATEID: "fdaa3f0c-a58e-4406-a513-358b92bd1c8d", // PROD
            RESERVATION: `${BASE_API}isango/reservation`,
            CHECKOUT: `${BASE_API}isango/checkout`,
            ORDER: `${BASE_API}isango/order`,
            MAP: `${BASE_API}extra/ismap`,
            PAYMENT_EXTRA_DETAILS: `${BASE_API}isango/getPaymentExtraDetails`,
            CANCEL: `${BASE_API}isango/cancel-by-guest`
        },
        GLOBALTIX: {
            GET_IMAGE: `${BASE_API}globaltix/getImage`,
            PRODUCT_INFO: `${BASE_API}globaltix/rawProductInfo`,
            PRODUCT_OPTIONS: `${BASE_API}globaltix/rawProductOptions`,
            CHECK_EVENT_AVAILABILITY: `${BASE_API}globaltix/checkEventAvailability`,
            CHECK_EVENT_ALL_AVAILABILITY: `${BASE_API}globaltix/checkEventAvailabilityAllTicket`,
            CREATE_BOOKING: `${BASE_API}globalTix/createOrder`,
            CHECKOUT: `${BASE_API}globalTix`,
            ORDER: `${BASE_API}globalTix/getGlobaltixBookingDetail`,
            REVOKE_TICKET: `${BASE_API}globalTix/revokeTicket`,
        },
        LIFELIMO: {
            ORDER: `${BASE_API}lifelimo/order`,
        },
        COUPON: {
            CATEGORY: `${BASE_API}coupon/category`,
            COUPON: `${BASE_API}coupon/coupon`,
            ORDER: `${BASE_API}coupon/order`,
            CHECKOUT: `${BASE_API}coupon/checkout`
        },
        JAPAN_TICKET: {
            LIST_RESTAURANT: `${BASE_API}cuisine/get-list-restaurant`,
            LIST_FOOD: `${BASE_API}cuisine/get-list-food`,
            DETAIL: `${BASE_API}japan-ticket/getDetailProduct`,
            DETAIL_SHOP: `${BASE_API}japan-ticket/getDetailShop`,
            CHECK_STOCKS: `${BASE_API}japan-ticket/getRawStocks`,
            ORDER: `${BASE_API}japan-ticket/createOrder`,
            CHECKOUT: `${BASE_API}japan-ticket/checkout`,
            ORDER_DETAIL: `${BASE_API}japan-ticket/order`,
            CANCEL: `${BASE_API}japan-ticket/cancelOrder`,
        },
        INCENTIVE: `${BASE_API}incentive`,
        REVIEW: `${BASE_API}review`,
        CHECK_REVIEW: `${BASE_API}review/check-allow-review`,
        CONTACT: `${BASE_API}contact`,

        PROMOTION_COUNTER_ORDER: `${BASE_API}report/promotion-counter-orders`

    },
    ENCRYPT: 'Tvp0fqbzqmo6iblc',
    MAX_SEND_POST: 3,
    FACEBOOK_PAGE: "",
    TWITTER_PAGE: "",
    GOOGLE_PLUS_PAGE: "",
    INSTAGRAM_PAGE: "",
    PER_PAGE: 9,
    FACEBOOK_ID: "235665277965726",
    CURRENCY_DEFAULT: { value: 'VND', sym: '₫' },
    CURRENCIES: [
        { value: 'VND', sym: '₫' },
        { value: 'USD', sym: '$' },
        { value: 'EUR', sym: '€' },
        { value: 'CHF', sym: 'Fr' },
        { value: 'CAD', sym: 'C$' },
        { value: 'KRW', sym: '₩' },
        { value: 'JPY', sym: '¥' },
        { value: 'SGD', sym: 'S$' },
        { value: 'AUD', sym: 'AU$' },
        { value: 'CNY', sym: 'CN¥' },
        { value: 'GBP', sym: 'GB£' },
        { value: 'HKD', sym: 'HK$' },
        { value: 'INR', sym: 'Rs' },
        { value: 'MYR', sym: 'RM' },
        { value: 'THB', sym: '฿' }
    ],
    CURRENCIES_FORMULAR: {
        "VND": { value: 'VND', sym: '₫', formular: '#,##0;[Red]-#,##0', formularCurrency: '#,##0 "đ";[Red]-#,##0 "đ"' },
        "USD": { value: 'USD', sym: '$', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: '$#,##0.00;[Red]-$#,##0.00' },
        "EUR": { value: 'EUR', sym: '€', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: '#,##0.00 €;[Red]-#,##0.00 €' },
        "CHF": { value: 'CHF', sym: 'Fr.', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'Fr.#,##0.00;[Red]-Fr.#,##0.00' },
        "CAD": { value: 'CAD', sym: 'C$', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'C$#,##0.00;[Red]-C$#,##0.00' },
        "KRW": { value: 'KRW', sym: '₩', formular: '#,##0;[Red]-#,##0', formularCurrency: '#,##0 ₩;[Red]-#,##0 ₩' },
        "JPY": { value: 'JPY', sym: '¥', formular: '#,##0;[Red]-#,##0', formularCurrency: '¥#,##0;[Red]-¥#,##0' },
        "SGD": { value: 'SGD', sym: 'S$', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'S$#,##0.00;[Red]-S$#,##0.00' },
        "AUD": { value: 'AUD', sym: 'A$', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'A$#,##0.00;[Red]-A$#,##0.00' },
        "CNY": { value: 'CNY', sym: 'CN¥', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'CN¥#,##0.00;[Red]-CN¥#,##0.00' },
        "GBP": { value: 'GBP', sym: '£', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: '£#,##0.00;[Red]-£#,##0.00' },
        "HKD": { value: 'HKD', sym: 'HK$', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'HK$#,##0.00;[Red]-HK$#,##0.00' },
        "INR": { value: 'INR', sym: '₹', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: '₹#,##0.00;[Red]-₹#,##0.00' },
        "MYR": { value: 'MYR', sym: 'RM', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: 'RM#,##0.00;[Red]-RM#,##0.00' },
        "THB": { value: 'THB', sym: '฿', formular: '#,##0.00;[Red]-#,##0.00', formularCurrency: '฿#,##0.00;[Red]-฿#,##0.00' },
    },
    POPULAR_CURRENCIES: ["VND", "USD", "EUR", "SGD", "AUD"],
    RATES_DEFAULT: [],
    PRICE_RANGE_MAX: 10000000,
    ARR_HOTEL_BUDGET: [
        { value: "0,1400000", min: 0, max: 1400000 },
        { value: "1400000,2800000", min: 1400000, max: 2800000 },
        { value: "2800000,4200000", min: 2800000, max: 4200000 },
        { value: "4200000,5600000", min: 4200000, max: 5600000 },
        { value: "5600000", max: 5600000 }
    ],
    FILE_VERSION: Math.random(),
    TRAVEL_AGENT_COMMISSION: 8, //%
    TOUR_CUSTOM_CONSULTANT_COMMISSION: 8, //%
    MY_DAY_TRIP_COMMISSION: 0.1, // 10%
    PLATFORM_FEES: {
        TRANSACTION_FEE: 2.7, //2.7%
        TRANSACTION_FEE_AIRLINE: 0, // 2.7%
        DISCOUNT_AIRLINE: 0, // 0.5%
        DISCOUNT_AFFILIATE: 2, // 2%
    },
    EU_AREA_ID: '5e02e34d775aa01200bce0e0',
    USER_ROLE: {
        USER: 'user',
        GURU: 'guru',
        AGENCY: 'agency',
        AFFILIATE: 'affiliate',
        TRAVELAGENT: 'travelagent',
    },
    COMPANY_LEVEL: {
        STANDARD: 'standard',
        PREMIUM: 'premium',
        LUXURY: 'luxury',
    },
    // VN, VJ, QH, VU
    MarketingAirlineKey: {
        VN: 'VN',
        VJ: 'VJ',
        QH: 'QH',
        VU: 'VU',
    },
    MarketingAirlineList: {
        VN: 'Vietnam Airlines',
        VJ: 'Vietjet Air',
        QH: 'Bamboo Airways',
        VU: 'Vietravel Airlines',
    },
    AirlineFarelassesKey: {
        first: 'First Class',
        business: 'Business Class',
        premium_economy: 'Premium Economy',
        economy: 'Economy Class'
    },
    AirlineFarelasses: [
        // # Hạng nhất(First Class)
        { "class_code": "F", "description": "First Class", search_key: "first" },
        { "class_code": "A", "description": "First Class Discounted", search_key: "first" },
        { "class_code": "P", "description": "First Class Premium/Full Fare", search_key: "first" },

        // # Hạng thương gia(Business Class)
        { "class_code": "J", "description": "Business Class Premium/Full Fare", search_key: "business" },
        { "class_code": "C", "description": "Business Class", search_key: "business" },
        { "class_code": "D", "description": "Business Class Discounted", search_key: "business" },
        { "class_code": "Z", "description": "Business Class Discounted", search_key: "business" },
        { "class_code": "I", "description": "Business Class Discounted", search_key: "business" },

        // # Hạng phổ thông cao cấp(Premium Economy)
        { "class_code": "W", "description": "Premium Economy", search_key: "premium_economy" },
        { "class_code": "S", "description": "Premium Economy Discounted", search_key: "premium_economy" },
        { "class_code": "R", "description": "Premium Economy Discounted", search_key: "premium_economy" },

        // # Hạng phổ thông(Economy Class)
        { "class_code": "Y", "description": "Economy Class Full Fare", search_key: "economy" },
        { "class_code": "B", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "M", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "H", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "Q", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "K", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "L", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "T", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "V", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "X", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "G", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "N", "description": "Economy Class Discounted", search_key: "economy" },
        { "class_code": "E", "description": "Economy Class Basic", search_key: "economy" },
        { "class_code": "O", "description": "Economy Class Basic", search_key: "economy" },
    ],
    AirLineRouteType: {
        INTERNATIONAL: 'INTERNATIONAL',
        DOMESTIC: 'DOMESTIC',
    },
    AirLineItineraryType: {
        "ONEWAY": "ONEWAY",
        "ROUNDTRIP": "ROUNDTRIP",
        "MULTICITY": "MULTICITY"
    },
    AIR_SERVICE_FEE: {
        value: 50000,
        currency: 'VND',
    },
    DOMESTIC_AIRLINE: ['VJ', 'VU', 'QH', 'VN'],
    WISHLIST_ITEM_TYPE: {
        'TOUR': 'tour',
        'HOTEL': 'hotel',
        'FLIGHT': 'flight',
        'JAPAN_TICKET': 'japan-ticket',
    },
}

export default CONFIG;