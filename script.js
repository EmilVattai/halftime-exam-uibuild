
const createResponseFormHtml = () => {
  return `
    <form>
      <h1>Visszajelzés</h1>
      <input type="text" class="input" placeholder="Tárgy"></input>
      <textarea class="input" placeholder="Megjegyzés"></textarea>
      </input>
      <div class="checkbox-container">
        <input type="checkbox" name="terms">
        <label for="terms">Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót</u></label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" name="newsletter">
        <label for="newsletter">Szeretnék hírlevelet kapni</label>
      </div>
      <button>Mentés</button>
    </form>
  `
}

const loadEvent =  () => {
  document.querySelector("#root").insertAdjacentHTML("beforeend", createResponseFormHtml());
}

window.addEventListener("load", loadEvent);