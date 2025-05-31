import  { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Signup() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWxzJTIwdHJlbmR5JTIwb3V0Zml0cyUyMGNvbGxlY3Rpb258ZW58MHx8fHwxNzQ4NjgzOTg2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
              alt="Fashion collection"
              className="w-full h-auto rounded-xl object-cover object-center"
            />
          </div>
          
          <div>
            <LoginForm isSignUp={true} />
            
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 