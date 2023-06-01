export default function isElementInViewport (element) {
    const rect = element?.getBoundingClientRect() || {top: 0, left: 0, bottom: 0, right: 0};
    return (
        (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}