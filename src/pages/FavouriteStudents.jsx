import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const FavouriteStudents = () => {
  const {
    favourites,
    removeFromFavourite,
  } = useContext(StudentContext);

  return (
    <div className="page">

      <div className="container">

        <div className="page-heading">

          <h1>Favourite Students</h1>

          <p>
            Your favourite students
          </p>

        </div>

        {favourites.length === 0 ? (

          <div className="empty-message">

            <div className="empty-icon">
              ♡
            </div>

            <h2>
              No favourite students added yet
            </h2>

            <p>
              Go to the Student List and add your favourite students.
            </p>

          </div>

        ) : (

          <div className="student-grid">

            {favourites.map((student) => (

              <div
                className="student-card"
                key={student.id}
              >

                <div className="student-avatar favourite-avatar">
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
                    removeFromFavourite(student.id)
                  }
                  className="remove-btn"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default FavouriteStudents;