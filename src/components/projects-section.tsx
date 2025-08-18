import { AnimatedGroup } from "@/components/ui/animated-group";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Github } from "lucide-react"; // Import Github icon

const projectTestimonials = [
  {
    quote: '"Aya" is an innovative Quranic app that aims to facilitate daily interaction with the Book of God and deepen understanding of its meanings.',
    name: 'Ayah',
    designation: 'Flutter',
    src: '/assets/images/Ayah.jpeg',
    link: 'https://play.google.com/store/apps/details?id=com.abdullahbaghraib.ayah',
  },
  {
    quote: 'The official website for "Wafa Furniture" furniture company.',
    name: 'Wafa Furniture',
    designation: 'React , Tailwind CSS , Framer Motion',
    src: '/assets/images/wafa-furniture.jpeg',
    link: 'https://abdullah-baghraib.github.io/wafa-furniture/',
  },
  {
    quote: 'Ticket Station is a Flutter UI application for browsing movies and booking tickets.This project focuses on building a clean and modern user interface.',
    name: 'Ticket Station',
    designation: 'Flutter, Dart',
    src: '/assets/images/Ticket_station.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/ticket_station',
  },
  {
    quote: 'A beautiful Netflix-style mobile application built with Flutter. It uses The Movie Database (TMDB) API to fetch movie and TV show data. ',
    name: 'Netflix Clone',
    designation: 'Flutter, Dart, TMDB API',
    src: '/assets/images/Netflix_clone.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/netflix_clone',
  },
  {
    quote: 'A beautiful Spotify-style mobile application built with Flutter. ',
    name: 'Spotify clone',
    designation: 'Flutter, Dart,',
    src: '/assets/images/spotify_clone.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/spotify_clone',
  },
  {
    quote: 'application showcases an extensive list of artists along with detailed information about them.Whether you\'re an art enthusiast or just curious about your favorite artist.',
    name: 'Artist Hall',
    designation: 'Flutter, Dart',
    src: '/assets/images/Artist_hole.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/',
  },
  {
    quote: 'A simple Tic Tac Toe game built using Flutter as part of my learning journey in mobile development.',
    name: 'Tic Tac Toe',
    designation: 'Flutter, Dart',
    src: '/assets/images/x_o.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/x_o',
  },
  {
    quote: 'Memory Match Game is a simple and fun card-flipping game built with Flutter. The goal is to find and match all the pairs by flipping two cards at a time.',
    name: 'Memory Match Game',
    designation: 'Flutter, Dart',
    src: '/assets/images/Memory_match_game.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/memory_match_game',
  },
  {
    quote: 'A modern, responsive version of the classic Snake game built using Flutter.',
    name: 'Snake Game',
    designation: 'Flutter, Dart',
    src: '/assets/images/Snake_game.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/snake_game',
  },
  {
    quote: 'A mobile app built with Flutter that displays characters and episode information from the Rick and Morty universe using the Recommendation API.',
    name: 'Rick and Morty',
    designation: 'Flutter, Dart, The Rick and Morty API',
    src: '/assets/images/Rick_and_Morty.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/rick_and_morty_flutter',
  },
  {
    quote: 'Smart menu isa restaurant app that display restaurant and their menus and have some smart features like QR code scanning and menu display.',
    name: 'Smart Mune',
    designation: 'Flutter, Dart',
    src: '/assets/images/Smart_mune.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/',
  },
  {
    quote: 'Adrenaline is a mobile That provide workout tracking functionality. The app offers a user-friendly interface',
    name: 'Adrenaline',
    designation: 'Flutter, Dart, PHP, MySQL',
    src: '/assets/images/adrenalin.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/',
  },
  {
    quote: 'Bookly is a modern and intuitive Flutter app designed to showcase books related to computer science and programming.',
    name: 'Bookly',
    designation: 'Flutter, Dart',
    src: '/assets/images/Bookly.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/Bookly-App',
  },
  {
    quote: 'A minimal Flutter app that displays movies and their details using the TMDB API.',
    name: 'Movie App',
    designation: 'Flutter, Dart',
    src: '/assets/images/Movies_app.jpeg',
    link: 'https://github.com/Abdullah-Baghraib/movie_app',
  },
    {
    quote: 'platform that utilizes Stacks technology to expand the capabilities of Bitcoin. It allows for the development of decentralized applications (DApps), NFTs, and DeFi (Decentralized Finance) solutions on the Bitcoin blockchain.',
    name: 'coinfusion stacks bitcoin platform',
    designation: 'React , Tailwind CSS , Next.js',
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
            A selection of my most recent mobile development work and what my clients have to say about their experience.
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