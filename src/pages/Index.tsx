import CustomNav from "../components/CustomNav";
import 'swiper/swiper-bundle.css';
import IndexCarousel from "../components/IndexCarousel";

export default function Home() {
  return (
    <div className="relative">
      <CustomNav className="absolute top-0 left-0 w-full z-10" activieKey="home"/>
      <IndexCarousel />
    </div>
  );
}