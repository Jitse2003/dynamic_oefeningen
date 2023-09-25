export function Picture(props){
    const {picture} = props;

    return <div>
        <img src={"/images/" + picture.name} width={"10%"} alt=""/>
        <div style={{marginBottom: "2em"}}><a href={picture.credit}>{picture.author}</a></div>
    </div>
}