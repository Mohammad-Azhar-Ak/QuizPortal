package com.quizPortal.quizPortal.controller;

import com.quizPortal.quizPortal.model.Entities.Question;
import com.quizPortal.quizPortal.model.Entities.Quiz;
import com.quizPortal.quizPortal.model.dto.*;
import com.quizPortal.quizPortal.service.QuestionService;
import com.quizPortal.quizPortal.service.QuizService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.AccessDeniedException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/quiz")
public class QuizController  {

    @Autowired
    QuizService quizService;

    @Autowired
    QuestionService questionService;

    @PostMapping
    public BaseResponse<Quiz> createQuiz(@RequestBody CreateUpdateQuizRequest request){
        Quiz quiz=quizService.createQuiz(request);
        return new BaseResponse<>(HttpStatus.OK.value(), "Quiz created successfully", quiz);
    }

    @GetMapping(path="/{quizId}")
    public BaseResponse<Quiz> getQuiz(@PathVariable("quizId") Integer quizId){
        Quiz quiz = quizService.getQuiz(quizId);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", quiz);
    }

    @GetMapping
    public BaseResponse<List<Quiz>> getAllQuiz(@RequestHeader("Authorization") String token){
        if(StringUtils.isBlank(token))
            throw new AccessDeniedException("Token cannot be null.");
        List<Quiz> list =quizService.getAllQuiz(token);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", list);
    }

    @PostMapping(path ="/{quizId}/question")
    public BaseResponse<Question> addQuestion(@RequestBody CreateAndUpdateQuestionRequest request , @PathVariable("quizId") Integer quizId){
        Question question = questionService.addQuestion(request,quizId);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", question);
    }

    @GetMapping(path ="/{quizId}/questions")
    public BaseResponse<List<Question>> getAllQuestion(@RequestHeader("Authorization")String token,@PathVariable("quizId") Integer quizId){
        if(StringUtils.isBlank(token))
            throw new AccessDeniedException("Token cannot be null.");
        List<Question> list = questionService.getAllQuestion(quizId, token);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", list);
    }

    @PostMapping(path = "{quizId}/submit")
    public BaseResponse<AfterSubmitResponse> submitQuiz(@RequestHeader("Authorization")String token,@RequestBody  List<SubmitQuestionsRequest> list,@PathVariable("quizId") int quizId){ //object bana lena h
        if(StringUtils.isBlank(token))
            throw new AccessDeniedException("Token cannot be null.");
        AfterSubmitResponse scores = questionService.submitQuiz(list, token, quizId);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", scores);
    }
}
