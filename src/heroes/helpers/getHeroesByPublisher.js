import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};

export const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

export const getHeroesByName = (name = "") => {
  name = name.toLowerCase().trim();

  if (name.length == 0) return [];

  return heroes.filter(
    (hero) =>
      hero.superhero.toLowerCase().includes(name) ||
      hero.alter_ego.toLowerCase().includes(name)
  );
};
