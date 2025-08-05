const DrinkList = ({data,className,title,container}) => {
  return (
    <div className={container}>
      <h2>{title}</h2>
      <ul>
        {data.map(({ country, name, detail, price }) =>
          <li key={country}>
            <div className={className}>
              <h3>{name}</h3>
              <p>{country} | {detail}</p>
            </div>
            <span>- {price}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default DrinkList