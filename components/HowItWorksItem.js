const HowItWorksItem = ({imgSrc, imgAlt, title, text}) => (
    <div className="hiw-item">
        <div className="hiw-item__card">

            <div className="text-center">
                <img src={imgSrc} alt={imgAlt} width={140} height={140} />
            </div>

            <h4>{title}</h4>

            <p>{text}</p>

        </div>
    </div>
);

export default HowItWorksItem;