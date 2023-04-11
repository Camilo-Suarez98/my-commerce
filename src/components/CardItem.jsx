export const CardItem = ({ name, description, price }) => {
  return (
    <>
      <h2 className='text-2xl font-bold pb-2'>{name}</h2>
      <h4 className='text-xl pb-3'>{description}</h4>
      <p className='text-xl font-bold pb-2'>${price}</p>
    </>
  )
}
