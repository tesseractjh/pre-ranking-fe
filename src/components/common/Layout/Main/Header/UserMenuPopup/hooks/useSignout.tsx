import API from '@api/index';

function useSignout() {
  const handleSignout = async () => {
    await API.user.signout();
    window.location.href = import.meta.env.VITE_CLIENT_URL;
  };

  return handleSignout;
}

export default useSignout;
