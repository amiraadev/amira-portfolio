import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Link(page, selectedPage, setSelectedPage ) {
    
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    React.createElement(AnchorLink, {
      className: `${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`,
      href: `#${lowerCasePage}`,
      onClick: () => setSelectedPage(lowerCasePage)
    }, page)
  );
}

export default Link;