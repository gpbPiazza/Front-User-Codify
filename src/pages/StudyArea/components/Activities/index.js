/* eslint-disable */
import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import Exercise from "../Exercise";
import Button from "../../../../components/Button";
import ClassVideo from "../ClassVideo";
import EndActivity from "./style";

export default function Activity({
  currentActivity,
  markedDone,
  setMarkedDone,
  concludeActivity,
  next
}) {
  const { exerciseDones, theoryDones, youtubeLink } = currentActivity;
  useEffect(() => {
    if (
      (!markedDone &&
        (
          exerciseDones &&
          exerciseDones.length > 0
        ) || (
          theoryDones && 
          theoryDones.length > 0
        )
      )
    ) {
      setMarkedDone(true);
    } else if (
      (markedDone &&
        (
          exerciseDones &&
          exerciseDones.length === 0
        ) || (
          theoryDones && 
          theoryDones.length === 0
        )
      )
    ) {
      setMarkedDone(false);
    }
  }, [currentActivity]);

  return (
    <>
      {currentActivity && youtubeLink ? (
        <ClassVideo link={youtubeLink} />
      ) : (
        <Exercise name={`Exercicio ${currentActivity.id}`} />
      )}
      <EndActivity checked={markedDone}>
        <FormControlLabel
          control={
            <Checkbox
              checked={markedDone}
              onChange={() => {
                setMarkedDone(!markedDone);
                concludeActivity(currentActivity);
              }}
            />
          }
          label="Marcar como concluido"
        />
        <Button text="Avancar >>" onClick={next} />
      </EndActivity>
    </>
  );
}