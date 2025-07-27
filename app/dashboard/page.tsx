import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl mt-7'>出勤・退勤</h1>
        <form className='mt-4 bg-white border rounded-md p-2'>
          <input 
            type='text' 
            name='search_year_and_month' 
            placeholder='表示したい年月を検索'/>
        </form>
      </div>

      <div className='bg-white mt-3 flex flex-col items-center p-6 rounded-md shadow-md'>
        <p>2025年MM月DD日</p>
        <p>HH:MM</p>

        <form className='flex flex-col items-center gap-4 mt-4'>
          <div className='flex gap-4'>
            <button type='submit' className='bg-blue-400 border rounded-md w-32 py-2 text-white font-semibold'>
              出勤
            </button>
            <button type='submit' className='bg-red-400 border rounded-md w-32 py-2 text-white font-semibold'>
              退勤
            </button>
          </div>

          <label className='font-medium'>作業内容</label>
          <textarea
            placeholder='今日の作業内容を入力してください'
            className='p-4 border rounded-md w-80 h-32 resize-none'
          />
        </form>
      </div>
    </div>
  )
}
