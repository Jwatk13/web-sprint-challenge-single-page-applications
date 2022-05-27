import React from 'react';

const Pizza = (props) => {

    const { change, submit, errors } = props;
    const { name, size, topping1, topping2, special } = props.values;

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'radio' ? !checked : value;
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
            
                <div className='sauces'>
                    <h3>Choice of Sauce</h3>
                    <label>Topping no. 1
                    <ul>
                    
                        <li>
                           <label>Original Red
                           <input
                                name='sauce'
                                type='radio'
                                value='Original Red'
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>Garlic Ranch
                            <input 
                                name='sauce'
                                type='radio'
                                value='garlic-ranch'
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>BBQ Sauce
                            <input 
                                name='sauce'
                                type='radio'
                                value='bbq-sauce'
                                onChange={onChange}
                            />
                            </label>
                        </li>
                        <li>
                            <label>Spinach Alfredo
                            <input 
                                name='sauce'
                                type='radio'
                                value='spinach-alfredo'
                                onChange={onChange}
                            />
                            </label>
                        </li>         
                    </ul>
                    </label>
                </div>
                
            
        </form>
    )
}

export default Pizza;