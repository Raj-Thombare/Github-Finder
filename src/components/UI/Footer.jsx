import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <div className="p-2.5 font-light text-xl text-center font-inter opacity-60">
      by{" "}
      <a
        href="https://github.com/Raj-Thombare"
        target="_blank"
        rel="noreferrer"
        ref={ref}
      >
        Raj Thombare
      </a>
    </div>
  );
});

export default Footer;
