import Oven from './Oven'
import Sink from './Sink'

function Kitchen(props) {
    return(
        <div className="kitchen">
          <Oven oven="Oven"/>
          <Sink sink="Sink"/>
          <p>{props.title}</p>
        </div>
    )
}
export default Kitchen