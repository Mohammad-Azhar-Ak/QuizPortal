import * as React from "react";
import { Grid } from "@mui/material";
import { CustomButton } from "../../../shared";
import { QuizCardComponent } from ".";
import { AnswerDialog } from "./";

const QuizComponent = ({ data, onChangeValue, answers, submitQuiz, submitResponse, handleClose, handleOpen }) => {

  return (
    <>
      <Grid container >
        <Grid item lg={12}>
          <h1>Questions </h1>
        </Grid>
        <Grid item md={12} margin={5}>
          {data.length ?
            data.map((item, index) =>
              <QuizCardComponent
                index={index}
                data={item}
                onChangeValue={onChangeValue}
                answers={answers}
              />)
            : "No Question"}
        </Grid>
      </Grid>
      <Grid container
        alignContent={"center"}
        alignItems="center"
      >
        <CustomButton
          label={"Submit"}
          handleClick={submitQuiz}
        />
      </Grid>
      <AnswerDialog
        open={handleOpen}
        submitResponse={submitResponse}
        handleClose={handleClose}
      />
    </>
  );
};
export default QuizComponent;
