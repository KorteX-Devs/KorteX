export function handleContatoClick() {
  const telefones = [5561999440733, 5561999818682];
  let num = Math.round(Math.random());
  window.open(
    // 5561999440733
    `https://wa.me/${telefones[num]}?text=Tenho%20interesse%20em%20fazer%20um%20orçamento`,
    "_blank"
  );
}
