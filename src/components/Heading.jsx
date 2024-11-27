import circles from '/images/pattern-circles.svg';

export default function Heading() {
  return (
    <div className="pt-6 relative">
        <div className='mx-auto w-max'>
            <img src={circles} alt="circlePattern" />
        </div>
        <div className='absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 w-max'>
            <h1 className='text-xl font-semibold manrope-800'>
                Simple, traffic-based pricing
            </h1>
            <p className='mx-auto w-max manrope-600'>Sign-up for our 30-day trial.</p>
            <p className='mx-auto w-max manrope-600'>No credit card required.</p>
        </div>
    </div>
  )
}
