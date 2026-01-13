import { AnimatedGroup } from "@/components/ui/animated-group";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Github } from "lucide-react"; // Import Github icon

const projectTestimonials = [
  {
    quote: 'An innovative Quranic application designed to facilitate daily engagement with the Holy Quran and deepen the understanding of its meanings through interactive features.',
    name: 'Ayah',
    designation: 'Flutter',
    src: '/assets/images/Ayah.jpeg',
    link: 'https://play.google.com/store/apps/details?id=com.abdullahbaghraib.ayah',
  },
  {
    quote: 'A comprehensive currency converter and gold price monitoring application. Features real-time exchange rates for global currencies and live gold price updates, providing users with accurate financial data on the go.',
    name: 'Forexly Mobile App',
    designation: 'Flutter, Dart',
    src: '/assets/images/Forexly-app.png',
    link: 'https://play.google.com/store/apps/details?id=com.abdullahbaghraib.forexly',
  },
  {
    quote: 'The official e-commerce platform for Wafa Furniture, showcasing a wide range of premium furniture. Built with React and Framer Motion for a seamless, interactive browsing experience.',
    name: 'Wafa Furniture',
    designation: 'React, Tailwind CSS, Framer Motion',
    src: '/assets/images/wafa-furniture.jpeg',
    link: 'https://abdullah-baghraib.github.io/wafa-furniture/',
  },
  {
    quote: 'A modern currency conversion web application engineered with React, TypeScript, and Vite. Delivers real-time exchange rate data in a high-performance, responsive user interface.',
    name: 'Forexly',
    designation: 'React, Tailwind CSS, Next.js',
    src: '/assets/images/Forexly.jpeg',
    link: 'https://forexly.vercel.app/',
  },
  {
    quote: 'A sleek movie browsing and ticket booking application. Focuses on delivering a clean, modern user experience for discovering films and securing reservations.',
    name: 'Ticket Station',
    designation: 'Flutter, Dart',
    src: '/assets/images/Ticket_station.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/ticket_station',
  },
  {
    quote: 'A high-fidelity Netflix clone developed with Flutter, integrating the TMDB API to provide a comprehensive library of movies and TV shows with a polished, streaming-service-grade interface.',
    name: 'Netflix Clone',
    designation: 'Flutter, Dart, TMDB API',
    src: '/assets/images/Netflix_clone.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/netflix_clone',
  },
  {
    quote: 'A visually rich Spotify clone built with Flutter, replicating the core music streaming experience with a focus on fluid animations, responsive design, and intuitive navigation.',
    name: 'Spotify Clone',
    designation: 'Flutter, Dart',
    src: '/assets/images/spotify_clone.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/spotify_clone',
  },
  {
    quote: 'A dedicated platform for art enthusiasts to explore an extensive catalog of artists. Provides detailed biographies and galleries, creating an immersive experience for discovering creative talent.',
    name: 'Artist Hall',
    designation: 'Flutter, Dart',
    src: '/assets/images/Artist_hole.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/',
  },
  {
    quote: 'A classic implementation of Tic-Tac-Toe developed with Flutter, demonstrating state management fundamentals and clean interactive UI design principles.',
    name: 'Tic Tac Toe',
    designation: 'Flutter, Dart',
    src: '/assets/images/x_o.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/x_o',
  },
  {
    quote: 'An engaging memory training game built with Flutter. Challenges users to match card pairs, featuring smooth flip animations and logic-driven gameplay.',
    name: 'Memory Match Game',
    designation: 'Flutter, Dart',
    src: '/assets/images/Memory_match_game.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/memory_match_game',
  },
  {
    quote: 'A modern interpretation of the classic Snake game, re-engineered with Flutter to offer responsive gameplay and updated visuals while preserving the nostalgic core mechanics.',
    name: 'Snake Game',
    designation: 'Flutter, Dart',
    src: '/assets/images/Snake_game.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/snake_game',
  },
  {
    quote: 'A Rick and Morty character encyclopedia app fetching data from the official API. Showcases character details, episodes, and locations in a clean, navigable interface.',
    name: 'Rick and Morty Encyclopedia',
    designation: 'Flutter, Dart, Rick and Morty API',
    src: '/assets/images/Rick_and_Morty.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/rick_and_morty_flutter',
  },
  {
    quote: 'A digital smart menu solution for restaurants. Features QR code scanning for instant access, allowing patrons to browse interactive menus and view dish details seamlessly.',
    name: 'Smart Menu',
    designation: 'Flutter, Dart',
    src: '/assets/images/Smart_mune.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/',
  },
  {
    quote: 'A comprehensive workout tracking application designed for fitness enthusiasts. Features a user-friendly interface for logging exercises, monitoring progress, and maintaining workout history.',
    name: 'Adrenaline',
    designation: 'Flutter, Dart, PHP, MySQL',
    src: '/assets/images/adrenalin.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/',
  },
  {
    quote: 'A specialized book discovery app for computer science and programming resources. Features a modern UI for browsing titles, reading summaries, and finding relevant technical literature.',
    name: 'Bookly',
    designation: 'Flutter, Dart',
    src: '/assets/images/Bookly.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/Bookly-App',
  },
  {
    quote: 'A minimalist movie discovery application utilizing the TMDB API. Focuses on essential details and clean design to provide a distraction-free movie browsing experience.',
    name: 'Movie App',
    designation: 'Flutter, Dart',
    src: '/assets/images/Movies_app.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/movie_app',
  },
  {
    quote: 'A blockchain platform leveraging Stacks technology to unlock Bitcoin\'s potential. Enables the development of DApps, NFTs, and DeFi solutions directly secured by the Bitcoin network.',
    name: 'Coinfusion Stacks Platform',
    designation: 'React, Tailwind CSS, Next.js',
    src: '/assets/images/coinfusion_stacks_bitcoin_platform.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/coinfusion_stacks_bitcoin_platform',
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-background py-8 sm:py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedGroup preset="fade" className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto px-2">
            A selection of my most recent development work.
          </p>
        </AnimatedGroup>

        <AnimatedTestimonials 
          testimonials={projectTestimonials} 
          autoplay={true} 
          className="rounded-xl overflow-hidden shadow-sm" 
        />
      </div>
    </section>
  );
}