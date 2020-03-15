import PropTypes from "prop-types";
import Link from "next/link";

const NavButton = ({ href, title }) => (
  <Link href={href} as={href}>
    {title}
  </Link>
);

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavButton;
