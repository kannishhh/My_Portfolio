const Footer = () => {
  return (
    <footer className="bg-white/20 dark:bg-black/30 backdrop-blur-lg py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-right">
          © {new Date().getFullYear()} Kanish Kainth | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
