import { CardWrapper } from "./card-wrapper"

const LoginForm = () => {
    return (
        <div>
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Sign up"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form
            </CardWrapper>
        </div>
    )
}

export default LoginForm