import './App.css'

function App() {

  return (
    <div className="App font-dm-sans flex justify-center items-center min-h-screen text-[18px] bg-cream">
      <article className='min-w-[370px]'>

        <header className='flex justify-between py-3 px-6 bg-soft-red text-white rounded-lg items-center shadow-md shadow-gray-300'>
          <div>
            <h6 className='text-sm'>My balance</h6>
            <h3 className='text-2xl font-bold mt-1'>$921.48</h3>
          </div>
          <div className='h-[28px] w-[28px] rounded-full bg-dark-brown'>
            <div className='border-2 border-white h-[28px] w-[28px] rounded-full relative -left-1/2'></div>
          </div>
        </header>

        <section className='bg-white mt-4 p-8 rounded-lg shadow-md shadow-gray-300'>
          <h2 className='font-bold text-2xl'>Spending - Last 7 days</h2>

          <div className='h-48 flex gap-3 justify-center items-end'>

            <div className='w-[40px] text-center'>
              <div className='bg-soft-red h-10 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>mon</h6>
            </div>

            <div className='w-[40px] text-center'>
              <div className='bg-soft-red h-20 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>tue</h6>
            </div>

            <div className='w-[40px] text-center'>
              <div className='bg-cyan h-28 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>thu</h6>
            </div>

            <div className='w-[40px] text-center'>
              <div className='bg-soft-red h-16 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>fri</h6>
            </div>

            <div className='w-[40px] text-center'>
              <div className='bg-soft-red h-12 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>sat</h6>
            </div>

            <div className='w-[40px] text-center'>
              <div className='bg-soft-red h-24 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>sun</h6>
            </div>

            <div className='w-[40px] text-center'>
              <div className='bg-soft-red h-14 barProgress group'>
                <h4 className='bar__text'>$52.36</h4>
              </div>
              <h6 className='text-medium-brown text-[12px]'>mon</h6>
            </div>

          </div>

          <hr className='mt-6' />

          <h3 className='text-medium-brown text-[15px] mt-6'>Total this month</h3>

          <section className='flex justify-between items-center mt-1'>
            <h2 className='font-bold text-4xl'>$478.33</h2>
            <div className='text-right text-sm'>
              <h4 className='font-bold'>+2.4%</h4>
              <h5 className='text-medium-brown'>from last month</h5>
            </div>
          </section>

        </section>

      </article>
    </div>
  )
}

export default App
