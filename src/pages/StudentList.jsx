import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
  const {
    students,
    favourites,
    addToFavourite,
  } = useContext(StudentContext);

  // Check whether student is already favourite
  const isFavourite = (studentId) => {
    return favourites.some(
      (student) => student.id === studentId
    );
  };

  return (
    <div className="page">

      <div className="container">

        <div className="page-heading">

          <h1>Student List</h1>

          <p>
            Select your favourite students
          </p>

        </div>

        <div className="student-grid">

          {students.map((student) => (

            <div
              className="student-card"
              key={student.id}
            >

              <div className="student-avatar">
                {student.name.charAt(0)}
              </div>

              <h2>
                {student.name}
              </h2>

              <p className="roll-number">
                Roll Number:
                <strong>
                  {student.rollNumber}
                </strong>
              </p>

              <button
                onClick={() =>
                  addToFavourite(student)
                }
                disabled={isFavourite(student.id)}
                className={
                  isFavourite(student.id)
                    ? "favourite-btn added"
                    : "favourite-btn"
                }
              >
                {isFavourite(student.id)
                  ? "✓ Added to Favourite"
                  : "♡ Add to Favourite"}
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default StudentList;