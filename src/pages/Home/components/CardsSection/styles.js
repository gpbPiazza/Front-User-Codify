import styled from "styled-components";
import MEDIA_MAX from "../../../../config/media";
import tipography from "../../../../config/typography";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  margin: 20px 0;
  font-family: ${tipography.Roboto};
  & > h1 {
    margin: 20px 0;
    font-size: calc(20px + (32 - 20) * ((100vw - 300px) / (1600 - 300)));
  }
  ${MEDIA_MAX} {
    justify-content: center;
  }
`;

export const CardsList = styled.ul`
  width: auto;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-shrink: 0;

  & > div {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }

  & > :last-child {
    margin-right: 0rem;
  }

  ${MEDIA_MAX} {
    justify-content: center;
    & > div {
      margin-right: 0em;
    }

    & > :last-child {
      margin-right: 0rem;
    }
  }
`;
