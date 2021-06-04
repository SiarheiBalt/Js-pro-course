

export const Avatar = (props) => {
    console.log(props.avatar);
    return (
        <div>
            <img src={props.avatar}></img>
        </div>
    )
}