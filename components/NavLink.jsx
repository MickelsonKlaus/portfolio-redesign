import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

function NavLink({ href, exact, children, onClick = () => {}, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive && !exact) {
    props.className += " bg-accent";
  }

  return (
    <Link href={href} passHref={true}>
      <a {...props} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
