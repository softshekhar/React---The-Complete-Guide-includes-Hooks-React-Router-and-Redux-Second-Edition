import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
    const [inputState, setInputState] = useState({title: '', amount: ''});

    const submitHandler = event => {
        event.preventDefault();

        // ...
    };

    const onChangeTitleEventHandler = (event) => {
        const newTitle = event.target.value;
        setInputState(prevInputState => ({
            title: newTitle,
            amount: prevInputState.amount
        }));
    }

    const onChangeAmountEventHandler = (event) => {
        const newAmount = event.target.value;
        setInputState(prevInputState => ({
            title: prevInputState.title,
            amount: newAmount
        }));
    }

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label>{inputState.title}</label>
                        <label>:</label>
                        <label>{inputState.amount}</label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={inputState.title}
                            onChange={onChangeTitleEventHandler}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={inputState.amount}
                            onChange={onChangeAmountEventHandler}
                        />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
