const $ = (selector) => document.querySelector(selector);
const a =$(".positive-count");
const b =$(".negative-count");
const c =$(".neutral-count");
const d =$(".positive-sum");
const e =$(".negative-sum");
const btn6 =$('.btn6');

btn6.addEventListener('click', countNumbers);

function countNumbers() {
    const input = $(".numbers").value;
    const numbers = input.split(",").map(Number);

    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;
    let positiveSum = 0;
    let negativeSum = 0;

    for (const number of numbers) {
        if (number > 0) {
            positiveCount++;
            positiveSum += number;
        } else if (number < 0) {
            negativeCount++;
            negativeSum += number;
        } else {
            neutralCount++;
        }
    }

    a.innerText = positiveCount;
    b.innerText = negativeCount;
    c.innerText = neutralCount;
    d.innerText = positiveSum;
    e.innerText = negativeSum;
}