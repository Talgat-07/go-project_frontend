import { useEffect, useState } from 'react';
import styles from './ScrollButton.module.scss';
import { ScrollUp } from '@/app/assets/icons/ScrollUp';

export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(50);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            const footerRect = footer?.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (footerRect && footerRect.top < windowHeight) {
                const offset = windowHeight - footerRect.top + 20;
                setBottomOffset(offset);
            } else {
                setBottomOffset(50);
            }

            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            onClick={scrollToTop}
            className={`${styles.mainToUpButton} ${isVisible ? styles.visible : ''}`}
            style={{ bottom: `${bottomOffset}px` }}
        >
            <div className={styles.toUpButton}>
                <ScrollUp />
            </div>
        </div>
    );
};
