import useAppContext from "../../hooks/useAppContext";

const Game = () => {
  const { authState } = useAppContext();
  const { logout } = authState;

  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
      Game
    </div>
  );
};

export default Game;
