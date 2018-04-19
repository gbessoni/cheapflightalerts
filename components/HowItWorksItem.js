const HowItWorksItem = ({ iconClass, title, text }) => (
  <div className="hiw-item">
    <div className="hiw-item__card">

      <i className={iconClass} />

      <h4>{title}</h4>

      <p>{text}</p>

    </div>
  </div>
);

export default HowItWorksItem;