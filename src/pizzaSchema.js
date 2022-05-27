import * as yup from 'yup';

const pizzaSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    size: yup
       .string()
       .oneOf(['', 'small', 'medium', 'large', 'x-large'])
       .required(),
    topping1: yup
        .string()
        .oneOf(['original-red', 'garlic-ranch', 'bbq-sauce', 'spinach-alfredo'])
        .required(),
    topping2: yup
        .boolean(),
    special: yup
        .string()
        .trim()
        .required() 
});

export default pizzaSchema;