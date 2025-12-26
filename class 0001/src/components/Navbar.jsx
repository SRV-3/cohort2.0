
function Navbar(props) {
    
    
  return (
    <div>
      <div className="bg-amber-200 flex items-center justify-between">
        <h2>{props.title}</h2>
        <div className="flex gap-1.5">
            {props.links.map((e)=>{
                return <h4>{e}</h4>
            })
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar
