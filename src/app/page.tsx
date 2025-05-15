import React from 'react';
import LiveTime from './components/LiveTime';

export default function Home() {
  // Get current date for the 'last updated' note
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="mx-auto w-full max-w-[1200px] min-h-[650px] flex flex-col justify-center items-center px-4 py-12 gap-10 text-white">
      {/* Header */}
      <div className="flex flex-col items-center text-white">
        <h1 className="text-5xl font-serif font-bold mb-2 lowercase flex items-center gap-2 text-white">hey! i'm raaga karumanchi <span role="img" aria-label="saturn">🪐</span></h1>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-lg text-white">rk3373@barnard.edu</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <span>new york city</span>
          <span>·</span>
          <LiveTime timezone="America/New_York" />
        </div>
      </div>

      {/* Childhood Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-xl">
        <img src="/dad_and_me.jpeg" alt="Raaga with her dad" className="object-cover w-full aspect-square rounded shadow transition-transform duration-300 ease-in-out hover:scale-105" />
        <img src="/baby_photo.jpeg" alt="Baby Raaga" className="object-cover w-full aspect-square rounded shadow transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>

      {/* Currently Section */}
      <section id="currently" className="w-full max-w-2xl text-white">
        <h2 className="text-2xl font-serif font-bold mb-4 lowercase flex items-center gap-2 text-white">🕰️ currently</h2>
        <div className="space-y-4 leading-relaxed text-white">
          <p className="text-white">
            i'm a second–year at columbia university studying neuroscience. i care about global health, public health literacy, and building things that make a difference. currently: reading, thinking, and exploring new ideas. i also like to sidequest often, exploring different paths and interests.
          </p>
          <ul className="list-disc list-inside pl-4 text-white">
            <li className="text-white">
              founder of <a href="https://donateessentials.org" target="_blank" rel="noopener" className="underline hover:opacity-80 text-white transition-opacity duration-300">donate essentials</a> (youth-led nonprofit in 30+ countries)
            </li>
            <li className="text-white">nih all of us research program (first place)</li>
            <li className="text-white">nih all of us research convention people's choice award</li>
            <li className="text-white">presented at the all of us research convention as a national institutes of health research scholar</li>
            <li className="text-white">former neuroscience club president (high school)</li>
          </ul>
          <p className="text-white">
            want to chat? <a href="mailto:rk3373@barnard.edu" className="underline hover:opacity-80 text-white transition-opacity duration-300">reach out</a>!
          </p>
          <p className="text-sm text-white/70 italic mt-6">
            latest thoughts scribbled on: {currentDate}
          </p>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="occasionally" className="w-full max-w-2xl text-white">
        <h2 className="text-2xl font-serif font-bold mb-6 lowercase flex items-center gap-2 text-white">✨ occasionally</h2>
        
        <div className="space-y-6 leading-relaxed text-white">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white/90">things i enjoy:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1 text-white/90">
              <li className="text-white">taekwondo 🥋</li>
              <li className="text-white">reading (always learning!) 📖</li>
              <li className="text-white">photography 📷</li>
              <li className="text-white">trying new foods 🍜</li>
              <li className="text-white">long walks, especially in new cities 🚶‍♀️</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white/90">a book that stuck with me:</h3>
            <p className="pl-4 text-white/90">
              <em>Maladies of Empire: How Colonialism, Slavery, and War Transformed Medicine</em> by Jim Downs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white/90">comfort movies:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1 text-white/90">
              <li className="text-white">Kabhi Khushi Kabhie Gham</li>
              <li className="text-white">The Titanic</li>
              <li className="text-white">Dookudu</li>
              <li className="text-white">Top Gun: Maverick</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white/90">favorite grocery store:</h3>
            <p className="pl-4 text-white/90">
              whole foods (a classic, i know!)
            </p>
          </div>

        </div>
      </section>

      {/* Two-Column Experience Section */}
      <section id="experience" className="w-full max-w-4xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Roles */}
          <div className="space-y-4 text-white">
            <div className="font-bold text-lg text-white">neuroscience @ columbia</div>
            <div className="font-bold text-lg text-white">founder @ donate essentials</div>
            <div className="font-bold text-lg text-white">nih research scholar</div>
          </div>
          {/* Right: Notes */}
          <div className="space-y-4 text-white">
            <ul className="list-disc list-inside pl-4 text-white">
              <li className="text-white">deferred sleep for science 💤</li>
              <li className="text-white">founded and lead a youth-led global nonprofit</li>
              <li className="text-white">passionate about science</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Photo Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
        <img src="/snowy_day.jpeg" alt="Raaga on a snowy day" className="object-cover w-full aspect-square rounded shadow transition-transform duration-300 ease-in-out hover:scale-105" />
        <img src="/amusement_park.jpeg" alt="Raaga at an amusement park" className="object-cover w-full aspect-square rounded shadow transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>

      {/* Social Links */}
      <div className="w-full flex flex-row flex-wrap gap-4 items-center justify-center text-base font-mono text-white">
        <a href="https://github.com/raagakarumanchi" target="_blank" rel="noopener" className="hover:underline text-white transition-opacity duration-300">github ↗</a>
        <span className="text-white">·</span>
        <a href="https://x.com/RaagaKarumanchi" target="_blank" rel="noopener" className="hover:underline text-white transition-opacity duration-300">𝕏 ↗</a>
        <span className="text-white">·</span>
        <a href="https://www.linkedin.com/in/raagakarumanchi/" target="_blank" rel="noopener" className="hover:underline text-white transition-opacity duration-300">linkedin ↗</a>
      </div>
    </div>
  );
}
