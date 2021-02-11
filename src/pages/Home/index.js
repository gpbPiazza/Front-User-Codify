/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../contexts/UserContext";
import CoursesService from "../../services/CoursesService";
import SignIn from "../SignIn";
import CardsSection from "./components/CardsSection";
import SnippetSection from "./components/SnippetSection";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, MainContent } from "./styles";

export default function Home() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [coursesStarted, setCoursesStarted] = useState([]);
  const [courses, setCourses] = useState([]);

  if (!user) {
    history.push("/");
    return <SignIn />;
  }

  const getAllCoursesStarted = async () => {
    const data = await CoursesService.getAllCoursesStarted(user.token);
    if (data) {
      setCoursesStarted(data);
    } else {
      alert("Erro ao carregar cursos");
    }
  };

  const getAllCoursesNotStarted = async () => {
    const data = await CoursesService.getAllCoursesNotStarted(user.token);
    if (data) {
      setCourses(data);
    } else {
      alert("Erro ao carregar cursos");
    }
  };

  useEffect(async () => {
    getAllCoursesStarted();
    getAllCoursesNotStarted();
  }, []);

  return (
    <Container>
      <Header />
      <WelcomeBanner isSomeCourseStarted={coursesStarted.length === 0} />
      <MainContent>
        {coursesStarted.length === 0 ? (
          <>
            <CardsSection
              title="Experimente nossos outros cursos"
              courses={courses}
            />
          </>
        ) : (
          <>
            <SnippetSection
              title="Continue seu curso atual"
              course={coursesStarted[0]}
            />

            <CardsSection
              title="Meus cursos em andamento"
              courses={coursesStarted}
            />
            <CardsSection
              title="Experimente nossos outros cursos"
              courses={courses}
            />
          </>
        )}
      </MainContent>
    </Container>
  );
}