import React from 'react';
import { CustomCard, CustomRadioButton } from '../../../shared';
import { choice } from '../../../shared/constants';

const QuizCardComponent = ({ index, data, onChangeValue, answers }) => {
    return (
        <>
            <CustomCard index={index}
                title={data.statement}
                buttonLabel="Score => 1" />
            <CustomRadioButton
                options={choice}
                value={answers[data.id]}
                handleChange={(value) => onChangeValue(data.id, value)} />

        </>)


}

export default QuizCardComponent;