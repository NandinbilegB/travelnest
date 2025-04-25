// pages/select/duration.tsx
import { useRouter } from 'next/router';
import DurationSelector from '@/components/DurationSelector/DurationSelector';

const DurationSelectorPage = () => {
  const router = useRouter();
  const { region, season, size } = router.query; // Get the region, season, and size from the URL

  // Handle the selection of duration
  const handleSelect = (duration: string) => {
    router.push({
      pathname: '/trip-suggestions',
      query: { region, season, size, duration }, // Pass all the selections to the trip suggestions page
    });
  };

  return (
    <div>
      <DurationSelector onSelect={handleSelect} />
    </div>
  );
};

export default DurationSelectorPage;
