function Intro() {
  const myInfo = {
    name: "Daisy Mendoza",
    age: "17",
    grade: "12",
    school: "La Joya Community High School"
  };

  return (
    <div className="Intro">
      <h2>Student Information</h2>
      <ul>
        <li>Name: {myInfo.name}</li>
        <li>Age: {myInfo.age}</li>
        <li>Grade: {myInfo.grade}</li>
        <li>School: {myInfo.school}</li>
      </ul>
    </div>
  );
}

function Subjects() {
  const myClasses = {
    subject1: "College Algebra",
    subject2: "AP English Literature",
    subject3: "AP Government/Economics"
  };

  return (
    <div className="Subjects">
      <h2>Current Classes</h2>
      <ul>
        <li>Class 1: {myClasses.subject1}</li>
        <li>Class 2: {myClasses.subject2}</li>
        <li>Class 3: {myClasses.subject3}</li>
      </ul>
    </div>
  );
}

function Graduation() {
  const grad = {
    credits: "20",
    gradDate: "May 2023"
  };

  return (
    <div className="Graduation">
      <h2>Graduation Status</h2>
      <ul>
        <li>Credits: {grad.credits}</li>
        <li>Graduation Date: {grad.gradDate}</li>
      </ul>
    </div>
  );
}

function PageComponent() {
  return (
    <div className="PageComponent">
      <Intro />
      <Subjects />
      <Graduation />
    </div>
  );
}

export default PageComponent;