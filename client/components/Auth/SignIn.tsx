import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2x1 font-bold text-center mb-6">Sign In</h2>
                <SignIn 
                    path='/sign-in'
                    routing='path'
                    signUpUrl='/sign-up'
                    appearance={{
                        elements: {
                            formButtonPrimary: 'bg-blue-500 text-white hover:bg-blue-600',
                            formFieldInput: 'border-gray-300 focus:ring-blue-500'
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default SignInPage;