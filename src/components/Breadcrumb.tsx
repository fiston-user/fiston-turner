import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link
            href="/"
            className="dark:text-gray-400   dark:hover:text-white hover:text-gray-500"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-gray-500">/</span>
            {index === items.length - 1 ? (
              <span className="dark:text-white text-black">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-black  dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
