// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../hooks/useAuth';

// type AuthMode = 'login' | 'signup' | 'admin';

// const Auth: React.FC = () => {
//   const [mode, setMode] = useState<AuthMode>('login');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secretCode, setSecretCode] = useState('');
//   const [error, setError] = useState('');
//   const { login, signup, adminLogin } = useAuth();

//   const fullText = 'AI Component Generator';
//   const [typedText, setTypedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setTypedText((prev) => {
//         if (index >= fullText.length) {
//           clearInterval(interval);
//           return prev;
//         }
//         const next = fullText.slice(0, index + 1);
//         index++;
//         return next;
//       });
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);

//   const handleAuthAction = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     try {
//       if (mode === 'login') await login(email, password);
//       else if (mode === 'signup') await signup(email, password);
//       else if (mode === 'admin') await adminLogin(secretCode);
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   const renderForm = () => {
//     if (mode === 'admin') {
//       return (
//         <>
//           <label className="text-sm font-medium text-white mb-2" htmlFor="secretCode">
//             Secret Code
//           </label>
//           <input
//             type="password"
//             id="secretCode"
//             value={secretCode}
//             onChange={(e) => setSecretCode(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
//             required
//           />
//         </>
//       );
//     }

//     return (
//       <>
//         <label className="text-sm font-medium text-white mb-2" htmlFor="email">
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
//           required
//         />
//         <label className="text-sm font-medium text-white mt-4 mb-2" htmlFor="password">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
//           required
//         />
//       </>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-800 to-rose-900 flex items-center justify-center px-4">
//       <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">
//         {/* Icon + Animated Heading */}
//         <div className="flex flex-col items-center mb-8">
//           {/* AI brain chip icon */}
//           <svg
//             className="w-12 h-12 text-white mb-2"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             viewBox="0 0 24 24"
//           >
//             <path d="M9 9h6v6H9z" />
//             <path d="M4 4h2v2H4zM18 4h2v2h-2zM4 18h2v2H4zM18 18h2v2h-2zM2 9h2v6H2zM20 9h2v6h-2zM9 2h6v2H9zM9 20h6v2H9z" />
//           </svg>

//           <h1 className="text-3xl font-bold text-center font-mono whitespace-nowrap bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
//             {typedText}
//             {typedText.length < fullText.length && (
//               <span className="text-white animate-pulse">|</span>
//             )}
//           </h1>
//         </div>

//         {/* Mode Switcher */}
//         <div className="flex justify-between border-b border-white/20 mb-6">
//           {['login', 'signup', 'admin'].map((m) => (
//             <button
//               key={m}
//               onClick={() => setMode(m as AuthMode)}
//               className={`flex-1 py-2 text-sm font-medium transition ${
//                 mode === m
//                   ? 'border-b-2 border-rose-400 text-white'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               {m === 'login' ? 'Login' : m === 'signup' ? 'Sign Up' : 'Admin'}
//             </button>
//           ))}
//         </div>

//         {/* Form */}
//         <form onSubmit={handleAuthAction} className="flex flex-col space-y-4">
//           <h2 className="text-xl font-semibold text-white text-center">
//             {mode === 'login'
//               ? 'Login to your account'
//               : mode === 'signup'
//               ? 'Create a new account'
//               : 'Admin Panel Access'}
//           </h2>
//           {renderForm()}
//           {error && <p className="text-red-400 text-center text-sm">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg text-white font-semibold hover:shadow-xl hover:scale-105 transition-all"
//           >
//             {mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Register' : 'Enter'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;
import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

type AuthMode = 'login' | 'signup' | 'admin';

const Auth: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [error, setError] = useState('');
  const { setAuthToken , adminLogin} = useAuth(); // Update this according to your context logic

  const fullText = 'AI Component Generator';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => {
        if (index >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        const next = fullText.slice(0, index + 1);
        index++;
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      let response;

      if (mode === 'login') {
        response = await fetch('http://localhost:3001/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
      } else if (mode === 'signup') {
        response = await fetch('http://localhost:3001/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
      } else if (mode === 'admin') {
        adminLogin (secretCode )
      }

      if (!response?.ok) {
        const { error } = await response?.json();
        throw new Error(error || 'Something went wrong');
      }

      const data = await response?.json();

      // ✅ Set token in localStorage and context
      // localStorage.setItem('token', token);
      setAuthToken(data.token, data.email);

    } catch (err: any) {
      setError(err.message || 'Unexpected error');
    }
  };

  const renderForm = () => {
    if (mode === 'admin') {
      return (
        <>
          <label className="text-sm font-medium text-white mb-2" htmlFor="secretCode">
            Secret Code
          </label>
          <input
            type="password"
            id="secretCode"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </>
      );
    }

    return (
      <>
        <label className="text-sm font-medium text-white mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
          required
        />
        <label className="text-sm font-medium text-white mt-4 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
          required
        />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 to-rose-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">
        {/* Heading */}
        <div className="flex flex-col items-center mb-8">
          <svg className="w-12 h-12 text-white mb-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 9h6v6H9z" />
            <path d="M4 4h2v2H4zM18 4h2v2h-2zM4 18h2v2H4zM18 18h2v2h-2zM2 9h2v6H2zM20 9h2v6h-2zM9 2h6v2H9zM9 20h6v2H9z" />
          </svg>

          <h1 className="text-3xl font-bold text-center font-mono whitespace-nowrap bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            {typedText}
            {typedText.length < fullText.length && <span className="text-white animate-pulse">|</span>}
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-between border-b border-white/20 mb-6">
          {['login', 'signup', 'admin'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as AuthMode)}
              className={`flex-1 py-2 text-sm font-medium transition ${
                mode === m ? 'border-b-2 border-rose-400 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {m === 'login' ? 'Login' : m === 'signup' ? 'Sign Up' : 'Admin'}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleAuthAction} className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-white text-center">
            {mode === 'login'
              ? 'Login to your account'
              : mode === 'signup'
              ? 'Create a new account'
              : 'Admin Panel Access'}
          </h2>
          {renderForm()}
          {error && <p className="text-red-400 text-center text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg text-white font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            {mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Register' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
