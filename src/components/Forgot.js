import React, { useState } from 'react';
import './Forgot.css'

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validate email, new password, and confirm password
    // (You may want to use a library like Yup for validation)

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      // Send a request to the server to reset the password
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (response.ok) {
        // Password reset successful
        setMessage('Password reset successful');
      } else {
        // Password reset failed
        const data = await response.json();
        setMessage(data.message || 'Password reset failed');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('An error occurred while resetting the password');
    }
  };

  return (
    <div className="reset-container">
      <div className='reset-header'>
        <div className="text" >ResetPassword</div>
        <div className="underline"></div>
      </div>
      
      <form onSubmit={handleResetPassword}>
      <div className="inputs">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="reset-input"
            placeholder='Enter your Emai Id'
          />
        </div>
        

        <div>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="reset-input"
            placeholder='Enter New Password'
          />
        </div>
        

        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="reset-input"
            placeholder='Confirm New Password'
          />
        </div>
        

        <button type="submit" className="reset-submit">
          Reset Password
        </button>
      </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
