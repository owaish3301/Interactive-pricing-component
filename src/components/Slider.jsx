import { useContext, useEffect} from "react";
import iconSlider from '/images/icon-slider.svg';
import { AppContext } from "../context/AppContext";


export const Slider = () => {
    const {sliderValue, setSliderValue, updateViews} = useContext(AppContext);
    const segment = 5;
    const percentage = (sliderValue/(segment-1)) * 100;
    const handleSlider = (evt) => {
        setSliderValue(evt.target.value)
    }
    useEffect(() => {
        updateViews();
    }, [sliderValue]);

  return (
    <div className="w-full mx-auto mt-2 px-4">
        <div className="relative h-6">
            <div className="absolute w-full h-2 bg-slate-100 rounded-full top-1/2 -translate-y-1/2 shadow-inner">
                <div
                className="absolute w-full h-full bg-softCyan rounded-full"
                style={{width : `${percentage}%`}}
                />
            </div>
            {/* Thumb */}
            <div 
            className="absolute w-10 h-10 rounded-full bg-strongCyan shadow-lg cursor-pointer top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ left: `calc(${percentage}% - 1rem)` }} >
                <img 
                    src={iconSlider}
                    alt="slider thumb"
                    className="w-4 h-4"
                />
            </div>
        <input 
        type='range'
        min={0}
        max={segment -1}
        value={sliderValue}
        onChange={handleSlider}
        className="w-full h-full absolute top-1/2 -translate-y-1/2 opacity-0 cursor-pointer rounded-full"
        />
        </div>
    </div>
  )
}
