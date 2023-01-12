
export const Vacancy: React.FC <any> = ({vacancy}) => {
  return (
    <div className="vacancy" key={vacancy.name}>
      <img src={vacancy.img} alt="" className="vacancy__img"/>
      <p className="vacancy__name">
        {vacancy.name}
      </p>
    </div>
  )
}