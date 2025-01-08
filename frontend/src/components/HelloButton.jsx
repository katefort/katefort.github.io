const HelloButton = () => {
  // Function to handle button click
  const handleClick = () => {
    alert('Hey! This is a test alert.');
  };

  return (
    <button onClick={handleClick}>
      Click Here!
    </button>
  );
};

export default HelloButton;