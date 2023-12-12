import { useState } from 'react'
import { InputBox } from "./component"
import UseCurrencyinfo from "./hooks/UseCurrencyinfo.js"
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedamount] = useState(0);
  const currancyifo = UseCurrencyinfo(from);
  const options = Object.keys(currancyifo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }

  const convert = () => {
    setConvertedamount(amount * currancyifo[to])
  }


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.s6XJW4oxNuygw7C4UBnZggHaEK&pid=Api&rs=1&c=1&qlt=95&w=222&h=124')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                curruncyoption={options}
                                oncurrunctchange={(curruncy)=>{
                                  setAmount(amount)
                                }}
                                selectcurruncy={from}
                                onchangeamount={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedamount}
                                curruncyoption={options}
                                oncurrunctchange={(curruncy)=>
                                  setTo(curruncy)
                                }
                                selectcurruncy={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} To {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
