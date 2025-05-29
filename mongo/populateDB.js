db = db.getSiblingDB("next-database"); // This will create the database if it doesn't exist

db.items.insertMany([
  {
    _id: "149b",
    authorId: new ObjectId("66795afa3c6fb368844e1abb"),
    categoryId: new ObjectId("66795e2d664914b512067925"),
    title: "Fila Quarter Zip",
    content: "Great item of clothing, barely worn",
    price: 35,
    imgUrls: [
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1719232655589.jpg",
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1719232655591.jpg",
    ],
    datePosted: "2024-06-24T12:37:36.038Z",
    __v: 0,
  },
  {
    _id: "8b6f",
    authorId: new ObjectId("66795afa3c6fb368844e1abb"),
    categoryId: new ObjectId("66795e2d664914b512067925"),
    title: "Jeans",
    content: "Worn only a few times. In immaculate condition.",
    price: 70,
    imgUrls: [
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1722598732682.jpg",
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1722598732685.jpg",
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1722598732710.jpg",
    ],
    datePosted: "2024-08-02T11:38:52.968Z",
    __v: 0,
  },
  {
    _id: "d8e2",
    authorId: new ObjectId("66795afa3c6fb368844e1abb"),
    categoryId: new ObjectId("66795e2d664914b512067925"),
    title: "Ralph Lauren Oxford Shirt",
    content:
      "Iconic striped Ralph Lauren shirt in blue & white. Received as a gift in incorrect size, never worn.",
    price: 120,
    imgUrls: [
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1746455323842.jpg",
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1746455323843.28",
    ],
    datePosted: "2025-05-05T14:28:47.002Z",
    __v: 0,
  },
  {
    _id: "50a9",
    authorId: new ObjectId("66795afa3c6fb368844e1abb"),
    categoryId: new ObjectId("66795e2d664914b512067925"),
    title: "Frankie Flared Hybrid Dress",
    content:
      "Round neckline and cap sleeves. Midi length, knit upper, flared skirt",
    price: 60,
    imgUrls: [
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1746456444497.46",
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1746456444494.46",
    ],
    datePosted: "2025-05-05T14:47:25.217Z",
    __v: 0,
  },
  {
    _id: "99e2",
    authorId: new ObjectId("66795afa3c6fb368844e1abb"),
    categoryId: new ObjectId("66795e2d664914b512067925"),
    title: "Shirt 2",
    content: "Description",
    price: 60,
    imgUrls: [
      "https://swappable-img-bucket.s3.eu-west-2.amazonaws.com/1746527786283.28",
    ],
    datePosted: "2025-05-06T10:36:30.220Z",
    __v: 0,
  },
]);

db.users.insert({
    _id: ObjectId('682b49335af04858d81670ec'),
    name: 'John Doe',
    username: 'johndoe',
    password: '$2b$10$H54oz2PilOBcy2ZntFGgdOTxXlkHNuw1JOZDL/2F4eWJt47BTIwgq',
    __v: 0
});

print("Data has been written to the collection");
