import React from 'react';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import DestinationSearch from '@/components/DestinationSearch/DestinationSearch';
import HowDoWeWork from '@/components/HowDoWeWork/HowDoWeWork';
import MapSection from '@/components/MapSection/MapSection';
import TripIdeas from '@/components/TravelIdeas/TripIdeas';
import HelpfulInformation from '@/components/HelpfulInformation/HelpfulInformation';
import Layout from './layout';  

const Page: React.FC = () => {
  return (
    <Layout> 
      <ImageSlider />
      <HowDoWeWork />
      <TripIdeas />
      <MapSection />

      <HelpfulInformation />
      <DestinationSearch />
    </Layout>
  );
};

export default Page;
