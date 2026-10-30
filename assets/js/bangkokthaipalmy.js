/**
 * RestoSync SaaS - Store Configuration
 * Tenant: Bangkok Thai Takeaway (Palmerston North, NZ)
 */

const RESTOSYNC_CONFIG = {
  store: {
    id: "bangkokthai",
    name: "Bangkok Thai Takeaway",
    tagline: "Authentic Thai Cuisine in Palmerston North",
    phone: "06 222 3375",
    address: "287 Main Street, Palmerston North Central",
    gstNumber: "123-456-789",
    currency: "NZD",
    gstRate: 0.15,
    publicHolidaySurcharge: 0.15
  },

  // DATA JAM OPERASIONAL LENGKAP
  operatingHours: {
    mon: "Closed",
    tue: "Closed",
    wed: "5:26 PM - 9:00 PM",
    thu: "4:30 PM - 9:00 PM",
    fri: "4:30 PM - 9:30 PM",
    sat: "Closed",
    sun: "Closed",
    isTotallyClosed: false,
    hasHolidaySurcharge: false,
    surchargePercent: 15,
    surchargeName: "Public Holiday Surcharge"
  },

  // SETTING HIGHLIGHTS (DI-DISABLE DARI ADMIN)
  highlights: {
    enabled: false
  },
  
  branding: {
    logo: "assets/images/BangkokThaiLogo.png",
    altLogo: "assets/images/BTPLogo.jpg",
    heroImages: [
      "assets/images/Hero01.jpg",
      "assets/images/Hero02.jpg",
      "assets/images/Hero03.jpg"
    ]
  },

  features: {
    dailySetup: true,
    customizationAndBYO: true,
    orderTrackingBoard: true,
    digitalMenuAndWebsite: true,
    eodZReport: true,
    multiDevicePOS: true,
    staffRoster: false,
    recipeCosting: false,
    tableFloorPlan: false,
    hotelRoomCharge: false,
    mpiFoodSafety: true
  },

};
