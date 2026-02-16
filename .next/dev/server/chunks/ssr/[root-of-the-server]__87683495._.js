module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(site)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(site)/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(site)/about/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const SITE_URL = "https://masterbrain.site";
const metadata = {
    title: "About Us | MasterBrain",
    description: "MasterBrain provides specialized ICT coaching for A/L students and professional development courses for next-gen engineers.",
    alternates: {
        canonical: `${SITE_URL}/about`
    },
    openGraph: {
        title: "About MasterBrain – The Ultimate IT Roadmap",
        description: "Specialized ICT coaching for A/L students and professional development courses covering React, C#, and full-stack development.",
        url: `${SITE_URL}/about`,
        siteName: "MasterBrain",
        images: [
            {
                url: `${SITE_URL}/images/logo.png`,
                width: 1200,
                height: 630,
                alt: "MasterBrain"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "About MasterBrain",
        description: "The Ultimate IT Roadmap for Next-Gen Engineers. ICT coaching and professional development courses.",
        images: [
            `${SITE_URL}/images/logo.png`
        ]
    }
};
function Page() {
    const orgJsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "MasterBrain",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        slogan: "The Ultimate IT Roadmap for Next-Gen Engineers",
        description: "Specialized ICT coaching for A/L students and professional development courses for aspiring developers.",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+94 75 831 1995",
            contactType: "customer support",
            email: "support@masterbrain.site",
            areaServed: "LK"
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "Point Pedro Road, Kankesanthurai",
            addressCountry: "Sri Lanka"
        }
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: `${SITE_URL}/about`
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify([
                        orgJsonLd,
                        breadcrumbJsonLd
                    ])
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/about/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8"
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/about/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/about/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(site)/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/about/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__87683495._.js.map