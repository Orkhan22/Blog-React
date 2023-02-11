export function Card(props){
    
    return(
        <div>
        <img src={props.img} />
        <h2>{props.name}</h2>
        <p>{props.param}</p>
        <p>{props.more}</p>
        </div>
    )
}