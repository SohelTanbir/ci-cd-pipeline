"use client";

import usePermissionGuard from "@/app/hook/usePermissionGuard";


export default function AnalyticsPage() {
    usePermissionGuard(["analytics:view"]);

    return <div>Analytics Page</div>;
}
