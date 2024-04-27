export const observeAll = (elements, onVisible, threshold = 0.5) => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                onVisible(entry.target);
            }
        });
    }, {
        threshold: threshold,
    });


    elements.forEach((element) => {
        io.observe(element);
    });
};