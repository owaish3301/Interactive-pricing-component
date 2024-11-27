import { useContext} from "react"
import { AppContext } from "../context/AppContext";

export const SwitchPlan = () => {
    const { isYearly, setIsYearly, updateViews } = useContext(AppContext);
    
    const planChangeHandler = () => {
        setIsYearly(!isYearly);
    };
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
        <div className="opacity-60 text-sm">Monthly Billing</div>
        <div className={`rounded-full w-10 h-5 p-1 shadow-inner relative ${isYearly ? 'bg-softCyan' : 'bg-slate-300'}`} onClick={planChangeHandler}>
            { !isYearly &&
                <div className="w-4 h-3 absolute bg-white rounded-full cursor-pointer"></div>
            }
            {
                isYearly &&
                <div className="w-4 h-3 absolute bg-white right-1 rounded-full cursor-pointer"></div>
            }
            
        </div>
        <div className="opacity-60 text-sm">Yearly Billing <span className="opacity-100 text-red-400 bg-red-200 rounded-full px-2">-25%</span></div>
    </div>
  )
}
