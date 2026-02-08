
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm">
          © 2026 <span className="text-gray-300 font-medium">IIT BHU</span>
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {/* Mail */}
          <a
            href="mailto:astronomyclub.iitbhu@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <MailIcon />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/astro.iitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/astro.iitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/astroiitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

const iconClass = "w-6 h-6 fill-current";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8l-8 5-8-5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.98h4.56V24H.22V8.98zM7.98 8.98h4.37v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V24H7.98V8.98z" />
  </svg>
);

export default Footer;
