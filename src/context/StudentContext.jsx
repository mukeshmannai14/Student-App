import { createContext, useState } from "react";

export const StudentContext = createContext();

const studentsData = [
  {
    id: 1,
    name: "Mukesh Kanna",
    rollNumber: "STU001",
  },
  {
    id: 2,
    name: "Jagdeeshwaran",
    rollNumber: "STU002",
  },
  {
    id: 3,
    name: "Rupesh",
    rollNumber: "STU003",
  },
  {
    id: 4,
    name: "Chiyan Vikram",
    rollNumber: "STU004",
  },
  {
    id: 5,
    name: "Joseph Vijay",
    rollNumber: "STU005",
  },
  {
    id: 6,
    name: "Ajith Kumar",
    rollNumber: "STU006",
  },
];

const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Add student to favourites
  const addToFavourite = (student) => {
    const alreadyExists = favourites.some(
      (item) => item.id === student.id
    );

    if (!alreadyExists) {
      setFavourites([...favourites, student]);
    }
  };

  // Remove student from favourites
  const removeFromFavourite = (studentId) => {
    setFavourites(
      favourites.filter(
        (student) => student.id !== studentId
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students: studentsData,
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;