const express = require("express");
const app = express();
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 4, name: "course3" },
];

app.use(express.json());

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("ID Not Found");
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    return res
      .status(400)
      .send("invalid name(should be at least 3 characters long)");
  }
  // console.log(req.body.name);
  const course = { id: courses.length + 1, name: req.body.name };

  courses.push(course);
  res.send(courses);
});

app.put("/api/courses/:id", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    return res
      .status(400)
      .send("invalid name(should be at least 3 characters long)");
  }
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  course.name = req.body.name;
  res.send(courses);
});

app.delete("/api/courses/:id", (req, res) => {
  courses.splice(req.params.id - 1, 1);
  res.send(courses);
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
