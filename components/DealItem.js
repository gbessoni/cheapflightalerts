const DealItem = ({image, date, title1, title2, isTrend, isHot}) => (
    <div className="deal-item">
        <div className="deal-item__card" style={{ background: 'url(' + image + ')' }}>


            <div className="deal-item__content">
                <div className="deal-item__date">
                    {date}
                </div>

                <div className="deal-item__bottom">

                    <div className="deal-item__icons">
                        {isTrend && <img src={'/static/img/stats.svg'} alt="stats" width={20} height={20} />}
                        {isHot && <img src={'/static/img/hot-filled.svg'} alt="hot" width={20} height={20} />}
                    </div>
                    <div className="deal-item__title">
                        {title1}
                    </div>

                    <div className="deal-item__price">
                        {title2}
                    </div>

                </div>

            </div>



            {/*<div className="deal-item__header">*/}

                {/*<div className="deal-item__img">*/}
                    {/*<img src={image} alt={title1} />*/}
                {/*</div>*/}

                {/*<div className="deal-item__comments">*/}
                    {/*<span>{comments}</span> comments*/}
                {/*</div>*/}

                {/*<div className="deal-item__labels">*/}
                    {/*<i className="ion-arrow-graph-up-right"/>*/}
                    {/*<i className="ion-flame"/>*/}
                {/*</div>*/}

                {/*<div className="deal-item__info">*/}
                    {/*<div className="deal-item__info__date">*/}
                        {/*{date}*/}
                    {/*</div>*/}
                    {/*<div className="deal-item__info__share">*/}
                        {/*<a href="#">*/}
                            {/*<i className="ion-ios-paperplane"/>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    {/*<div className="deal-item__info__read-more">*/}
                        {/*<a href="#">Read more</a>*/}
                    {/*</div>*/}
                {/*</div>*/}

            {/*</div>*/}

            {/*<div className="deal-item__body">*/}
                {/*<h4>{title1} <span>{price1}</span></h4>*/}
                {/*<h4>{title2} {price2}</h4>*/}
            {/*</div>*/}

        </div>
    </div>
);

export default DealItem;