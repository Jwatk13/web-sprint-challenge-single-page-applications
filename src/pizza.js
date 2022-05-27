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
            {/* ////////// DROPDOWN MENU ////////// */}
            <label>Size:
                <select
                    id="size-dropdown"
                    name="size"
                    value={size} 
                    onChange={onChange} 
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
                                name='topping1'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>Garlic Ranch
                            <input 
                                name='topping1'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>BBQ Sauce
                            <input 
                                name='topping1'
                                type='radio'
                                value={topping1}
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>Spinach Alfredo
                            <input 
                                name='topping1'
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
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Grilled chicken
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Green Pepper
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Black Olives
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Roasted Garlic
                        <input
                            name='topping2'
                            type='checkbox'
                            checked={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Three Cheese
                        <input
                            name='topping2'
                            type='checkbox'
                            checked={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Extra Cheese
                        <input
                            name='topping2'
                            type='checkbox'
                            value={topping2}
                            onChange={onChange}
                        />
                    </label>
                </div>
                {/* ////////// INPUT BOX ////////// */}
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
                <p>{errors.name}</p>
                <input id='order-button' type="submit" value="Submit your order now!" />
        </form>
    )
}

export default Pizza;