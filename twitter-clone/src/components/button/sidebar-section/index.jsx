import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function SidebarSection({ title, children, more = "false" }) {
  return (
    <section className="bg-[#16181c] overflow-hidden mb-4 rounded-2xl border border-[#16181c]">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]">
        {title}
      </h5>
      <div className="grid">{children}</div>

      {more && (
        <Link
          to={more}
          className="h-[52px] flex items-center px-4 text-[#1d9bf0] text-[15px] hover:bg-white/[0.03] transition-colors"
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
