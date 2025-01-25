import './TiltedScroll.css'; 

const TiltedScroll = () => {
  const items = [
    { id: '1', text: 'API Development' },
    { id: '2', text: 'Communication Skills' },
    { id: '3', text: 'Python Development' },
    { id: '4', text: 'Leadership' },
    { id: '5', text: 'Go Development' },
    { id: '6', text: 'Kubernetes' },
    { id: '7', text: 'Git' },
    { id: '8', text: 'Web Development' },
  ];

  return (
    <div className="container">
      <div className="inner-container">
        <div className="scroll-grid">
          {items.map((item) => (
            <div key={item.id} className="grid-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="240"
                height="240"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;