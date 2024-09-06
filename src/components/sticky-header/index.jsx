import PropTypes from "prop-types";
export default function StickyHeader({ title, children }) {
  return (
    <header className="sticky border-b border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md">
      {children}
    </header>
  );
}

StickyHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
