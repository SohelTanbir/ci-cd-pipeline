export function filterSidebar(menu, permissions = []) {
  return menu
    .map((section) => {
      const filteredItems = section.items.filter((item) =>
        permissions.includes(item.key)
      );
      if (filteredItems.length === 0) return null;
      return { ...section, items: filteredItems };
    })
    .filter(Boolean);
}
