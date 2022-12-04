const PrevButton = (props) => {
    return (
        <button onClick={props.onClick} action={props.action}>[{props.name}]</button>
    );
}

// export default MovieList;
export {PrevButton}