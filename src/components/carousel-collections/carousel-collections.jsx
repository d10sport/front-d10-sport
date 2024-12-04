/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import "./carousel-collections.css";

import item1 from "../../assets/img/photo_carousel_item1.png";
// import item2 from "../../assets/img/photo_carousel_item2.png";
// import item3 from "../../assets/img/photo_carousel_item3.png";
// import item4 from "../../assets/img/photo_carousel_item4.png";
// import item5 from "../../assets/img/photo_carousel_item5.png";

export default function CarouselCollections({ collections }) {
  const [items, setItems] = useState(collections);
  const refCarousel = useRef(null);

  useEffect(() => {
    setItems(collections);
  }, [collections]);

  useEffect(() => {
    if (items.length === 1|| refCarousel.current === null ) return;
    const elementosCarousel = refCarousel;
    const instance = M.Carousel.init(elementosCarousel.current, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false,
    });

    const autoPlay = setInterval(() => {
      instance.next();
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [items]);

  return (
    <section className="collection">
      <div className="container">
        <div ref={refCarousel} className="carousel">
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <h2 className="subtitulo">Colección {item.title}</h2>
              <img src={ item.photo != "" ? item.photo : item1 } alt={`Item ${item.title}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}