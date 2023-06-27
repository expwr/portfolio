const Icons = () => {
  return (
    <div className="iconscontainer">
      {['1', '2', '3', '4', '5'].map(path => {
        return(
            <div key={path}>
                <img src={`/icons/${path}.png`} width='250' height='150' />
            </div>
        )
      })}
    </div>
  )
}

export default Icons
