import Header from '../../Sections/HeaderSection';
import BioHomePage from './BioSection';
import ExampleSection from './ExampleSection';
import FooterSection from '../../Sections/FooterSection';
import ImageSection from './ImageSection';

function HomePage() {
  return (
    <>
      <Header />
      <BioHomePage />
      <ExampleSection />
      <ImageSection />
      <FooterSection />
    </>
  );
}

export default HomePage;
