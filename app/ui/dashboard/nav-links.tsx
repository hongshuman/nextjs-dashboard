"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';




// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon, },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];


export default function NavLinks() {
  const pathname = usePathname();
  // console.log(`h8n# ${pathname}`);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // <a
          <Link
            key={link.name}
            href={link.href}
            // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"

            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-gray-50 hover:bg-blue-300 hover:text-sky-100 text-[15px]': pathname !== link.href,
                'bg-blue-400 text-sky-100 text-[16px]': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            {/* <MapPinIcon className="w-4" /> */}
          </Link>
          // </a>
        );
      })}
    </>
  );
}
