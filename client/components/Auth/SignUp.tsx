import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <SignUp 
                    path='/sign-up'
                    routing='path'
                    signInUrl='/sign-in'
                    appearance={{
                        elements: {
                            formButtonPrimary: 'bg-green-500 text-white hover:bg-green-600',
                            formFieldInput: 'border-gray-300 focus:ring-green-200',
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default SignUpPage;