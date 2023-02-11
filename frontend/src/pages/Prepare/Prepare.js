import useAppContext from "../../hooks/useAppContext";

const Prepare = () => {
  const { authState } = useAppContext();
  const { logout } = authState;

  return (
    <div>
      <button onClick={async () => await logout()}>Logout</button>
      Prepare
    </div>
  );
};

export default Prepare;
