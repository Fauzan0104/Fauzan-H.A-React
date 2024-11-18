export default function getAllProducts() {
  return [
    // Glove Products
    {
      id: 'GLV-RIV-001',
      slug: 'rival-boxing-glove',
      name: 'RIVAL RFX-GUERRERO SPARRING GLOVES – HDE-F -Blue',
      category: 'Glove',
      price: 1_200_000,
      stock: 20,
      imageUrl: '/assets/images/rival-boxing-glove.jpg',
      description: `Rival Boxing Gloves are designed for optimal comfort and protection, offering excellent wrist support for training and competition.`
    },
    {
      id: 'GLV-GRT-002',
      slug: 'grants-boxing-glove',
      name: 'Grant Pro Punchers Gloves Custom white purple tosca',
      category: 'Glove',
      price: 2_500_000,
      stock: 15,
      imageUrl: '/assets/images/grants-boxing-glove.jpg',
      description: `Grants Boxing Gloves provide top-tier quality, offering superior padding and durability for professional use.`
    },

    // Sepatu Products
    {
      id: 'SPT-NIK-003',
      slug: 'nike-boxing-shoe',
      name: 'Nike Boxing shoes Hyper KO 2-White crimson',
      category: 'Sepatu',
      price: 1_800_000,
      stock: 30,
      imageUrl: '/assets/images/nike-boxing-shoe.jpg',
      description: `Nike Boxing Shoes are crafted for agility and grip, helping fighters stay light on their feet during intense matches.`
    },
    {
      id: 'SPT-HOK-004',
      slug: 'hook-boxing-shoe',
      name: 'Hook Boxing Shoe',
      category: 'Sepatu',
      price: 1_700_000,
      stock: 25,
      imageUrl: '/assets/images/hook-boxing-shoe.jpg',
      description: `Hook Boxing Shoes combine style and functionality, featuring lightweight materials and excellent support for boxers.`
    },

    // Handwrap Products
    {
      id: 'HND-HWK-005',
      slug: 'hawk-handwrap',
      name: 'Handwrap Rival Guerrero 5 M-Red',
      category: 'Handwrap',
      price: 150_000,
      stock: 50,
      imageUrl: '/assets/images/hawk-handwrap.jpg',
      description: `Hawk Handwraps provide superior comfort and wrist stability, essential for both training and matches.`
    },
    {
      id: 'HND-HAY-006',
      slug: 'hayabusa-handwrap',
      name: 'Cleto Reyes Cotton Tape Handwraps-Hitam',
      category: 'Handwrap',
      price: 200_000,
      stock: 40,
      imageUrl: '/assets/images/hayabusa-handwrap.jpg',
      description: `Hayabusa Handwraps are engineered for durability and support, ensuring the best protection for every punch.`
    },
  ];
}
