const Message = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.33594"
        y="8.5"
        width="21.3333"
        height="16"
        rx="2"
        stroke={stroke}
        stroke-width="2"
      />
      <path
        d="M5.33594 12.5L15.1082 17.3861C15.6712 17.6676 16.334 17.6676 16.897 17.3861L26.6693 12.5"
        stroke={stroke}
        stroke-width="2"
      />
    </svg>
  );
};

export default Message;
