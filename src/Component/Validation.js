export default function Validation({ user }) {
    const error = {}

    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (user.name === "") {
        error.name = "Name is Required"
    }

    if (user.email === "") {
        error.email = "Email is Required"
    } else if (!email_pattern.test(user.email)) {
        error.email = "Enter Proper Email"
    }

    return error;

}