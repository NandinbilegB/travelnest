// components/TripSuggestion/TripSuggestion.tsx
import { FC } from 'react';
import Image from 'next/image';
import styles from './TripSuggestions.module.css'

interface TripSuggestionProps {
  region: string;
  season: string;
  size: string;
  duration: string;
}

const TripSuggestion: FC<TripSuggestionProps> = ({ region, season, size, duration }) => {
  // Үндсэн аялалын санал үүсгэх функц
  const generateSuggestions = () => {
    // Гурван аялалын санал гаргах
    const suggestions = [
      {
        title: 'Uvurkhangai Summer Adventure',
        description: `Explore the beauty of Uvurkhangai in the summer. Perfect for a ${size}-person group with activities like hiking, river rafting, and cultural experiences.`,
        imageUrl: '/picture-source/uvurkhangai.jpg',
        link: '/trips/uvurkhangai'
      },
      {
        title: 'Bagts Winter Expedition',
        description: `Experience the pristine winter landscapes of Bagts. A perfect trip for ${size} people, including snowshoeing, wildlife watching, and cozy accommodations.`,
        imageUrl: '/picture-source/bagts.jpg',
        link: '/trips/bagts'
      },
      {
        title: 'Nomadic Life in Central Mongolia',
        description: `Immerse yourself in the unique culture of Mongolia's nomadic lifestyle. A great trip for ${size} people to experience traditional gers, horseback riding, and the vast open landscapes.`,
        imageUrl: '/picture-source/extreme1.jpeg',
        link: '/trips/nomadic-life'
      }
    ];

    return suggestions;
  };

  const suggestions = generateSuggestions(); // Аялалын саналуудыг авна

  return (
    <div>
      <h2>Your Suggested Trips</h2>
      <p>{`Based on your choices: Region: ${region}, Season: ${season}, Group Size: ${size}, Duration: ${duration}`}</p>
      <div className={styles['trip-list']}>
  {suggestions.map((trip, index) => (
    <div key={index} className={styles['trip-card']}>
      <h3>{trip.title}</h3>
      <p>{trip.description}</p>
      <Image src={trip.imageUrl} alt={trip.title} width={500} height={300} />
      <a href={trip.link} className={styles['btn']}>
        Plan This Trip
      </a>
    </div>
  ))}
</div>
</div>
  );
};

export default TripSuggestion;
