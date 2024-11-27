import check from '/images/icon-check.svg'

export const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className=''>
            <img src={check} alt='check-mark' className='inline' />
            <p className='inline ml-2 manrope-600 opacity-60'>Unlimited websites </p>
        </div>
         <div className=''>
            <img src={check} alt='check-mark' className='inline' />
            <p className='inline ml-2 manrope-600 opacity-60'>100% data ownership </p>
        </div>
         <div className=''>
            <img src={check} alt='check-mark' className='inline' />
            <p className='inline ml-2 manrope-600 opacity-60'>Email reports </p>
        </div>
    </div>
  )
}
