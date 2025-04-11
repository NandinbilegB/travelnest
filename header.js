// components/Header.js

export default function Header() {
    return (
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">TravelNest</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Trips</a>
          <a href="#" className="hover:text-gray-300">Destinations</a>
          <a href="#" className="hover:text-gray-300">Companies</a>
          <a href="#" className="hover:text-gray-300">Plan your visit</a>
        </nav>
      </header>
    );
  }
  
  // components/Footer.js
  
  export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white p-6 text-sm">
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <span>Follow us on</span>
            <span className="flex space-x-2">
              <a href="#">📷</a>
              <a href="#">📘</a>
              <a href="#">🔗</a>
              <a href="#">▶️</a>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 w-full md:w-auto md:mt-0">
            <div>
              <h4 className="font-semibold">Top trips</h4>
              <a href="#">Trip 1</a><br/>
              <a href="#">Trip 2</a><br/>
              <a href="#">Trip 3</a>
            </div>
            <div>
              <h4 className="font-semibold">Top attractions</h4>
              <a href="#">Attraction 1</a><br/>
              <a href="#">Attraction 2</a><br/>
              <a href="#">Attraction 3</a>
            </div>
            <div>
              <h4 className="font-semibold">See reviews</h4>
              <a href="#">Review</a><br/>
              <a href="#">FAQ</a>
            </div>
            <div>
              <h4 className="font-semibold">Experience</h4>
              <a href="#">Mongolian 1</a><br/>
              <a href="#">Mongolian 2</a><br/>
              <a href="#">Mongolian 3</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">2025 © TravelNest LLC</p>
      </footer>
    );
  }
  
  // components/AboutSection.js
  
  export default function AboutSection({ title, text, image, reverse }) {
    return (
      <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4 my-8`}>
        <div className="md:w-1/2 p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p>{text}</p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={image} alt={title} className="rounded-xl shadow-md w-full" />
        </div>
      </section>
    );
  }
  
  // pages/index.js
  
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import AboutSection from '../components/AboutSection';
  
  export default function HomePage() {
    return (
      <div className="bg-white text-gray-800">
        <Header />
  
        <main className="max-w-6xl mx-auto px-4 py-8">
          <img src="/cover.jpg" alt="Cover" className="w-full rounded-xl mb-8" />
  
          <h1 className="text-3xl font-bold mb-4">About us</h1>
          <p className="mb-8">Visit Mongolia is more than just a tour company – we are your gateway to exploring Mongolia’s untamed beauty and cultural heritage.</p>
  
          <AboutSection
            title="Welcome to TravelNest"
            text="At TravelNest, we offer a unique blend of adventure, culture, and comfort, taking you through Mongolia's stunning landscapes."
            image="/about1.jpg"
          />
  
          <AboutSection
            title="Luxury Tours"
            text="Enjoy the best of Mongolia in luxurious and safe style. TravelNest offers private tours with a local guide, exceptional meals, and premium accommodations."
            image="/about2.jpg"
            reverse
          />
  
          <AboutSection
            title="Cultural Experiences"
            text="From eagle festivals to Naadam and the hospitality of nomadic families, we immerse you in the traditions and stories that shape Mongolian life."
            image="/about3.jpg"
          />
  
          <AboutSection
            title="Winter Adventures"
            text="Explore the winter wonderland with reindeer herders and experience frozen landscapes, dog sledding, and snow-covered steppe."
            image="/about4.jpg"
            reverse
          />
        </main>
  
        <Footer />
      </div>
    );
  }
  