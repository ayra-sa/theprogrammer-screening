
type Props = {
    text: string
}

const Highlight = ({text}: Props) => {
  return (
    <span className="highlight">&#123;{text}&#125;</span>
  )
}

export default Highlight