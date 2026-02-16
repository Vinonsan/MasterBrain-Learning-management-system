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
"[project]/src/app/(site)/course/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    title: "IT & ICT Courses | MasterBrain Sri Lanka",
    description: "Explore ICT A/L classes, software engineering courses, and professional IT training at MasterBrain. Learn from industry experts and build a successful tech career.",
    alternates: {
        canonical: `${SITE_URL}/courses`
    },
    openGraph: {
        title: "IT & ICT Courses at MasterBrain",
        description: "Master ICT A/L subjects and professional IT skills with structured courses, expert mentors, and real-world projects.",
        url: `${SITE_URL}/courses`,
        siteName: "MasterBrain",
        images: [
            {
                url: `${SITE_URL}/images/logo.png`,
                width: 1200,
                height: 630,
                alt: "MasterBrain IT Courses"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "MasterBrain IT & ICT Courses",
        description: "Join MasterBrain to learn ICT A/L, software engineering, and professional IT skills.",
        images: [
            `${SITE_URL}/images/logo.png`
        ]
    }
};
function Page() {
    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "MasterBrain",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        description: "MasterBrain provides ICT A/L coaching and professional IT courses for future software engineers.",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+94 75 831 1995",
            contactType: "admissions",
            email: "support@masterbrain.site",
            areaServed: "LK",
            availableLanguage: [
                "English",
                "Tamil"
            ]
        }
    };
    const coursesJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "MasterBrain Courses",
        itemListElement: [
            {
                "@type": "Course",
                position: 1,
                name: "ICT A/L Classes",
                description: "Comprehensive ICT A/L syllabus coverage with theory, practicals, and exam-focused guidance.",
                provider: {
                    "@type": "EducationalOrganization",
                    name: "MasterBrain",
                    url: SITE_URL
                }
            },
            {
                "@type": "Course",
                position: 2,
                name: "Software Engineering Course",
                description: "Learn modern software development with JavaScript, React, Next.js, and real-world projects.",
                provider: {
                    "@type": "EducationalOrganization",
                    name: "MasterBrain",
                    url: SITE_URL
                }
            },
            {
                "@type": "Course",
                position: 3,
                name: "Professional IT Training",
                description: "Industry-ready IT courses covering web development, tools, and career guidance.",
                provider: {
                    "@type": "EducationalOrganization",
                    name: "MasterBrain",
                    url: SITE_URL
                }
            }
        ]
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
                name: "Courses",
                item: `${SITE_URL}/courses`
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
                        organizationJsonLd,
                        coursesJsonLd,
                        breadcrumbJsonLd
                    ])
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/course/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-8"
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/course/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/course/page.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(site)/course/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/course/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16dbdf3c._.js.map