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
    "https://i.pinimg.com/originals/8e/07/80/8e078013204d0cc9876e9edbb1fd3f85.jpg",
    "https://www.boston-discovery-guide.com/image-files/x800-st-anthonys-feast-todd-van-hoosear-flickr-3x2.jpg.pagespeed.ic.FAuIkvSQy5.jpg",
    "https://blog.thebostoncalendar.com/wp-content/uploads/2017/10/15337347_656864124494456_5449822717006053376_n-1024x765.jpg",
    "https://bdc2020.o0bc.com/wp-content/uploads/2021/07/bosten-may-6-2021-60e6713b1ee1b-768x432.jpg?width=900",
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
                height={600}
              />
            </div>
          ))}
        </EnhancedSlider>
      </SliderWrapper>
    </>
  );
}
