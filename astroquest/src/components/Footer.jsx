
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-8 border-t border-gray-700 mt-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">About AstroQuest</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            AstroQuest is your cosmic companion — helping young minds explore the wonders of our universe
            through interactive stories, quizzes, and stunning visuals. 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#moons" className="hover:text-yellow-400 transition">Moons with Story</a></li>
            <li><a href="#why-astroquest" className="hover:text-yellow-400 transition">Why AstroQuest?</a></li>
            <li><a href="#quizzes" className="hover:text-yellow-400 transition">Quizzes</a></li>
            <li><a href="#planets" className="hover:text-yellow-400 transition">Planets</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Connect</h3>
          <p className="text-sm mb-3 text-gray-400">Email: hello@astroquest.space</p>
          <div className="flex space-x-4 text-xl text-white">
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400">📸</a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-400">▶️</a>
            <a href="#" aria-label="GitHub" className="hover:text-yellow-400">💻</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} AstroQuest. All rights reserved.</p>
        <p>Made with 💫 for curious minds across the galaxy</p>
      </div>
    </footer>
  );
};

export default Footer;
