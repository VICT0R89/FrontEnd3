const Header = props =>{
  let {name} = props;
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

export default Header