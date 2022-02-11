package com.quizApp.QuizApp.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="quiz_table")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int qId;
    private List<String> quesStatement;


}
