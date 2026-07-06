let Card = ({ type, children }: { type: string, children: string }) => {
    return (<div data-testid="card" className={`.cardBase .${type}`}>children</div>)
}

export default Card;