const Navbar = () => {
  const students = [
    {
      name: "Nate River",
      age: 20,
      sex: "M",
    },
    {
      name: "L Lawliet",
      age: 24,
      sex: "M",
    },
    {
      name: "Jane Doe",
      age: 19,
      sex: "F",
    },
  ];
  event.preventDefault();
  const student = students.map((student) => (
    <li>
      <p>
        <b>Name: {student.name}</b>
      </p>
      <p>Age: {student.age}</p>
      <p>Sex: {student.sex}</p>
    </li>
  ));

  const maleStudent = students.filter((student) => student.sex === "M");

  const s = maleStudent.map((s, index) => (
    <li key={index} className="list-group-item">
      <p>
        <b>Name: {s.name}</b>
      </p>
      <p>Age: {s.age}</p>
      <p>Sex: {s.sex}</p>
    </li>
  ));
  console.log(s);

  return <ul className="list-group">{s}</ul>;
};

export default Navbar;
