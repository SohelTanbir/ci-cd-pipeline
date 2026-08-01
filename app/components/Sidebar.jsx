// components/Sidebar.js
import Link from "next/link";

export default function Sidebar({ menu }) {
  return (
    <aside className="w-64 h-screen bg-blue-900 p-4">
      <nav>
        {menu.map((section) => (
          <div key={section.section} className="mb-6">
            <h4 className="font-semibold text-gray-500 uppercase text-sm mb-2">
              {section.section}
            </h4>
            <ul>
              {section.items.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="block py-1 px-2 hover:bg-orange-500 hover:text-white rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
