import React from 'react';

const pizza = (props) => {

    const { change, submit, errors } = props;
    const { name, size, topping1, topping2, special } = props.values;

    const onChange = (evt) => {

    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>

        </form>
    )
}

export default pizza;