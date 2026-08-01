"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function usePermissionGuard(requiredPermissions = []) {
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("permissions");
        const userPermissions = stored ? JSON.parse(stored) : [];

        const hasPermission = requiredPermissions.every(p =>
            userPermissions.includes(p)
        );

        if (!hasPermission) {
            router.replace("/unauthorized"); // or any fallback route
        }
    }, [requiredPermissions, router]);
}
