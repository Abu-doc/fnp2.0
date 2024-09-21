// src/components/Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownItem = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const containerClass = (title) => {
    switch (title) {
      case 'Occasion':
      case 'Global':
      case 'More Gifts':
      case 'Combos':
        return 'right-3 w-96';
      default:
        return 'w-96 bg-white';
    }
  };

  const titleClass = (title) => {
    switch (title) {
      case 'On Trend':
      case 'More Gifts':
        return 'w-16 text-gray-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center px-4 py-2 text-xs hover:bg-gray-100 rounded-md font-bold lg-xl:px-0">
        <span className={titleClass(title)}>{title}</span>
        <IoIosArrowDown className="ml-2" />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className={`absolute z-10 bg-white border border-gray-300 shadow-lg rounded-md transition-opacity duration-300 ${containerClass(title)}`}
        >
          <div className="flex divide-x divide-gray-200">
            {links.map((column, index) => (
              <div key={index} className="px-4 py-2 w-1/3">
                <h3 className={`text-sm font-semibold mb-2 ${titleClass(title)}`}>
                  {column.title}
                </h3>
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={`/generic/${link.href.split('/').pop()}`} // Correct link path
                    className="block py-1 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Dropdown = () => {
  const dropdowns = [
    {
      title: 'Christmas',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'On Trend',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Birthday',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Anniversary',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Cakes',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Flowers',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Personalized',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Plants',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Chocolates',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Combos',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'More Gifts',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Occasion',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    {
      title: 'Global',
      links: [
        { title: 'Column 1', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 2', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
        { title: 'Column 3', links: [{ href: '/link1', text: 'Link 1' }, { href: '/link2', text: 'Link 2' }, { href: '/link3', text: 'Link 3' }, { href: '/link4', text: 'Link 4' }] },
      ],
    },
    // Add more dropdowns here as needed
  ];

  return (
    <div className="relative flex items-center justify-evenly py-1 px-20 border-b-2 lg-xl:px-0 md-lg:px-0 md-lg:grid md-lg:grid-cols-5">
      {dropdowns.map((dropdown, index) => (
        <DropdownItem
          key={index}
          title={dropdown.title}
          links={dropdown.links}
        />
      ))}
    </div>
  );
};

export default Dropdown;
