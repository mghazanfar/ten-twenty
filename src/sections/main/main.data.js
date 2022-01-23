import big from '../../assets/big.png'
import car from '../../assets/car.png'
import burjKhalifa from '../../assets/b-k.png'
let defaultHeader =
  "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all";

let defaultSubheader =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus inodio vel risus dignissim interdum.";

let defaultAuthor = "U. R. Oliver";


export const data = [
  {
    title: "TRAVEL",
    variant: "center",
    img: big,
    header: defaultHeader,
    subheader: defaultSubheader,
    author: defaultAuthor,
  },
  {
    title: "DINE",
    subheader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.',
    author: defaultAuthor,
  },
  {
    title: "DINE",
    subheader: 'Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.',
    author: defaultAuthor,
  },
  {
    title: "OPEN HOUSE",
    subheader: 'Meals on wheels best food trucks in the UAE',
    author: defaultAuthor,
    inverse:true,
    img: car
  }, {
    title: "OPEN HOUSE",
    img: burjKhalifa,
    subheader: 'UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced',
    author: defaultAuthor,
    inverse:true,
  },
  {
    title: "DINE",
    subheader: 'World Expo in Dubai: MP delegation holds discussion over film city and institute',
    author: defaultAuthor,
  },
  {
    title: "DINE",
    subheader: 'UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced',
    author: defaultAuthor,
  },
  
];
