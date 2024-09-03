import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container } from "./styles";
import { useRef, useEffect } from 'react';

export function Carousel({ title, children }) {
    const carouselRef = useRef(null);

    function moveCarousel(side) {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        const scrollOffset = side === "left" ? -100 : 100;

        carousel.scrollLeft += scrollOffset;
    }

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        carousel.scrollLeft = 50;
    });

    return (
        <Container>
            <h2>{title}</h2>
            <div>
                <div className="carousel" ref={carouselRef}>
                    <div className="space"></div>
                    {children}
                    <div className="space"></div>
                </div>
                <div className='buttonLeft'>
                    <button onClick={() => moveCarousel("left")}>
                        <FiChevronLeft />
                    </button>
                </div>
                <div className='buttonRight'>
                    <button onClick={() => moveCarousel("right")}>
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </Container>
    )
};