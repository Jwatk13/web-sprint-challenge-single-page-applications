import React from 'react';

const Pizza = (props) => {

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
            <label>Name:
                <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
            </label>
        </form>
    )
}

export default Pizza;