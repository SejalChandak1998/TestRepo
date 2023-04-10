import Slider from "react-slick";
import { EnhancedSlider, SliderWrapper } from "./banner.style";

export function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const bannerImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F485627899%2F1198813429483%2F1%2Foriginal.20230405-034510?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C51%2C2500%2C1250&s=6862e207ac508f914a9458903fab6a00",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F486741749%2F1471147113683%2F1%2Foriginal.20230406-091529?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C960%2C480&s=a15ca60072bea3aa6e0855f2b161beda",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F481188509%2F1199014074233%2F1%2Foriginal.20230330-062019?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=adbf2ece687dd4b93bb9076c3c36aa60",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F486741749%2F1471147113683%2F1%2Foriginal.20230406-091529?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C960%2C480&s=a15ca60072bea3aa6e0855f2b161beda",
  ];

  return (
    <>
      <SliderWrapper>
        <EnhancedSlider {...settings}>
          {bannerImages.map((imageUrl) => (
            <div key={imageUrl}>
              <img
                src={imageUrl}
                style={{ zIndex: 33 }}
                alt="Banner"
                height={500}
              />
            </div>
          ))}
        </EnhancedSlider>
      </SliderWrapper>
    </>
  );
}
