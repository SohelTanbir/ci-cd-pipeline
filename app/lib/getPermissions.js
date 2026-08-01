// lib/getPermissions.js
export async function getPermissions(userId) {
    const dummyDB = {
        "1": ["dashboard", "analytics", "orders"],
        "2": ["users", "profile", "security"],
    };

    return dummyDB[userId] || [];
}
