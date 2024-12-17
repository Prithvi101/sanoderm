import Link from "next/link";
import * as React from "react";

export default function NavigationItem({
  text,
  bgColor,
  hasDropdown = false,
  dropDownItems = [],
  link,
}) {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Handlers to control the dropdown visibility
  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleFocus = () => setIsDropdownOpen(true);
  const handleBlur = () => setIsDropdownOpen(false);

  // Ensuring the dropdown only shows when hovering or focusing on the item
  const dropdownContent = (
    <div
      className={"absolute     top-[100%]  py-2 z-10 left-0 w-full " + bgColor}
    >
      <div>
        {dropDownItems.map((item, index) => (
          <Link href={item?.link} key={index}>
            <div
              key={index}
              className="py-2 px-4 hover:bg-blue-900 cursor-pointer"
            >
              {item?.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`relative flex grow shrink gap-2 self-stretch px-7 py-5 h-16 my-auto whitespace-nowrap cursor-pointer ${bgColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0} // Makes it focusable for keyboard navigation
    >
      <Link href={link || "/"}>
        <div className="grow">{text}</div>
      </Link>
      {/* Dropdown indicator (arrow icon) */}
      {hasDropdown && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f80aea61178b1400c8e8229198d3003ae6eab1dcc923120a06ed27785d38322?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt="dropdown icon"
          className="object-contain shrink-0 self-start mt-2 w-2.5 aspect-square"
        />
      )}

      {/* Show dropdown if needed */}
      {hasDropdown && isDropdownOpen && dropdownContent}
    </div>
  );
}
