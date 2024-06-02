//scroll up button//
const btn = document.querySelector(".scroll-up-btn");

btn.addEventListener("click",  () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
