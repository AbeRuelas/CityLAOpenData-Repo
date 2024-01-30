import { string, object, ref, number } from 'yup';

const registerSchema = object({
    FirstName: string()
        .min(2, 'Must be 2 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    Mi: string()
        .max(1, 'Can only be 1 Character')
        .nullable(),
    LastName: string()
        .min(2, 'Must be 2 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    Email: string()
        .email('Invalid email address')
        .required('Required'),
    Password: string()
        .required("Please enter a password")
        .min(8, "Password must have at least 8 characters")
        .matches(/[0-9]/, "Must Contain At Least one Number")
        .matches(/[a-z]/, "Must Contain At Least one lowercase")
        .matches(/[A-Z]/, "Must Contain At Least one uppercase")
        .matches(/[!,@,$,#,%,^,&,*,(,)]/, "Must Contain At Least one Symbol"),
    PasswordConfirm: string()
        .required("Please re-type your password")
        .oneOf([ref("Password")], "Passwords does not match"),
    RoleId: number()
        .required("Please Select a Role")
})

export { registerSchema }