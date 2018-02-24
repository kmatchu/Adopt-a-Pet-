module.exports = function(app){
var petsJSON = [
    {name: "Fluffy",
    type: "Dog",
    personality: "Playful",
    survey: ["5","5","1","5","1"],
    // picture: "<img src='../public/images/dog.png' />",
    picture: "<img src='http://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-Clipart.png' />"},
    {name: "Sandy",
    type: "Crab",
    personality: "Stoic",
    survey: ["1","1","1","1","5"],
    // picture: "<img src='../public/images/crab.png' />",
    picture: "<img src='http://images.clipartpanda.com/crab-clip-art-crab7.png' />"},
    {name: "George",
    type: "Giraffe",
    personality: "Weird",
    survey: ["3","3","5","3","3"],
    // picture: "<img src='../public/images/giraffe.png' />",
    picture: "<img src='http://moziru.com/images/frog-clipart-giraffe-clipart-5.png' />"}];

var userJSON = [
    {name: "Kevin",
    contact: "Phone",
    survey: ["5","5","1","5","1"]}
];

app.get("/api/pets", function (req, res) {
    res.json(petsJSON);
});

app.get("/api/users", function (req, res) {
    res.json(userJSON);
});

app.post("/api/users", function (req, res) {
    console.log(req.body);
    userJSON.push(req.body);
    res.json(userJSON);
});     };