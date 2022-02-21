import * as React from "react";
import { Grid } from "@mui/material";
import { CustomButton, CustomQuestionCard } from "../../../shared";
import { AnswerDialog } from "./";

const QuizComponent = ({ data, onChangeValue, answers, submitQuiz, submitResponse, handleClose, handleOpen }) => {

  return (
    <>
      <Grid container sx={{
        backgroundColor: "#eeff41",
      }} >
        <Grid container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#f0f4c3"

        >
          <Grid item sx={12}>
            <h1>Questions</h1>
          </Grid>
        </Grid>
        <Grid container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          margin={1}
          maxWidth={"100%"}>
          {data.length ?
            data.map((item, index) => <Grid item md={4}>
              <CustomQuestionCard
                index={index}
                data={item}
                onChangeValue={onChangeValue}
                answers={answers}
              />  </Grid>)
            : "No Question"}
        </Grid>
      <Grid container
        alignContent={"center"}
        alignItems="center"
        justifyContent= "center"
        spacing={2}
        margin="2px"
      >
        <Grid item>
          <CustomButton
            label={"Submit"}
            handleClick={submitQuiz}
            type={"submit"}
          />
        </Grid>
      </Grid>
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
