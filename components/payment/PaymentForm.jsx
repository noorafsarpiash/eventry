

const PaymentForm = () => {
    return (
        <form>
            <div className="my-4 space-y-2">
                <label htmlfor="name" className="block">Name</label>
                <input type="text" id="name" class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlfor="email" className="block">Email</label>
                <input type="email" id="email"
                    class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlfor="card" className="block">Card Number</label>
                <input type="text" id="card" className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlfor="expiry" className="block">Expiry Date</label>
                <input type="text" id="expiry"
                    className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlfor="cvv" className="block">CVV</label>
                <input type="text" id="cvv" className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <button type="submit" className="w-full my-8 bg-indigo-600 hover:bg-indigo-800 py-2 rounded-md">Pay Now</button>
        </form>
    )
}

export default PaymentForm