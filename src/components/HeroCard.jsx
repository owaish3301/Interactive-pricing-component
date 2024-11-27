
import { useContext } from "react"
import { Features } from "./Features"
import { Slider } from "./Slider"
import { SwitchPlan } from "./SwitchPlan"
import { AppContext } from "../context/AppContext"

export const HeroCard = () => {
  const {price, views} = useContext(AppContext);
  const width = window.innerWidth;
  return (
    <div className="bg-white shadow-md mt-4 flex flex-col w-10/12 justify-center mx-auto max-w-[550px] py-6 md:px-12">
      {
        width < 768 &&
        <div className="flex justify-center flex-col">
          <div className="manrope-600 opacity-65 text-center">{views} pageviews</div>
          <Slider />
          <div className="mx-auto w-max pt-6 flex items-center"><span className="manrope-800 text-3xl mr-3">${price.toFixed(2)}</span> / month</div>
          <SwitchPlan />
          <hr className="my-8" />
          <Features />
          <button className="mt-6 rounded-full bg-desaturatedBlue w-max mx-auto px-6 py-2 text-white cursor-pointer">Start my trial</button>
        </div>
      }
      {
        width >= 768 &&
        <div>
          <div className="flex items-center my-8">
            <div className="manrope-600 opacity-65 text-center">{views} pageviews</div>
            <div className="mx-auto w-max flex items-center"><span className="manrope-800 text-3xl mr-3">${price.toFixed(2)} </span> / month</div>
          </div>
          <Slider />
          <SwitchPlan />
          <hr className="my-8 w-full" />
          <div className="flex justify-around items-center">
            <Features />
            <button className="rounded-full bg-desaturatedBlue w-max ml-auto mr-2 px-6 py-2 text-white cursor-pointer">Start my trial</button>
          </div>
        </div>
      }
      </div>
  )
}
