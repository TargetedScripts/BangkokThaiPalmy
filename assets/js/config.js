// RestoSync Global Configuration & New Zealand Hospitality Standards
const RESTOSYNC_CONFIG = {
    appName: "RestoSync SaaS",
    developer: "TargetedScripts.com",
    tagline: "Custom Software & Automation NZ",
    version: "1.2.0",
    gstRate: 0.15, // 15% NZ GST Standard
    currency: "NZD",
    
    // Subscription Tiers with Free Digital Customer Website & 2 Skin Options
    subscriptionTiers: [
        {
            id: "basic",
            name: "Basic Tier",
            priceMonthly: 150,
            features: [
                "POS Cashier & 15% NZ GST Calculation",
                "Core Menu Catalog (Bilingual EN / 中文)",
                "Staff Roster Management",
                "Free Digital Customer Website (Includes choice of Modern Grid or Classic Menu Book layout)"
            ]
        },
        {
            id: "professional",
            name: "Professional Tier",
            priceMonthly: 250,
            features: [
                "Advanced POS & Multi-Terminal Support",
                "Extended Menu & Inventory Management",
                "Staff Roster & Compliance Tracking",
                "Free Digital Customer Website (Includes choice of Modern Grid or Classic Menu Book layout)",
                "Priority Cloud Hosting & Support"
            ]
        },
        {
            id: "enterprise",
            name: "Enterprise Tier",
            priceMonthly: 400,
            features: [
                "Multi-Branch F&B Operations Management",
                "Full Analytics & Automated Reporting",
                "Dedicated Account Management",
                "Free Digital Customer Website (Includes choice of Modern Grid or Classic Menu Book layout)",
                "Custom Workflow Integrations via TargetedScripts"
            ]
        }
    ],

    serviceModelNote: "RestoSync subscription covers ready-to-use SaaS platform access and hosted template websites. For bespoke custom software development outside standard modules, services are provided via TargetedScripts.com."
};