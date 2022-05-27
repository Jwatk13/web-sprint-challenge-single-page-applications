import React from 'react';

const Pizza = (props) => {

    const { change, submit, errors } = props;
    const { name, size, topping1, topping2, special } = props.values;

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
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
            <label>Size:
                <select
                    id="size-dropdown" 
                    onChange={onChange}
                    value={size}
                    name="size"
                >
                    <option value=''>- Select A Size -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='x-large'>X-Large</option>
                </select>
            </label>
            {/* ////////// RADIO BUTTONS ////////// */}
                <div className='sauces'>
                    <h3>Choice of Sauce</h3>
                    <ul>
                    
                        <li>
                           <label>Original Red
                           <input
                                name='sauce'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>Garlic Ranch
                            <input 
                                name='sauce'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>BBQ Sauce
                            <input 
                                name='sauce'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>Spinach Alfredo
                            <input 
                                name='sauce'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>         
                    </ul>
                </div>
                {/* ////////// CHECKBOXES ////////// */}
                <div className='toppings'>
                    <h3>Add Toppings</h3>
                    <label>Pepperoni
                        <input
                            name='pepperoni'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                            name='sausage'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input
                            name='canadian-bacon'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input
                            name='spicy-italian-sausage'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Grilled chicken
                        <input
                            name='grilled-chicken'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                            name='onions'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Green Pepper
                        <input
                            name='green-pepper'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Black Olives
                        <input
                            name='black-olives'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Roasted Garlic
                        <input
                            name='roasted-garlic'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Three Cheese
                        <input
                            name='three-cheese'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input
                            name='pineapple'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Extra Cheese
                        <input
                            name='extra-cheese'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <label>Special Instructions
                    <input
                        id="special-text" 
                        name="special"
                        placeholder='Anything else you would like to add?'
                        type='text'
                        value={special}
                        onChange={onChange}
                    />
                </label>
        </form>
    )
}

export default Pizza;