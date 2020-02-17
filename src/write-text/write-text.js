/**
 * We pass the actual <p></p> tag by searching it with
 * document.querySelector
 * @param {} p
 */
module.exports = (p) => {
   p.innerHTML = 'Hello! From hidden text ';
}
