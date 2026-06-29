import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-start gap-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://imgs.search.brave.com/lHnx2VxSsZ8OlYQn6nFV8ouHSypk2WH-zJXoXHHBMKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJlL0FCX2RlX3Zp/bGxpZXJzLmpwZw"
                  alt=""
                />
                <h4 className="text-lg font-medium">AB de Villiers</h4>
              </div>
              <div>
                <h4 className="text-xl font-semibold">₹193.80</h4>
                <p className="text-sm text-gray-600">Earned</p>
              </div>
            </div>
            <div className="flex mt-4 p-3 bg-gray-200 rounded-xl justify-center gap-5 items-center">
              <div className="text-center ">
                <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                <h5 className="text-lg font-medium">10.2</h5>
                <p className="text-sm  text-gray-600">Hours Online</p>
              </div>
              <div className="text-center ">
                <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                <h5 className="text-lg font-medium">10.2</h5>
                <p className="text-sm  text-gray-600">Hours Online</p>
              </div>
              <div className="text-center " >
                <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                <h5 className="text-lg font-medium">10.2</h5>
                <p className="text-sm  text-gray-600">Hours Online</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails
