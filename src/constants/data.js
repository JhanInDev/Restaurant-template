import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Gericht has been consistently acknowledged as one of the city\'s top fine dining establishments, recognized by esteemed publications and local industry experts.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Our culinary artistry has been applauded by renowned critics, who have bestowed upon us prestigious Critic\'s Choice Awards.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: ' We are honored to have received the AAA Hospitality Award, a testament to our commitment to provide exceptional service, attention to detail, and creating an unforgettable dining experiences.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Our visionary and accomplished chef has been bestowed the prestigious Outstanding Chef Award, a testament to their talent, unwavering dedication, and exceptional contributions to the culinary world.',
  },
];

export default { wines, cocktails, awards };