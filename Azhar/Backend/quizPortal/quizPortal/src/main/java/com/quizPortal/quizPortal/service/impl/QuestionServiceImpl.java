package com.quizPortal.quizPortal.service.impl;

import com.quizPortal.quizPortal.model.Entities.Quiz;
import com.quizPortal.quizPortal.dao.QuestionDao;
import com.quizPortal.quizPortal.dao.QuizDao;
import com.quizPortal.quizPortal.model.Entities.Question;
import com.quizPortal.quizPortal.model.dto.AfterSubmitResponse;
import com.quizPortal.quizPortal.model.dto.CreateAndUpdateQuestionRequest;
import com.quizPortal.quizPortal.model.dto.SubmitQuestionsRequest;
import com.quizPortal.quizPortal.service.QuestionService;
import com.quizPortal.quizPortal.service.UserSessionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.AccessDeniedException;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionDao questionDao;

    @Autowired
    QuizDao quizDao;

    @Autowired
    UserSessionService userSessionService;

    @Override
    public Question addQuestion(CreateAndUpdateQuestionRequest request, Integer quizId) {
        if(quizId==null)
            throw new IllegalArgumentException("Quiz id cannot be null");

        if(StringUtils.isBlank(request.getStatement()))
            throw new IllegalArgumentException("Statement cannot be empty");

        if(request.getAnswer()==null)
            throw new IllegalArgumentException("Answer cannot be null");

        if(request.getMarks()==null)
            throw new IllegalArgumentException("Mark cannot be null");

        if(request.getMarks()<=0)
            throw new IllegalArgumentException("Mark should be greater than 0.");

        Question question= new Question();
        question.setStatement(request.getStatement());
        question.setAnswer(request.getAnswer());
        question.setMarks(request.getMarks());
        Quiz quiz = quizDao.getById(quizId);
        question.setQuiz(quiz);
        questionDao.save(question);
        return null;
    }

    @Override
    public List<Question> getAllQuestion(Integer quizId, String token) {
        if(StringUtils.isBlank(token))
            throw new IllegalArgumentException("Token cannot be null");

        if(quizId==null)
            throw new IllegalArgumentException("Quiz id cannot be null.");

        if(userSessionService.validateSession(token)==null)
            throw new AccessDeniedException("Access denied, Please signIn again.");

        return questionDao.findAllByQuizId(quizId);
    }

    //Submit Quiz
    @Override
    public AfterSubmitResponse submitQuiz(List<SubmitQuestionsRequest> request, String token, Integer quizId) {
        if(StringUtils.isBlank(token))
            throw new IllegalArgumentException("Token cannot be null");

        if(quizId==null)
            throw new IllegalArgumentException("Quiz id cannot be null.");

        if(userSessionService.validateSession(token)==null)
            throw new AccessDeniedException("Access denied");

        List<Question> savedList = questionDao.findAllByQuizId(quizId);
        if(savedList==null)
            throw new IllegalArgumentException("No questions found in this Quiz.");

        //MAP ka use karo

        HashMap<Integer, Boolean> responseOfUser = new HashMap<>();
        Integer rightCount=0,wrongCount=0,totalMarks=0,marksScored=0;
        for(Question dataList: savedList)
        {
            responseOfUser.put(dataList.getId(), dataList.isAnswer());
            totalMarks++;
        }

        for(SubmitQuestionsRequest userList : request){
            Integer userListId = userList.getId();
            if(userListId == null)
                throw new IllegalArgumentException("Question id not be null");

            if(userList.getAnswer()==null)
                continue;

            Boolean savedAns = responseOfUser.get(userListId);

            if(savedAns.equals(userList.getAnswer())){
                rightCount++;
                marksScored++;
            }
            else{
                wrongCount++;
            }


        }


//        for(Question dataList : savedList){
//            for(SubmitQuestionsRequest userList : request ){
//                Integer userListId = userList.getId();
//                if(userListId == null)
//                    throw new IllegalArgumentException("Question id not be null");
//                if(userList.getAnswer()==null)
//                    continue;
//                if(userListId == dataList.getId()) {
//                    if (userList.getAnswer().equals(dataList.isAnswer())) {
//                        rightCount++;
//                        marksScored += dataList.getMarks();
//                        break;
//                    }
//                    else {
//                        wrongCount++;
//                        break;
//                }
//                }
//            }
//            totalMarks += dataList.getMarks();
//        }
        AfterSubmitResponse obj = new AfterSubmitResponse(rightCount,wrongCount,marksScored,totalMarks);
        return obj;
    }
}