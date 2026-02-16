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
"[project]/src/app/(site)/course-material/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    title: "Study Materials | MasterBrain",
    description: "Access high-quality ICT study materials, notes, past papers, and learning resources from MasterBrain. Designed for A/L students and aspiring IT professionals.",
    alternates: {
        canonical: `${SITE_URL}/study-materials`
    },
    openGraph: {
        title: "MasterBrain Study Materials – Learn Smarter",
        description: "Explore curated ICT study materials, structured notes, and exam-focused resources by MasterBrain.",
        url: `${SITE_URL}/study-materials`,
        siteName: "MasterBrain",
        images: [
            {
                url: `${SITE_URL}/images/logo.png`,
                width: 1200,
                height: 630,
                alt: "MasterBrain Study Materials"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "MasterBrain Study Materials",
        description: "ICT notes, study guides, and learning resources by MasterBrain.",
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
        description: "MasterBrain provides ICT study materials, structured notes, and professional learning resources for students and next-gen engineers.",
        areaServed: "LK",
        availableLanguage: [
            "English",
            "Tamil"
        ]
    };
    const studyMaterialsPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "MasterBrain Study Materials",
        url: `${SITE_URL}/study-materials`,
        description: "A collection of ICT study materials including notes, guides, and exam preparation resources.",
        mainEntity: {
            "@type": "EducationalOrganization",
            name: "MasterBrain",
            url: SITE_URL
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
                name: "Study Materials",
                item: `${SITE_URL}/study-materials`
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
                        studyMaterialsPageJsonLd,
                        breadcrumbJsonLd
                    ])
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/course-material/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GradeNavSection, {}, void 0, false, {
                    fileName: "[project]/src/app/(site)/course-material/page.tsx",
                    lineNumber: 100,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/course-material/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/course-material/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(site)/course-material/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/course-material/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be3509c3._.js.map