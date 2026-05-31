let slides = document.querySelectorAll(".slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 0;
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}
next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});
prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

let cards = [
    {
        title: "Never pay a fee again",
        text: "Send and receive for free. Keep the 2.9% and reinvest it back into your business.",
        img: "./assets/pay_1.png"
    },
    {
        title: "Put your 1099’s on autopilot",
        text: "We’ll automate your paperwork so tax time is simple, like it should be.",
        img: "./assets/pay_2.png"
    },
    {
        title: "Bank-to-bank in literally seconds",
        text: "Stripe deposits money instantly into your accounts. Never wait 3-5 business days again.",
        img: "./assets/pay_3.png"
    },
    {
        title: "Wherever you do business",
        text: "iMessage, Instagram, or even Discord - Pay meets you wherever you need it.",
        img: "./assets/pay_4.png"
    }
];

let cardsBox = document.querySelector(".main6_cards");

cards.forEach(card => {
    cardsBox.innerHTML += `
        <div class="main6_card">
            <div class="main6_card_content">
                <div class="main6_card_text">
                    <div class="main6_card_title">${card.title}</div>
                    <div class="main6_card_desc">${card.text}</div>
                </div>

                <div class="main6_card_img">
                    <img src="${card.img}" alt="">
                </div>
            </div>
        </div>
    `;
});