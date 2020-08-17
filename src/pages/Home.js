import getData from "../utils/getData";
import getPage from "../utils/getPage";
import getHash from "../utils/getHash";

const Home = {
  render: async () => {
    const id = getHash();
    const characters = await getData(id);
    const backButton = characters.info.prev
      ? getPage(characters.info.prev)
      : null;
    const nextButton = characters.info.next
      ? getPage(characters.info.next)
      : null;
    let view = `
    <div class="Characters">
    ${characters.results
      .map(
        (character) => `
      <article class="Character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}"/>
          <h2>${character.name}</h2>
        </a>
      </article>
    `
      )
      .join("")}
    </div>
    <div class="pagination">
        ${backButton ? `<a href="#/${backButton}/" class="btn">Back</a>` : ""}
        ${nextButton ? `<a href="#/${nextButton}/" class="btn">Next</a>` : ""}
    </div>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
