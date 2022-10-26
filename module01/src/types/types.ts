export interface ICard {
  _id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export type PersconCard = {
  name: string;
  surname: string;
  date: string;
  file: string;
  country: string;
};
