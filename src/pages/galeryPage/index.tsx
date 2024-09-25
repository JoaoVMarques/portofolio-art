import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Header from '../../Sections/HeaderSection';
import FooterSection from '../../Sections/FooterSection';

const images = [
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=201',
  'https://picsum.photos/200/300?image=1001',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
];

function GaleryPage() {
  return (
    <>
      <Header />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
      >
        <Masonry gutter='4px'>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: '100%', display: 'block' }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <FooterSection />
    </>
  );
}

export default GaleryPage;
