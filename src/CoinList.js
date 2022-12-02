const CoinList = (props) => {
    return (
        <li>
            rank => {props.rank}
            , name => {props.name}
            , symbol => {props.symbol}
            , price => ${props.price}
        </li>
    );
}

export default CoinList;