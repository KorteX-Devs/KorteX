export function handleScroll(id: string) {
  let topValue = document.querySelector(id)?.getBoundingClientRect().top;
  const newTopValue = topValue !== undefined ? topValue - 100 : undefined;
  window.scrollTo({
    top: newTopValue,
    behavior: "smooth",
  });
}
